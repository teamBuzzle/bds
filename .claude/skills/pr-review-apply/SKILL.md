---
name: pr-review-apply
description: 본인 PR이 받은 리뷰 코멘트를 분석해 반영·반박·보류 중 하나로 처리하고 rebase로 기존 커밋을 직접 수정. Use when the user says "pr-review-apply", "리뷰 반영", "리뷰 반영해", "review apply", "PR 리뷰 반영".
---

본인 PR이 받은 리뷰 코멘트를 코드 재분석 후 처리하고, rebase로 관련 커밋을 직접 수정한다.

## 핵심 원칙

- **본인 PR만 대상** — author가 현재 사용자가 아니면 즉시 중단
- **각 코멘트마다 자율 판단** — 반영 / 반박 / 보류 중 하나
- **반박·보류 시 근거 자료 필수** — 코드 인용, 라인 번호, 패턴 참조, 문서 링크
- **rebase로 커밋 직접 수정** — 새 "fix" 커밋 추가 금지. fixup + autosquash로 원래 커밋에 합친다
- **반응 이모지로 동의도 표현** — `pr-review` 스킬의 이모지 정책 준용

## Steps

### 1. 대상 PR 확인 및 권한 검증

```bash
# 사용자가 PR 번호를 지정하면 그 PR만, 아니면 현재 브랜치의 PR
PR=${1:-$(gh pr view --json number --jq .number)}
ME=$(gh api user --jq '.login')
AUTHOR=$(gh pr view $PR --json author --jq '.author.login')
```

**중단 조건:**

- `AUTHOR != ME` → "본인 PR만 처리합니다" 출력 후 종료
- PR 상태가 `MERGED`/`CLOSED` → "이미 닫힌 PR입니다" 출력 후 종료
- 현재 브랜치가 PR HEAD 브랜치와 다름 → 자동 checkout 시도, 실패 시 종료

### 2. 미해결 리뷰 코멘트 수집

```bash
gh api graphql -f query='
  query($owner:String!, $repo:String!, $number:Int!) {
    repository(owner:$owner, name:$repo) {
      pullRequest(number:$number) {
        reviewThreads(first:100) {
          nodes {
            id
            isResolved
            isOutdated
            comments(first:50) {
              nodes {
                databaseId
                author { login }
                body
                path
                line
                originalLine
                diffHunk
                commit { oid }
              }
            }
          }
        }
      }
    }
  }' -F owner={owner} -F repo={repo} -F number=$PR
```

**처리 대상 필터:**

- `isResolved == false` (이미 해결된 건 스킵)
- 첫 코멘트 작성자 ≠ 본인 (내가 자기 PR에 단 코멘트는 제외)
- 마지막 코멘트 작성자가 본인이 아님 (이미 답한 건 스킵 — 새 답글이 달리면 재처리)

**이미 outdated인 스레드 처리:**

- `isOutdated == true` + 본인이 답하지 않은 경우 → 코드를 다시 보고 실제 반영됐는지 확인
    - 반영됨 → "이미 후속 커밋에서 반영됨 (SHA 인용)" 답글 + resolve
    - 미반영 → 일반 처리 흐름으로 진행

### 3. 각 코멘트 분류 (반영 / 반박 / 보류)

각 미해결 코멘트마다 코드 재분석 후 분류한다.

| 분류            | 판단 기준                                                | 처리                                     |
| --------------- | -------------------------------------------------------- | ---------------------------------------- |
| **반영(APPLY)** | 지적이 타당하고 변경 비용이 합리적                       | 코드 수정 + 답글 + 이모지                |
| **반박(REBUT)** | 지적 근거가 잘못됨, 의도된 동작, 트레이드오프상 부적절   | 답글에 **근거 자료 필수** + 이모지       |
| **보류(HOLD)**  | 추가 정보·결정 필요 (예: 디자인 결정, 다른 팀 합의 대기) | 답글에 **무엇이 필요한지 명시** + 이모지 |

