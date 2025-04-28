import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-BPV8d2tn.js";import{M as r}from"./index-D-CQHKUG.js";import"./index-Dcms-uI6.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BaZdsRdS.js";import"./index-BapJ4yH-.js";import"./index-CAD2HomS.js";import"./index-DQw2Bw4b.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./createTheme-DT7P5OtA.js";function i(s){const e={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"기여하기"}),`
`,n.jsx(e.h1,{id:"기여하기",children:"기여하기"}),`
`,n.jsxs(e.p,{children:["BDS(Buzzle Design System)는 오픈소스 프로젝트로, 모든 형태의 기여를 환영해요.",n.jsx(e.br,{}),`
`,"이 페이지에서는 BDS 프로젝트에 기여하는 방법에 대해 설명해요."]}),`
`,n.jsx(e.h2,{id:"기여-방법",children:"기여 방법"}),`
`,n.jsx(e.p,{children:"BDS에 기여하는 방법은 다양해요."}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"코드 기여"}),": 버그 수정, 새 기능 추가, 성능 개선 등"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"문서 개선"}),": 설명, 예제, 용례 추가 및 개선"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"디자인 기여"}),": 컴포넌트 디자인 개선, 새 디자인 제안"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"테스트 추가"}),": 단위 테스트, 통합 테스트, 시각적 테스트 작성"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"사용 사례 공유"}),": 실제 사용 사례와 피드백 공유"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"이슈 리포트"}),": 버그 보고 및 개선 제안"]}),`
`]}),`
`,n.jsx(e.h2,{id:"개발-환경-설정",children:"개발 환경 설정"}),`
`,n.jsx(e.h3,{id:"요구사항",children:"요구사항"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Node.js 22.14.0 이상"}),`
`,n.jsx(e.li,{children:"Yarn 4.8.1 이상"}),`
`]}),`
`,n.jsx(e.h3,{id:"로컬-개발-환경-설정",children:"로컬 개발 환경 설정"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"저장소 복제:"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`git clone https://github.com/teamBuzzle/bds.git
cd bds
`})}),`
`,n.jsxs(e.ol,{start:"2",children:[`
`,n.jsx(e.li,{children:"의존성 설치:"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`yarn install
`})}),`
`,n.jsxs(e.ol,{start:"3",children:[`
`,n.jsx(e.li,{children:"개발 서버 실행:"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`yarn dev
`})}),`
`,n.jsxs(e.p,{children:["또는 단축키로 프로젝트를 실행할 수 있어요 (추천)",n.jsx(e.br,{}),`
`,"MAC, Linux : ",n.jsx("kbd",{children:"⌘"})," + ",n.jsx("kdb",{children:"Shift"})," + ",n.jsx("kbd",{children:"B"}),n.jsx(e.br,{}),`
`,"Windows : ",n.jsx("kbd",{children:"Ctrl"})," + ",n.jsx("kdb",{children:"Shift"})," + ",n.jsx("kbd",{children:"B"})]}),`
`,n.jsx(e.p,{children:"이제 http://localhost:3000 에서 Storybook을 통해 BDS 컴포넌트를 확인할 수 있습니다."}),`
`,n.jsx(e.h2,{id:"코드-기여-가이드라인",children:"코드 기여 가이드라인"}),`
`,n.jsx(e.h3,{id:"브랜치-전략",children:"브랜치 전략"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"main"}),": 프로덕션 브랜치 (기본)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"feat/*"}),": 새 기능 개발 브랜치"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fix/*"}),": 버그 수정 브랜치"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"docs/*"}),": 문서 관련 변경 브랜치"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style/*"}),": 코드 스타일 변경 브랜치"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"refactor/*"}),": 리팩토링 브랜치"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"perf/*"}),": 성능 개선 브랜치"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"test/*"}),": 테스트 관련 브랜치"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"build/*"}),": 빌드 시스템 변경 브랜치"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"ci/*"}),": CI 설정 변경 브랜치"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"chore/*"}),": 기타 변경사항 브랜치"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"hotfix/*"}),": 긴급 버그 수정 브랜치"]}),`
`]}),`
`,n.jsx(e.h3,{id:"코드-스타일",children:"코드 스타일"}),`
`,n.jsx(e.p,{children:"BDS는 ESLint와 Prettier를 사용하여 코드 스타일을 관리합니다. 코드를 제출하기 전에 다음 명령을 실행해 주세요:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`yarn lint
yarn prettier
`})}),`
`,n.jsx(e.h3,{id:"커밋-메시지-규칙",children:"커밋 메시지 규칙"}),`
`,n.jsxs(e.p,{children:["BDS는 ",n.jsx(e.a,{href:"https://www.conventionalcommits.org/",rel:"nofollow",children:"Conventional Commits"})," 규칙을 따릅니다:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`<type>[optional scope]: <description>

