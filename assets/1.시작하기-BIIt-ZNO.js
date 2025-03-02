import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-CHrGa5Tm.js";import{M as d}from"./index-DEo5z67h.js";import{b as r}from"./index-52F6tjRH.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DlUvMQmK.js";import"./index-DHlNpkmG.js";import"./index-BufXmX2u.js";import"./index-CQwh6Daz.js";import"./index-Cu4lwwaE.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./createTheme-BJe9hqys.js";function s(i){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"시작하기"}),`
`,e.jsxs("div",{className:"sb-section-title",children:[e.jsx("h1",{className:"gradient-text",children:"🎨 BDS (Buzzle Design System)"}),e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["⚠️ ",e.jsx(n.strong,{children:"실험적 프로젝트 안내"}),": BDS는 사이드 프로젝트로 개발 중인 실험적 디자인 시스템입니다. 실제 서비스 환경에 적용하기에는 적합하지 않으며, 학습 및 실험 목적으로만 사용해주세요."]}),`
`]}),e.jsx(n.h2,{id:"bds-소개",children:"BDS 소개"}),e.jsx(n.p,{children:"BDS(Buzzle Design System)는 Material UI v6를 기반으로 확장된 디자인 시스템으로, Buzzle의 브랜드 아이덴티티를 일관되게 구현하기 위해 개발되었습니다. 이 프로젝트는 디자인 시스템 구축 경험을 공유하고, MUI 기반 컴포넌트를 확장하는 방법을 탐구하는 실험적 성격을 가지고 있습니다."}),e.jsx(n.h3,{id:"프로젝트-비전",children:"프로젝트 비전"}),e.jsx(n.p,{children:"BDS는 '화면에 글자가 없어도 이해할 수 있는 직관적인 UI'를 목표로 합니다. 시각적 요소와 상호작용 패턴을 통해 사용자가 자연스럽게 인터페이스를 이해하고 사용할 수 있도록 설계되었습니다."}),e.jsx(n.h3,{id:"bds의-탄생-배경",children:"BDS의 탄생 배경"}),e.jsx(n.p,{children:"Buzzle에서는 다음과 같은 핵심 문제들을 해결하기 위해 BDS를 개발했습니다:"}),e.jsx("div",{className:"table-container",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"문제점"}),e.jsx("th",{children:"BDS 솔루션"}),e.jsx("th",{children:"구현 방식"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"비일관적인 UI/UX"}),e.jsx("td",{children:"통합된 디자인 언어 제공"}),e.jsx("td",{children:"MUI 테마 커스터마이징"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"반복적인 디자인 작업"}),e.jsx("td",{children:"재사용 가능한 컴포넌트"}),e.jsx("td",{children:"확장된 원자적 컴포넌트"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"개발 생산성 저하"}),e.jsx("td",{children:"표준화된 개발 패턴"}),e.jsx("td",{children:"일관된 API 설계"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"브랜드 아이덴티티 불일치"}),e.jsx("td",{children:"일관된 브랜드 경험"}),e.jsx("td",{children:"커스텀 토큰 시스템"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"접근성 문제"}),e.jsx("td",{children:"포용적 디자인"}),e.jsx("td",{children:"WCAG 지침 준수"})]})]})]})}),e.jsx(n.h2,{id:"디자인-시스템-아키텍처",children:"디자인 시스템 아키텍처"}),e.jsx(n.p,{children:"BDS는 다음과 같은 계층 구조로 설계되었습니다:"}),e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"디자인 토큰"}),": 색상, 타이포그래피, 간격, 그림자 등의 기본 디자인 값"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"기본 컴포넌트"}),": 버튼, 입력 필드, 텍스트 등의 기본 UI 요소"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"복합 컴포넌트"}),": 기본 컴포넌트를 조합한 더 복잡한 UI 패턴"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"페이지 템플릿"}),": 일반적인 페이지 레이아웃과 구조"]}),`
`]}),e.jsx(n.p,{children:"이 구조는 MUI의 기본 철학을 따르면서도 Buzzle만의 고유한 디자인 언어를 구현할 수 있도록 설계되었습니다."}),e.jsx(n.h3,{id:"-기술-스택",children:"🛠 기술 스택"}),e.jsx("div",{className:"table-container",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"기술"}),e.jsx("th",{children:"버전"}),e.jsx("th",{children:"목적"}),e.jsx("th",{children:"선택 이유"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"React"}),e.jsx("td",{children:"17/18"}),e.jsx("td",{children:"UI 라이브러리"}),e.jsx("td",{children:"생태계 지원 및 안정성"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Material-UI"}),e.jsx("td",{children:"v6"}),e.jsx("td",{children:"컴포넌트 프레임워크"}),e.jsx("td",{children:"풍부한 기능과 확장성"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Emotion"}),e.jsx("td",{children:"최신"}),e.jsx("td",{children:"스타일링"}),e.jsx("td",{children:"MUI와의 호환성"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"TypeScript"}),e.jsx("td",{children:"최신"}),e.jsx("td",{children:"정적 타이핑"}),e.jsx("td",{children:"개발 안정성 향상"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Vite"}),e.jsx("td",{children:"최신"}),e.jsx("td",{children:"빌드 도구"}),e.jsx("td",{children:"빠른 개발 경험"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Storybook"}),e.jsx("td",{children:"최신"}),e.jsx("td",{children:"컴포넌트 문서화"}),e.jsx("td",{children:"시각적 개발 환경"})]})]})]})}),e.jsx(n.h2,{id:"주요-특징",children:"주요 특징"}),e.jsx(n.h3,{id:"1-확장된-mui-컴포넌트",children:"1. 확장된 MUI 컴포넌트"}),e.jsx(n.p,{children:"BDS는 MUI 컴포넌트를 기반으로 하되, Buzzle의 디자인 요구사항에 맞게 확장했습니다:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"그라데이션 지원"}),": 텍스트와 버튼에 그라데이션 효과 적용"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"커스텀 애니메이션"}),": Motion 라이브러리를 활용한 부드러운 전환 효과"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"확장된 타이포그래피"}),": 더 다양한 텍스트 스타일 옵션"]}),`
`]}),e.jsx(n.h3,{id:"2-디자인-토큰-시스템",children:"2. 디자인 토큰 시스템"}),e.jsx(n.p,{children:"BDS는 체계적인 디자인 토큰 시스템을 통해 일관된 디자인을 유지합니다:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"색상 토큰"}),": 의미론적으로 구성된 색상 시스템"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"타이포그래피 토큰"}),": 일관된 텍스트 스타일"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"간격 및 크기 토큰"}),": 조화로운 레이아웃을 위한 값"]}),`
`]}),e.jsx(n.h3,{id:"3-접근성-중심-설계",children:"3. 접근성 중심 설계"}),e.jsx(n.p,{children:"모든 사용자가 쉽게 사용할 수 있도록 접근성을 고려했습니다:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"키보드 네비게이션"}),": 모든 상호작용 요소는 키보드로 접근 가능"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"스크린 리더 지원"}),": 적절한 ARIA 속성 적용"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"충분한 색상 대비"}),": WCAG 지침을 준수하는 색상 사용"]}),`
`]}),e.jsx(n.h2,{id:"시작하기",children:"시작하기"}),e.jsx(n.h3,{id:"설치",children:"설치"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# npm 사용
npm install @buzzle/bds @mui/material @emotion/react @emotion/styled

# yarn 사용
yarn add @buzzle/bds @mui/material @emotion/react @emotion/styled
`})}),e.jsx(n.h3,{id:"피어-디펜던시-요구사항",children:"피어 디펜던시 요구사항"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`{
  "peerDependencies": {
    "react": "^17.0.0 || ^18.0.0",
    "@emotion/react": "^11.13.5",
    "@emotion/styled": "^11.13.5",
    "@mui/material": "^6.1.9",
    "motion": "^11.12.0"
  }
}
`})}),e.jsx(n.h3,{id:"기본-사용법",children:"기본 사용법"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Button, Input, Text } from '@buzzle/bds';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { bdsTheme } from '@buzzle/bds';

function App() {
  return (
    <ThemeProvider theme={bdsTheme}>
      <CssBaseline />
      <div>
        <Text variant="h1" gradient>환영합니다</Text>
        <Input
          label="이메일"
          placeholder="이메일을 입력해주세요"
        />
        <Button variant="contained">
          시작하기
        </Button>
      </div>
    </ThemeProvider>
  );
}
`})}),e.jsx(n.h2,{id:"프로젝트-현황-및-로드맵",children:"프로젝트 현황 및 로드맵"}),e.jsx(n.p,{children:"BDS는 현재 실험적 단계에 있으며, 다음과 같은 로드맵을 가지고 있습니다:"}),e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"기본 컴포넌트 완성"}),": 핵심 UI 요소 구현 (진행 중)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"테마 시스템 강화"}),": 다크/라이트 모드 및 커스텀 테마 지원"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"접근성 개선"}),": 모든 컴포넌트의 접근성 검증 및 개선"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"문서화 강화"}),": 상세한 사용 가이드 및 예제 추가"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"성능 최적화"}),": 번들 크기 및 렌더링 성능 개선"]}),`
`]}),e.jsx(n.h2,{id:"문의-및-지원",children:"문의 및 지원"}),e.jsxs(n.p,{children:["버그 리포트, 기능 제안은 ",e.jsx(n.a,{href:"https://github.com/teamBuzzle/bds/issues",rel:"nofollow",children:"GitHub 이슈 트래커"}),"를 통해 접수해주세요."]}),e.jsx(n.h2,{id:"라이선스",children:"라이선스"}),e.jsx(n.p,{children:"MIT 라이선스 - 상업용 및 개인 프로젝트 모두 자유롭게 사용 가능"})]}),`
`,e.jsx("style",{children:`
    .gradient-text {
      background: linear-gradient(45deg, ${r.color.text.title}, ${r.color.text.subtitle});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: ${r.typography.title.largeTitle.fontSize}px;
      margin-bottom: ${r.value.container.spacing}px;
    }

    .section-title {
      color: ${r.color.text.title};
      font-size: ${r.typography.title.base.fontSize}px;
      margin-top: ${r.value.container.spacing}px;
      margin-bottom: ${r.value.container.spacing}px;
      border-bottom: 2px solid ${r.color.border.base};
      padding-bottom: ${r.value.container.spacing}px;
    }

    .table-container {
      width: 100%;
      overflow-x: auto;
      margin-bottom: 2rem;
    }

    table {
      width: 100%;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border-collapse: separate;
      border-spacing: 0;
    }

    table thead {
      background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
      color: white;
    }

    table th, 
    table td {
      padding: 15px;
      text-align: left;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }

    table th {
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-size: 0.9rem;
    }

    table tbody tr {
      transition: background-color 0.3s ease;
    }

    table tbody tr:hover {
      background-color: rgba(37, 117, 252, 0.05);
    }

    table tbody tr:last-child td {
      border-bottom: none;
    }

    table tbody tr:nth-child(even) {
      background-color: rgba(0, 0, 0, 0.02);
    }
  `})]})}function y(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{y as default};
//# sourceMappingURL=1.시작하기-BIIt-ZNO.js.map
