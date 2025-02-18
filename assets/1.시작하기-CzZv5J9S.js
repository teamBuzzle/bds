import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-CHrGa5Tm.js";import{M as d}from"./index-BmAowNVc.js";import{b as r}from"./index-BP6wSPio.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CVB1_Gmv.js";import"./index-CNxgJDzb.js";import"./index-BufXmX2u.js";import"./index-CQwh6Daz.js";import"./index-Cu4lwwaE.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./createTheme-BbTyDt8B.js";function i(n){const t={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"시작하기"}),`
`,e.jsxs("div",{className:"sb-section-title",children:[e.jsx("h1",{className:"gradient-text",children:"🎨 BDS (Buzzle Design System)"}),e.jsx(t.h3,{id:"bds의-탄생-배경",children:"BDS의 탄생 배경"}),e.jsx(t.p,{children:"Buzzle에서는 다음과 같은 핵심 문제들을 해결하기 위해 BDS를 개발했습니다:"}),e.jsx("div",{className:"table-container",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"문제점"}),e.jsx("th",{children:"BDS 솔루션"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"비일관적인 UI/UX"}),e.jsx("td",{children:"통합된 디자인 언어 제공"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"반복적인 디자인 작업"}),e.jsx("td",{children:"재사용 가능한 컴포넌트"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"개발 생산성 저하"}),e.jsx("td",{children:"표준화된 개발 컴포넌트"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"브랜드 아이덴티티 불일치"}),e.jsx("td",{children:"일관된 브랜드 경험"})]})]})]})}),e.jsx(t.h2,{id:"디자인-시스템-소개",children:"디자인 시스템 소개"}),e.jsxs(t.p,{children:["BDS(Buzzle Design System)는 일관된 Buzzle 브랜드 경험을 위해 설계된 포괄적인 디자인 생태계입니다.",e.jsx(t.br,{}),`
`,"MUI를 기반으로 버즐의 가치관을 반영하는 커스텀 스타일과 추가 컴포넌트를 제공합니다.",e.jsx(t.br,{}),`
`,"버즐의 디자인은 '화면에 글자가 없어도 이해할 수 있도록 하는 것'을 목표로 하고 있습니다."]}),e.jsx(t.h3,{id:"-기술-스택",children:"🛠 기술 스택"}),e.jsx("div",{className:"table-container",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"기술"}),e.jsx("th",{children:"버전"}),e.jsx("th",{children:"목적"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"React"}),e.jsx("td",{children:"17/18"}),e.jsx("td",{children:"UI 라이브러리"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Material-UI"}),e.jsx("td",{children:"v6"}),e.jsx("td",{children:"컴포넌트 프레임워크"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Emotion CSS"}),e.jsx("td",{children:"최신"}),e.jsx("td",{children:"스타일링"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"TypeScript"}),e.jsx("td",{children:"최신"}),e.jsx("td",{children:"정적 타이핑"})]})]})]})}),e.jsx(t.h2,{id:"시작하기",children:"시작하기"}),e.jsx(t.h3,{id:"필수-패키지-설치",children:"필수 패키지 설치"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`npm install @buzzle/bds @mui/material @emotion/react @emotion/styled
`})}),e.jsx(t.h3,{id:"피어-디펜던시-요구사항",children:"피어 디펜던시 요구사항"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`{
  "peerDependencies": {
    "react": "^17.0.0 || ^18.0.0",
    "@emotion/react": "^11.13.5",
    "@emotion/styled": "^11.13.5",
    "@mui/material": "^6.1.9"
  }
}
`})}),e.jsx(t.h3,{id:"기본-사용법",children:"기본 사용법"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { Button, Input, Text } from '@buzzle/bds';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { bdsTheme } from '@buzzle/bds';

function App() {
  return (
    <ThemeProvider theme={bdsTheme}>
      <CssBaseline />
      <div>
        <Text variant="h1">환영합니다</Text>
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
`})}),e.jsx(t.h2,{id:"문의-및-지원",children:"문의 및 지원"}),e.jsxs(t.p,{children:["버그 리포트, 기능 제안은 ",e.jsx(t.a,{href:"https://github.com/teamBuzzle/bds/issues",rel:"nofollow",children:"GitHub 이슈 트래커"}),"를 통해 접수해주세요."]}),e.jsx(t.h2,{id:"라이선스",children:"라이선스"}),e.jsx(t.p,{children:"MIT 라이선스 - 상업용 및 개인 프로젝트 모두 자유롭게 사용 가능"})]}),`
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
  `})]})}function y(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{y as default};