[optional body]

[optional footer]
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Type"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"feat"}),": 새 기능"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fix"}),": 버그 수정"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"docs"}),": 문서 변경"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"style"}),": 코드 스타일 변경 (포맷팅, 세미콜론 추가 등)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"refactor"}),": 기능 변경 없는 코드 리팩토링"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"perf"}),": 성능 개선"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"test"}),": 테스트 추가 또는 수정"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"build"}),": 빌드 시스템 또는 외부 의존성 변경"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"ci"}),": CI 설정 파일 및 스크립트 변경"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"chore"}),": 기타 변경사항"]}),`
`]}),`
`,n.jsx(e.p,{children:"예시:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`feat(button): 그라데이션 버튼 스타일 추가

버튼 컴포넌트에 그라데이션 스타일 적용 옵션 추가.
상단에서 하단으로 그라데이션 효과를 적용할 수 있습니다.

Closes #123
`})}),`
`,n.jsx(e.h3,{id:"풀-리퀘스트pr-프로세스",children:"풀 리퀘스트(PR) 프로세스"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"메인 브랜치에서 새 브랜치를 생성합니다:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`git checkout -b feature/my-feature main
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"변경사항을 구현하고 테스트를 추가합니다."}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"변경사항을 커밋합니다:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`git commit -m "feat: 새 기능 추가"
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"원격 저장소에 푸시합니다:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`git push origin feature/my-feature
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"GitHub에서 Pull Request를 생성합니다."}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"코드 리뷰를 받고 필요한 변경사항을 적용합니다."}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"변경사항이 승인되면 PR이 병합됩니다."}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"컴포넌트-개발-가이드라인",children:"컴포넌트 개발 가이드라인"}),`
`,n.jsx(e.h3,{id:"새-컴포넌트-추가",children:"새 컴포넌트 추가"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"컴포넌트 파일 생성:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`components/
└── MyComponent/
    ├── index.ts
    ├── MyComponent.tsx
    ├── MyComponent.stories.tsx
    └── MyComponent.test.tsx
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"컴포넌트 구현(React 19 이상 사용):"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// MyComponent.tsx
import type { PropsWithChildren } from 'react';
import { styled } from '@mui/material/styles';

export interface Props extends PropsWithChildren {
  /** 추가 클래스 */
  className?: string;
  /** 정렬 방향 */
  align?: 'left' | 'center' | 'right';
}

const StyledComponent = styled('div')(({ theme }) => ({
  // 스타일 구현
}));

export const MyComponent = ({ children, className, align = 'left', ref, ...otherProps }: Props) => {
    return (
      <StyledComponent 
        ref={ref}
        className={className}
        align={align}
        {...otherProps}
      >
        {children}
      </StyledComponent>
    );
  };
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"스토리 생성:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// MyComponent.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from './MyComponent';

const meta = {
  title: 'Components/MyComponent',
  component: MyComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      defaultValue: 'left',
    },
  },
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: '기본 컴포넌트',
  },
};

