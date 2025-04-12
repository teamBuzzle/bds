# BDS (Buzzle Design System)

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/STREACT/bds/main/public/logoWhite.svg" />
    <img src="https://raw.githubusercontent.com/STREACT/bds/main/public/logo.svg" alt="BDS 로고" width="200"/>
  </picture>
</p>

<p align="center">
  <strong>MUI 기반의 확장 가능한 디자인 시스템으로 Buzzle의 일관된 사용자 경험을 구축해요.</strong>
</p>

> ⚠️ **주의사항**: BDS는 사이드 프로젝트로 개발 중인 실험적 디자인 시스템 이에요. 실제 서비스 환경에 적용하기에는 적합하지 않으며, API가 예고 없이 변경될 수 있어요. 학습 및 실험 목적으로만 사용해주세요.

<p align="center">
  <a href="#핵심-특징">핵심 특징</a> •
  <a href="#설치-방법">설치 방법</a> •
  <a href="#사용-예시">사용 예시</a> •
  <a href="#기술-스택">기술 스택</a> •
  <a href="#프로젝트-목표">프로젝트 목표</a>
</p>

## 핵심 특징

🎨 **MUI 확장 컴포넌트**: Material UI를 기반으로 Buzzle 브랜드 아이덴티티에 맞게 확장된 컴포넌트 제공

🧩 **모듈화된 설계**: 필요한 컴포넌트만 선택적으로 가져와 사용 가능한 구조

📱 **반응형 디자인**: 모든 화면 크기에 최적화된 컴포넌트 제공

🔍 **접근성 중심**: WCAG 지침을 준수하는 접근성 높은 컴포넌트

📦 **타입스크립트 지원**: 완전한 타입 정의로 개발 경험 향상

## 설치 방법

```bash
# npm 사용
npm install @buzzle/bds @mui/material @emotion/react @emotion/styled

# yarn 사용
yarn add @buzzle/bds @mui/material @emotion/react @emotion/styled

# pnpm 사용
pnpm add @buzzle/bds @mui/material @emotion/react @emotion/styled

# bun 사용
bun add @buzzle/bds @mui/material @emotion/react @emotion/styled

```

## 사용 예시

다음은 BDS를 사용하는 기본적인 예제에요.  
별도의 Provider.tsx 파일을 만들어서 사용해도 좋아요.

```jsx
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import { bdsTheme, Button, Text, Input } from '@buzzle/bds';

const App = () => {
	return (
		<ThemeProvider theme={bdsTheme}>
			<CssBaseline />
			<Container>
				<Text variant="h1" gradient>
					Buzzle Design System
				</Text>
				<Input label="이메일" placeholder="이메일을 입력해주세요" />
				<Button variant="contained">시작하기</Button>
			</Container>
		</ThemeProvider>
	);
};
```

## 기술 스택

- **React**: 17/18/19 버전 지원
- **Material UI**: MUI 기반 컴포넌트 확장
- **Emotion**: CSS-in-JS 스타일링
- **TypeScript**: 정적 타입 시스템
- **Vite**: 빠른 빌드 및 개발 환경
- **Storybook**: 컴포넌트 문서화 및 시각화

## 프로젝트 목표

BDS는 다음과 같은 목표를 가지고 개발되었어요:

- 아토믹 디자인 시스템 구축
- 높은 DX 컴포넌트

## 기여하기

BDS는 오픈소스 프로젝트로, 모든 형태의 기여를 환영합니다:

- [이슈 또는 기능 제안하기](https://github.com/teamBuzzle/bds/issues/new?template=%EA%B8%B0%EB%8A%A5%EC%A0%9C%EC%95%88.md)
- [코드 개선 및 버그 수정하기](https://github.com/teamBuzzle/bds/issues/new?template=%EB%B2%84%EA%B7%B8%EC%A0%9C%EB%B3%B4.md)
- [문서 개선하기](https://github.com/teamBuzzle/bds/issues/new?template=%EB%AC%B8%EC%84%9C-%EC%98%A4%EB%A5%98-%EB%98%90%EB%8A%94-%EB%AC%B8%EC%9D%98.md)
- [사용 사례 공유하기](https://github.com/teamBuzzle/bds/issues/new?template=%EC%82%AC%EC%9A%A9%EC%82%AC%EB%A1%80.md)

## 링크

레포지토리 : [https://github.com/teamBuzzle/bds](https://github.com/teamBuzzle/bds)  
문서 : [https://teambuzzle.github.io/bds](https://teambuzzle.github.io/bds)  
npm : [https://www.npmjs.com/package/@buzzle/bds](https://www.npmjs.com/package/@buzzle/bds)

## 라이선스

MIT 라이선스 - 상업용 및 개인 프로젝트 모두 자유롭게 사용 가능  
MUI 라이센스 - [https://github.com/mui/material-ui/blob/master/LICENSE](https://github.com/mui/material-ui/blob/master/LICENSE)
