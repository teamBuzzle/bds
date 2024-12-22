import{j as e}from"./jsx-runtime-DPRcWr2C.js";import{useMDXComponents as o}from"./index-BAciIf_w.js";import{ae as s}from"./index-BaUOUKxV.js";import{b as t}from"./index-4F3ft6Td.js";import"./index-B6-Y_Zgq.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CAoIVdNK.js";import"../sb-preview/runtime.js";import"./index-BoCMb6ls.js";import"./index-CxiJR1zI.js";import"./index-DIDtzlXZ.js";import"./index-D-8MO0q_.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./createTheme-C-zWfE2d.js";function r(i){const n={code:"code",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"시작하기"}),`
`,e.jsx("div",{children:e.jsxs("div",{className:"sb-section-title",children:[e.jsx("h1",{className:"gradient-text",children:"🎨 BDS (Buzzle Design System)"}),e.jsx(n.p,{children:"BDS는 Buzzle의 디자인 시스템으로, 사용자 경험의 일관성과 개발 효율성을 극대화하기 위해 철저히 계획되고 구현된 체계입니다. 이 시스템은 단순한 디자인 가이드라인을 넘어서, Buzzle의 브랜드 정체성과 사용자 중심 철학을 구현하는 핵심 도구입니다."}),e.jsx("h2",{className:"section-title",children:"🚀 시작하기"}),e.jsx("h3",{children:"Next.js"}),e.jsx(n.p,{children:"Next.js 플러그인을 dev dependency로 설치하세요:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add -D @pigment-css/nextjs-plugin
`})}),e.jsx(n.p,{children:"그런 다음 Next.js 설정 파일을 열고 플러그인을 추가하세요:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { withPigment } from '@pigment-css/nextjs-plugin';

const nextConfig = {
  // ...Your nextjs config.
};

/**
 * @type {import('@pigment-css/nextjs-plugin').PigmentOptions}
 */
const pigmentConfig = {
  transformLibraries: ['@mui/material'],
};

export default withPigment(nextConfig, pigmentConfig);
`})}),e.jsx(n.p,{children:"마지막으로 레이아웃 파일 상단에 스타일시트를 import 하세요:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@mui/material-pigment-css/styles.css';

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className={\`\${inter.className}\`}>
        {props.children}
      </body>
    </html>
  );
}
`})}),e.jsx("h3",{children:"Vite"}),e.jsx(n.p,{children:"Vite 플러그인을 dev dependency로 설치하세요:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add -D @pigment-css/vite-plugin
`})}),e.jsx(n.p,{children:"그런 다음 Vite 설정 파일(일반적으로 vite.config.mjs 또는 vite.config.js)을 열고 플러그인을 추가하세요:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { defineConfig } from 'vite';
import { pigment } from '@pigment-css/vite-plugin';

/**
 * @type {import('@pigment-css/vite-plugin').PigmentOptions}
 */
const pigmentConfig = {
  transformLibraries: ['@mui/material'],
};

export default defineConfig({
  plugins: [
    pigment(pigmentConfig),
    // ... Your other plugins.
  ],
});
`})}),e.jsx(n.p,{children:"현재 pnpm과 관련된 알려진 문제로 인해 플러그인이 이 패키지 매니저에서 제대로 작동하지 않습니다. 해결될 때까지 npm이나 yarn을 대신 사용해야 합니다."}),e.jsx(n.p,{children:"마지막으로 메인 파일 상단에 Pigment CSS 스타일시트를 추가하세요:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import * as React from 'react';
import '@mui/material-pigment-css/styles.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
`})})]})}),`
`,e.jsx("style",{children:`
    .gradient-text {
      background: linear-gradient(45deg, ${t.color.text.title}, ${t.color.text.subtitle});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: ${t.typography.title.largeTitle.fontSize}px;
      margin-bottom: ${t.value.container.spacing}px;
    }

    .section-title {
      color: ${t.color.text.title};
      font-size: ${t.typography.title.base.fontSize}px;
      margin-top: ${t.value.container.spacing}px;
      margin-bottom: ${t.value.container.spacing}px;
      border-bottom: 2px solid ${t.color.border.base};
      padding-bottom: ${t.value.container.spacing}px;
    }
  `})]})}function N(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{N as default};
