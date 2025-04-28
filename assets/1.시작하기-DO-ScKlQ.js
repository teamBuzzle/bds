import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-BPV8d2tn.js";import{M as i}from"./index-D-CQHKUG.js";import"./index-Dcms-uI6.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BaZdsRdS.js";import"./index-BapJ4yH-.js";import"./index-CAD2HomS.js";import"./index-DQw2Bw4b.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./createTheme-DT7P5OtA.js";function s(t){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"시작하기"}),`
`,n.jsx(e.h1,{id:"bds-buzzle-design-system",children:"BDS (Buzzle Design System)"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["⚠️ ",n.jsx(e.strong,{children:"주의사항"}),": BDS는 사이드 프로젝트로 개발 중인 실험적 디자인 시스템 이에요.",n.jsx(e.br,{}),`
`,"실제 서비스 환경에 적용하기에는 적합하지 않으며, API가 예고 없이 변경될 수 있어요.",n.jsx(e.br,{}),`
`,"학습 및 실험 목적으로만 사용해주세요."]}),`
`]}),`
`,n.jsx(e.h2,{id:"개요",children:"개요"}),`
`,n.jsxs(e.p,{children:["BDS(Buzzle Design System)는 Material UI를 기반으로 확장된 디자인 시스템으로, Buzzle의 브랜드 아이덴티티를 일관되게 구현하기 위해 개발되었어요.",n.jsx(e.br,{}),`
`,"이 라이브러리는 MUI 컴포넌트를 확장하여 그라데이션, 애니메이션, 확장된 타이포그래피 등 추가 기능을 제공해요."]}),`
`,n.jsx(e.h2,{id:"문서-구성",children:"문서 구성"}),`
`,n.jsx(e.p,{children:"BDS 문서는 다음과 같이 구성되어 있어요:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.a,{href:"/docs/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0",children:"시작하기"})})," - BDS 소개 및 설치 방법"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.a,{href:"/docs/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%86%A0%ED%81%B0",children:"디자인 토큰"})})," - 색상, 타이포그래피, 간격 등의 디자인 기본값"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.a,{href:"/docs/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8",children:"컴포넌트"})})," - BDS에서 제공하는 컴포넌트 목록 및 사용법"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.a,{href:"/docs/%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83",children:"레이아웃"})})," - 페이지 구조 및 레이아웃 시스템"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.a,{href:"/docs/%EA%B0%80%EC%9D%B4%EB%93%9C%EB%9D%BC%EC%9D%B8",children:"가이드라인"})})," - 컴포넌트 사용 가이드라인 및 모범 사례"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.a,{href:"/docs/api-%EB%A0%88%ED%8D%BC%EB%9F%B0%EC%8A%A4",children:"API 레퍼런스"})})," - 상세 API 문서"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.a,{href:"/docs/%EA%B8%B0%EC%97%AC%ED%95%98%EA%B8%B0",children:"기여하기"})})," - 프로젝트 기여 방법"]}),`
`]}),`
`,n.jsx(e.h2,{id:"설치",children:"설치"}),`
`,n.jsx(e.p,{children:"npm, yarn, pnpm 또는 bun을 사용하여 설치할 수 있어요:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# npm
npm install @buzzle/bds @mui/material @emotion/react @emotion/styled

# yarn
yarn add @buzzle/bds @mui/material @emotion/react @emotion/styled

# pnpm
pnpm add @buzzle/bds @mui/material @emotion/react @emotion/styled

# bun
bun add @buzzle/bds @mui/material @emotion/react @emotion/styled
`})}),`
`,n.jsx(e.h2,{id:"요구사항",children:"요구사항"}),`
`,n.jsx(e.p,{children:"BDS를 사용하기 위해서는 다음과 같은 피어 의존성이 필요해요:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`"peerDependencies": {
	"@emotion/react": "^11.13.5",
	"@emotion/styled": "^11.13.5",
	"@mui/material": "^7.0.1",
	"@tanstack/react-table": "^8.21.2",
	"d3": "^7.9.0",
	"motion": "^11.12.0",
	"react": "^17.0.0 || ^18.0.0 || ^19.0.0",
	"react-dom": "^17.0.0 || ^18.0.0 || ^19.0.0"
}
`})}),`
`,n.jsx(e.p,{children:"추가 의존성을 설치하려면 아래 내용을 추가해주세요:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# npm
npm install d3 motion @tanstack/react-table react react-dom

# yarn
yarn add d3 motion @tanstack/react-table react react-dom

# pnpm
pnpm add d3 motion @tanstack/react-table react react-dom

# bun
bun add d3 motion @tanstack/react-table react react-dom
`})}),`
`,n.jsx(e.h2,{id:"기본-사용법",children:"기본 사용법"}),`
`,n.jsxs(e.p,{children:["다음은 BDS를 사용하는 기본적인 예제에요.",n.jsx(e.br,{}),`
`,"별도의 Provider.tsx 파일을 만들어서 사용해도 좋아요."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import { bdsTheme, Button, Text, Input } from '@buzzle/bds';

export const App = () => {
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
}
`})}),`
`,n.jsx(e.h2,{id:"주요-특징",children:"주요 특징"}),`
`,n.jsx(e.p,{children:"BDS는 다음과 같은 주요 특징을 제공해요:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"MUI 확장 컴포넌트"}),": Material UI를 기반으로 확장된 컴포넌트"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"모듈화된 설계"}),": 필요한 컴포넌트만 선택적으로 사용 가능"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"반응형 디자인"}),": 다양한 화면 크기에 최적화"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"접근성 지원"}),": WCAG 지침을 준수하는 접근성 높은 컴포넌트"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"타입스크립트 지원"}),": 완전한 타입 정의 제공"]}),`
`]}),`
`,n.jsx(e.p,{children:"자세한 내용은 각 섹션의 문서를 참조해주세요."}),`
`,n.jsx(e.h2,{id:"링크",children:"링크"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"레포지토리"}),": ",n.jsx(e.a,{href:"https://github.com/teamBuzzle/bds",rel:"nofollow",children:"https://github.com/teamBuzzle/bds"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"문서"}),": ",n.jsx(e.a,{href:"https://teambuzzle.github.io/bds",rel:"nofollow",children:"https://teambuzzle.github.io/bds"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"npm"}),": ",n.jsx(e.a,{href:"https://www.npmjs.com/package/@buzzle/bds",rel:"nofollow",children:"https://www.npmjs.com/package/@buzzle/bds"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"라이선스",children:"라이선스"}),`
`,n.jsxs(e.p,{children:["MIT 라이선스 - 상업용 및 개인 프로젝트 모두 자유롭게 사용 가능",n.jsx(e.br,{}),`
`,"MUI 라이센스 - ",n.jsx(e.a,{href:"https://github.com/mui/material-ui/blob/master/LICENSE",rel:"nofollow",children:"https://github.com/mui/material-ui/blob/master/LICENSE"})]})]})}function g(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{g as default};
//# sourceMappingURL=1.시작하기-DO-ScKlQ.js.map