**반박·보류는 근거 자료 의무화**

근거에 다음 중 **2개 이상** 포함:

- 코드 인용 (`path:line` + 코드 블록)
- 기존 패턴 참조 (다른 파일에서 동일 패턴 사용 사례)
- 프로젝트 룰 인용 (`.claude/rules/*.mdc` 항목)
- 외부 문서 링크 (공식 docs, RFC, 표준)
- 트레이드오프 분석 (대안 X, Y 비교)

근거가 부족하면 강제로 분류를 **반영(APPLY)** 으로 전환한다.

### 4. 반영(APPLY) 처리 — rebase로 기존 커밋 직접 수정

**새 "fix: review feedback" 커밋을 추가하지 않는다.** 지적된 라인의 원인 커밋을 찾아 그 커밋을 직접 수정한다.

#### 4-1. 원인 커밋 찾기

```bash
# 코멘트가 가리키는 파일+라인의 원인 커밋
TARGET_COMMIT=$(git blame -L <line>,<line> <file> | awk '{print $1}')
# blame 결과가 PR 범위 밖(main 등) 커밋이면 → 새 커밋 필요 (예외)
```

PR 범위 안 커밋이면 그 커밋에 fixup 한다. 범위 밖이면 §4-3로.

#### 4-2. 코드 수정 + fixup 커밋

```bash
# 1) 코드 수정 (Edit 도구로)
# 2) fixup 커밋 생성
git add <file>
git commit --fixup=$TARGET_COMMIT

# 3) PR 베이스 브랜치로부터 autosquash rebase
BASE=$(gh pr view $PR --json baseRefName --jq .baseRefName)
GIT_SEQUENCE_EDITOR=: git rebase --autosquash --interactive origin/$BASE
```

**주의: `GIT_SEQUENCE_EDITOR=:`** — 에디터 안 띄우고 자동 진행. autosquash가 fixup을 원래 커밋에 합친다.

rebase 충돌 발생 시 **자동 해결 시도하지 않는다.** 사용자에게 알리고 중단.

#### 4-3. 원인 커밋이 PR 범위 밖인 경우

main 등 베이스 브랜치 커밋을 수정할 수 없으므로 새 커밋을 만든다 (예외 케이스).

```bash
git add <file>
git commit -m "fix: <리뷰 반영 내용 요약> (review #<comment_id>)"
```

이 케이스는 결과 보고에 `EXCEPTION (base commit)` 으로 표시.

#### 4-4. force push

rebase 후 history가 바뀌므로 force-push 필요. **반드시 `--force-with-lease` 사용** (다른 사람이 푸시한 게 있으면 안전하게 거부됨).

```bash
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# main 보호
if [ "$CURRENT_BRANCH" = "main" ] || [ "$CURRENT_BRANCH" = "master" ]; then
  echo "ERROR: main/master 브랜치에는 force-push 금지"
  exit 1
fi

git push --force-with-lease origin $CURRENT_BRANCH
```

**금지:**

- ❌ `git push --force` (단순 force) — 항상 `--force-with-lease`
- ❌ main/master 브랜치 force-push
- ❌ commit hooks 우회 (`--no-verify`)

#### 4-5. 답글 + 이모지

```bash
# 답글 (스레드의 마지막 코멘트에 reply)
gh api repos/{owner}/{repo}/pulls/$PR/comments/<comment_id>/replies -X POST \
  -f body="반영했습니다. <간단한 설명> ($(git rev-parse --short HEAD))"

# 이모지 반응 — 반영 동의 표시
gh api repos/{owner}/{repo}/pulls/comments/<comment_id>/reactions -X POST -f content="+1"
gh api repos/{owner}/{repo}/pulls/comments/<comment_id>/reactions -X POST -f content="rocket"
```

#### 4-6. resolve 금지

**작성자는 어떤 경우에도 resolve하지 않는다.** resolve는 리뷰어만 수행한다.