export const Center: Story = {
  args: {
    children: '가운데 정렬 컴포넌트',
    align: 'center',
  },
};
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"테스트 작성:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// MyComponent.test.tsx
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('renders children correctly', () => {
    render(<MyComponent>테스트 내용</MyComponent>);
    expect(screen.getByText('테스트 내용')).toBeInTheDocument();
  });
  
  it('applies align prop correctly', () => {
    const { container } = render(
      <MyComponent align="center">가운데 정렬</MyComponent>
    );
    expect(container.firstChild).toHaveStyle({ textAlign: 'center' });
  });
});
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["인덱스 파일 생성:",n.jsx(e.br,{}),`
`,"인덱스 파일을 생성할 때는 항상 Named Export를 사용해주세요."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// index.ts
export { MyComponent } from './MyComponent';
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"컴포넌트-개선",children:"컴포넌트 개선"}),`
`,n.jsx(e.p,{children:"기존 컴포넌트를 개선할 때는 다음 사항을 고려하세요:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"기존 API를 존중하고, 하위 호환성을 유지하세요."}),`
`,n.jsx(e.li,{children:"필요한 경우에만 새 기능을 추가하세요."}),`
`,n.jsx(e.li,{children:"성능에 영향을 미칠 수 있는 변경사항은 성능 테스트와 함께 제출하세요."}),`
`,n.jsx(e.li,{children:"항상 기존 테스트를 업데이트하고 필요한 경우 새 테스트를 추가하세요."}),`
`]}),`
`,n.jsx(e.h2,{id:"문서-기여-가이드라인",children:"문서 기여 가이드라인"}),`
`,n.jsx(e.p,{children:"문서를 개선하거나 추가할 때 다음 가이드라인을 참고하세요:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"명확하고 간결한 언어를 사용하세요."}),`
`,n.jsx(e.li,{children:"코드 예제는 항상 실행 가능하고 최신 API를 반영해야 합니다."}),`
`,n.jsx(e.li,{children:"개념보다 사용 사례와 예제에 중점을 두세요."}),`
`,n.jsx(e.li,{children:"문서 변경사항을 설명하는 스크린샷이나 다이어그램을 추가하세요."}),`
`]}),`
`,n.jsx(e.h2,{id:"이슈-리포팅",children:"이슈 리포팅"}),`
`,n.jsx(e.p,{children:"버그를 보고하거나 새 기능을 제안할 때는 GitHub 이슈 템플릿을 사용해 주세요:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/teamBuzzle/bds/issues/new?template=%EB%B2%84%EA%B7%B8%EC%A0%9C%EB%B3%B4.md",rel:"nofollow",children:"버그 리포트"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/teamBuzzle/bds/issues/new?template=%EA%B8%B0%EB%8A%A5%EC%A0%9C%EC%95%88.md",rel:"nofollow",children:"기능 제안"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/teamBuzzle/bds/issues/new?template=%EB%AC%B8%EC%84%9C-%EC%98%A4%EB%A5%98-%EB%98%90%EB%8A%94-%EB%AC%B8%EC%9D%98.md",rel:"nofollow",children:"문서 개선"})}),`
`]}),`
`,n.jsx(e.h2,{id:"커뮤니케이션",children:"커뮤니케이션"}),`
`,n.jsx(e.p,{children:"BDS 개발자 및 사용자와 소통하고 싶으신가요? 다음 채널을 이용해 주세요:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/teamBuzzle/bds/issues",rel:"nofollow",children:"GitHub 이슈"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/teamBuzzle/bds/discussions",rel:"nofollow",children:"GitHub 디스커션"})}),`
`]}),`
`,n.jsx(e.h2,{id:"감사의-말",children:"감사의 말"}),`
`,n.jsx(e.p,{children:"BDS 프로젝트에 기여해 주셔서 감사합니다! 여러분의 기여가 더 나은 디자인 시스템을 만드는 데 큰 도움이 됩니다."})]})}function f(s={}){const{wrapper:e}={...l(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{f as default};
//# sourceMappingURL=3.기여하기-BzGUVbiW.js.map