- 단순 기계적 변경(오타·포맷·린트)이라도 resolve 금지 — 리뷰어가 반영 여부를 직접 확인하게 함
- 작성자는 답글 + 커밋 SHA 인용까지만 담당

### 5. 반박(REBUT) 처리

코드 수정 없음. 답글에 근거 자료 포함.

```bash
gh api repos/{owner}/{repo}/pulls/$PR/comments/<comment_id>/replies -X POST -f body="<답글 본문>"
```

**답글 형식:**

```
<반박 입장 — 한 문장>

**근거**
1. <근거 1: 코드 인용 path:line 또는 패턴 참조>
2. <근거 2: 룰 인용 또는 문서 링크>

<선택: 트레이드오프 / 대안 / 추후 논의 제안>
```

**이모지 — 정중한 부동의:**

```bash
gh api repos/{owner}/{repo}/pulls/comments/<comment_id>/reactions -X POST -f content="eyes"
```

resolve는 **하지 않는다** — 리뷰어가 답글 확인 후 동의/재반박 결정.

### 5.1. 의견 충돌 종결 프로토콜 (작성자 우선)

리뷰어 재반박에 답글 왕복이 길어지면 무한 토론 대신 **회차 한도에서 작성자 입장으로 종결**한다.

**라운드 한도**

§2의 `reviewThreads.comments`로 발언자별 코멘트 수를 센다.

- **나(작성자)의 답글 ≤ 2회**
- **리뷰어 발언 ≤ 2회** (정책 — `pr-review` §8.3.1과 미러)

내 답글이 2회에 도달했는데 리뷰어가 또 답글을 보내왔다면, 그 내용을 **새 근거 평가**만 한 뒤 종결한다.

**REBUT_FINAL 처리**

리뷰어 마지막 답글 평가:

| 결과                                  | 처리                                  |
| ------------------------------------- | ------------------------------------- |
| 새 코드 인용·룰·외부 문서가 있고 타당 | 분류 변경: **반영(APPLY)**, §4로 진행 |
| 같은 주장의 반복이거나 새 근거 부족   | **반박 종결(REBUT_FINAL)** 답글 1회   |

REBUT_FINAL 답글 형식:

```
앞서 드린 답글의 근거에서 추가로 보강할 자료는 없습니다. 이번 PR은 현재 구현을 유지하고 머지하겠습니다. 추가 논의는 별도 이슈로 이어가면 감사하겠습니다.

(선택) **후속**
- <별도 이슈/PR 링크 또는 "별도 이슈 발행 예정">
```

- 한글, 존댓말, 차분한 톤
- 이모지: `eyes` 1개
- **resolve는 하지 않는다** — 리뷰어가 `pr-review` §8.3.1에 따라 종결 답글 후 resolve 처리

**예외 — BLOCKED (작성자 우선 적용 금지)**

리뷰어 코멘트가 다음에 해당하면 REBUT_FINAL로 마무리하지 말고 사용자(인간)에게 보고하고 중단:

- 라인 코멘트가 `[P1]` 접두사 (실제 버그·기능 회귀)
- 본문에 `SQL injection`, `XSS`, `secret`, `token`, `auth`, `데이터 손실`, `data loss`, `breaking change`, `compliance`, `법적` 등 키워드 포함
- 빌드/CI 실패 우려 명시 (예: "이렇게 두면 빌드 실패")

BLOCKED 시 §9 auto-merge 활성화도 **스킵**한다. 결과 테이블에 `BLOCKED (P1 합의 실패)` 표기.

**처리 흐름 요약**

```
새 근거 있고 타당 → 반영(APPLY) §4
새 근거 없음 + 내 답글 < 2회 → 반박(REBUT) §5 (근거 보강)
새 근거 없음 + 내 답글 ≥ 2회 + P2/P3 → REBUT_FINAL 답글 1회, auto-merge 유지
P1/보안/CI 우려 → BLOCKED, 사용자 보고, auto-merge 스킵
```

### 6. 보류(HOLD) 처리

코드 수정 없음. 답글에 필요한 정보 명시.

```
<무엇을 보류하는지 — 한 문장>

**필요한 정보**
- <항목 1>
- <항목 2>

<선택: 임시 조치 / 다음 액션 / 책임자 멘션>
```

**이모지 — 검토 중:**

```bash
gh api repos/{owner}/{repo}/pulls/comments/<comment_id>/reactions -X POST -f content="thinking_face"
# (thinking_face가 지원 안 되면 eyes 사용)
```

resolve는 **하지 않는다.**

### 7. 이모지 반응 가이드 (동의도)

`pr-review` 스킬의 §8 이모지 정책을 작성자 입장에서 미러링한다.

| 분류                          | 동의도 | 사용 가능 이모지        |
| ----------------------------- | ------ | ----------------------- |
| 반영(APPLY) — 전적 동의       | 높음   | `+1`, `rocket`, `heart` |
| 반영(APPLY) — 일부 변형 반영  | 중간   | `+1`, `eyes`            |
| 반박(REBUT)                   | 낮음   | `eyes` (정중한 부동의)  |
| 보류(HOLD)                    | 미정   | `eyes`                  |
| P5 칭찬 받은 경우 (반영 불요) | 감사   | `heart`, `+1`           |

**자율 판단**: 분위기와 PR 톤에 맞게 자연스럽게 선택. 과한 이모지 남발 금지 (코멘트당 최대 2개).

**금지:** `confused`, `-1` 같은 부정적 이모지는 사용하지 않는다 (반박은 답글 본문으로).

### 8. 리뷰어 재요청

반영(APPLY)이 1건 이상 있으면 원 리뷰어를 재요청해서 후속 리뷰를 유도한다.

```bash
ORIG_REVIEWERS=$(gh api repos/{owner}/{repo}/pulls/$PR/reviews --jq '[.[].user.login] | unique | .[]')
for r in $ORIG_REVIEWERS; do
  [ "$r" = "$ME" ] && continue
  gh pr edit $PR --add-reviewer $r
done
```

반박(REBUT)·보류(HOLD)만 있는 경우 재요청 생략 (리뷰어가 답글 보고 다음 액션 결정).

### 9. Auto-merge 활성화

작성자는 직접 `gh pr merge` 하지 않는다. 대신 **GitHub Auto-merge**를 활성화해서 "모든 조건(리뷰어 approve + 모든 스레드 resolve + CI 통과 + 브랜치 보호 규칙)이 만족되면 자동 병합"되도록 둔다. 병합 트리거는 **리뷰어의 resolve 액션**이 된다.

```bash
# auto-merge 활성화 (squash 방식)
gh pr merge $PR --auto --squash --delete-branch
```

**조건:**

- 이번 실행에 APPLY가 1건 이상 있었거나, 이미 auto-merge 대기 상태가 아닌 경우에만 활성화
- PR이 draft면 활성화하지 않음 (draft 해제 후 수동으로)
- **BLOCKED 스레드가 1건도 없을 때만 활성화** (§5.1 예외 — P1·보안·데이터 손실·CI 실패 우려)
- 본인 PR이므로 `author == ME` 이미 §1에서 검증됨

**레포 정책:**

- `--squash` 가 기본. 레포가 merge commit을 선호하면 `--merge`, rebase 히스토리를 원하면 `--rebase`로 전환
- `--delete-branch` 는 병합 후 브랜치 자동 삭제 (레포 기본 설정과 일치하는지 확인)

**auto-merge가 안 되는 케이스 (경고만 출력, 진행은 계속):**

- 레포 브랜치 보호 규칙에서 auto-merge 비활성화됨 → `Auto-merge is not enabled for this repository` 에러 → 리뷰어에게 수동 머지 요청 알림
- PR이 draft 상태 → 결과 보고에 `AUTO_MERGE_SKIPPED (draft)` 표기
- BLOCKED 스레드 존재 → 결과 보고에 `AUTO_MERGE_SKIPPED (BLOCKED)` 표기, 사용자에게 합의 실패 항목 보고

**금지:**

- ❌ `gh pr merge $PR --squash` (즉시 병합, `--auto` 없이) — 작성자 self-merge 금지
- ❌ 조건 미달인데 강제 병합 시도

### 9.5. 회고록 작성 (CLAUDE.local.md)

반영(APPLY)된 리뷰 코멘트는 같은 실수를 반복하지 않도록 **현재 레포의 `CLAUDE.local.md`에 회고록을 누적 작성**한다.

**대상 파일**

```bash
REPO_ROOT=$(git rev-parse --show-toplevel)
LOCAL_MD="$REPO_ROOT/CLAUDE.local.md"
[ -f "$LOCAL_MD" ] || touch "$LOCAL_MD"
```

워크스페이스 루트가 아닌 **개별 레포 루트**의 `CLAUDE.local.md`를 사용한다 (예: `buzzle-editor/CLAUDE.local.md`).

**기록 대상**

- **반영(APPLY)** 으로 분류된 모든 코멘트 → 필수
- **BLOCKED** 항목 → 필수 (`사용자 판단 대기` 표기)
- **REBUT / REBUT_FINAL / HOLD** → 선택 (같은 지적 재발 시 근거 빨리 찾기 위함)

**기록 형식 (append, 새 PR마다 새 섹션)**

```markdown
## 리뷰 회고 — YYYY-MM-DD PR #<번호> (<제목>)

### [P<n>] <파일:라인 또는 짧은 주제>

**받은 지적**

> <리뷰 코멘트 핵심 1~2문장>

**원인**
<왜 이런 코드를 썼는지 — 룰 미숙지·패턴 부재·검토 부족 등 솔직하게>

**적용한 변경**
<무엇을 어떻게 바꿨는지 + 커밋 SHA>

**다음부터**
<체크 가능한 행동 1~2개>
```

**작성 원칙**

- **솔직한 원인** — "단순 실수" 같은 면피성 표현 금지. 구체적 인지 실패 지점을 적는다 (예: "`predictability.mdc` 룰을 안 읽음", "기존 패턴 grep 안 함", "unknown 처리 룰을 모름")
- **체크 가능한 다음 액션** — "조심하겠다" 류 다짐 금지. 행동으로 (예: "PR 작업 전 `.claude/rules/*.mdc` 1회 읽기", "새 컴포넌트 시작 전 `grep -r \"useQuery\" src/components` 실행")
- **append-only** — 기존 회고 수정·삭제 금지. 새 PR마다 끝에 추가
- **PR 브랜치에 커밋하지 않는다** — `.gitignore`에 `CLAUDE.local.md` 포함 여부 확인. 누락 시 1회 안내: "개인 메모이므로 `.gitignore`에 `CLAUDE.local.md` 추가를 권장합니다." (스킬은 자동으로 add 하지 않는다)
- **용량 관리** — 50KB 초과 시 사용자에게 알리고 오래된 회고를 별도 파일(`docs/review-retro/<year>-<quarter>.md` 등)로 옮기도록 제안 (자동 이동 안 함)

**예시**

```markdown
## 리뷰 회고 — 2026-04-30 PR #234 (feat: 사용자 프로필 카드)

### [P2] src/components/ProfileCard.tsx:45

**받은 지적**

> `useEffect` 안에서 `fetch` 직접 호출 — `useQuery` 훅 패턴이 이 레포 표준

**원인**
`.claude/rules/data-fetching.mdc`를 읽지 않고 작업. 다른 컴포넌트에서 어떻게 fetch 하는지 grep 안 함.

**적용한 변경**
`useQuery(["profile", id], fetchProfile)` 로 교체 (커밋 a1b2c3d). 캐싱·refetch 정책도 표준 옵션 적용.

**다음부터**

- 데이터 페칭 코드 작성 전 `.claude/rules/data-fetching.mdc` 읽기
- 새 컴포넌트 시작 전 `grep -r "useQuery" src/components` 로 기존 패턴 1개 확인
```

**스킵 조건**

- APPLY와 BLOCKED 모두 0건이면 회고 스킵 가능
- `git rev-parse --show-toplevel` 실패(워크스페이스 루트 등 Git 리포 아님) → 스킵하고 사용자에게 "개별 레포로 이동 후 다시 실행" 안내

회고 작성 결과(추가 엔트리 수, `.gitignore` 안내 발생 여부)는 §10 결과 보고에 포함한다.

### 10. 결과 보고

```
| 스레드 | 분류 | 원인 커밋 | 답글 | 이모지 | resolve | retro |
|---|---|---|---|---|---|---|
| #N (작성자) | APPLY/REBUT/HOLD/REBUT_FINAL/BLOCKED | abc1234 / – | ✓ | +1, rocket | – (작성자 안 함) | ✓ / – |
```

요약 라인:

```
PR #N | APPLY=N REBUT=N HOLD=N REBUT_FINAL=N BLOCKED=N | rebase: ✓ | force-push: ✓ | re-request: ✓ | retro: ✓ (N entries) | auto-merge: ✓ / SKIPPED(<reason>)
```

## Important Rules

- **NEVER 본인이 아닌 PR 처리** — author가 현재 사용자와 다르면 즉시 중단
- **NEVER `git push --force`** — 항상 `--force-with-lease`
- **NEVER main/master 브랜치 force-push** — 보호 브랜치 절대 금지
- **NEVER `--no-verify`** — pre-commit hook 우회 금지. 실패 시 fix 후 재시도
- **NEVER `git rebase --skip`** — rebase 충돌은 자동 해결하지 않고 사용자에게 알린다
- **ALWAYS rebase로 원래 커밋 직접 수정** — "fix: review feedback" 류의 추가 커밋 만들지 말 것. 단 원인 커밋이 PR 범위 밖일 때만 예외
- **ALWAYS 반박·보류는 근거 자료 2개 이상** — 부족하면 반영으로 전환
- **ALWAYS 답글은 한글, 존댓말, 차분하게** — 감정적 표현 금지
- **ALWAYS 반영 후 답글에 커밋 SHA 인용** — 어느 커밋에 반영됐는지 추적 가능하게
- **ALWAYS `pr-review`의 이모지 정책 준용** — `confused`, `-1` 등 부정 이모지 금지
- **NEVER 작성자가 resolve** — 예외 없음. 오타·포맷·린트 같은 단순 변경이라도 resolve는 리뷰어만. 작성자는 답글 + 커밋 SHA 인용까지만
- **NEVER 직접 merge** — `gh pr merge --squash` 류 즉시 병합 금지. 병합은 리뷰어의 resolve + 조건 만족으로 트리거되는 auto-merge로만 이뤄진다
- **ALWAYS auto-merge 활성화** — APPLY가 1건 이상이면 §9 `gh pr merge --auto --squash --delete-branch` 로 예약. draft PR이면 스킵. 레포가 auto-merge 비활성이면 경고 출력
- **ALWAYS 의견 충돌 종결 프로토콜** — 같은 스레드에서 내 답글이 2회에 도달했는데 합의 안 되면 REBUT_FINAL 답글 1회로 마무리(§5.1). resolve는 여전히 안 함(리뷰어 몫). P1·보안·데이터 손실·CI 실패 우려는 `BLOCKED`으로 사용자에게 보고하고 §9 auto-merge 활성화도 스킵
- **ALWAYS APPLY/BLOCKED는 CLAUDE.local.md 회고록에 기록** — 같은 실수 반복 방지(§9.5). 솔직한 원인 + 체크 가능한 다음 액션 필수. `.gitignore`에 `CLAUDE.local.md` 누락 시 1회 안내. Git 리포가 아니면(워크스페이스 루트) 스킵
