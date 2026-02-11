import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{S as W}from"./Stack-D3BswWfF.js";import{m as T}from"./proxy-CRGCT33f.js";import{C as j}from"./Chip-DPYNYyeQ.js";import{T as p}from"./Typography-BGXjL0C5.js";import{B as z}from"./Box-BNoC8hlL.js";import"./createSimplePaletteValueFilter-BFYkdot2.js";import"./DefaultPropsProvider-Bo6nkiJm.js";import"./emotion-element-f0de968e.browser.esm-Cp_kNtMN.js";import"./index-CgfFrydU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createTheme-CN4DXWZy.js";import"./generateUtilityClasses-CsFllfrJ.js";import"./useThemeProps-CTxHbmAC.js";import"./extendSxProp-DuE9bGZQ.js";import"./useSlot-Bag7hyuP.js";import"./useTimeout-CLJHompC.js";import"./ButtonBase-0dgLigRO.js";import"./useEnhancedEffect-QNI2HLi_.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-CnlM_b6n.js";const B=[.25,.46,.45,.94],C={background:"linear-gradient(90deg, #6778ff 0%, #4cc8ff 50%, #9f45ef 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},v=({title:h,subtitle:s,badge:i,size:a="sm",action:n,sx:S,...E})=>{const k=a==="lg"?{xs:"36px",md:"64px"}:{xs:"32px",md:"56px"},y=a==="lg"?{xs:"16px",md:"20px"}:{xs:"14px",md:"18px"};return t.jsxs(W,{component:T.div,initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.8,ease:B},alignItems:"center",textAlign:"center",gap:2,sx:{py:{xs:6,md:10},...S},...E,children:[i&&t.jsx(j,{label:i,sx:{bgcolor:"rgba(103, 120, 255, 0.15)",color:"#6778ff",fontWeight:600,fontSize:"14px",height:"32px",mb:1}}),t.jsx(p,{component:"h1",fontWeight:800,sx:{fontSize:k,lineHeight:"120%",...C},children:h}),s&&t.jsx(p,{sx:{fontSize:y,color:"rgba(255, 255, 255, 0.7)",lineHeight:"160%",maxWidth:"600px"},children:s}),n&&t.jsx(z,{sx:{mt:2},children:n})]})},Y={title:"컴포넌트/Molecules/PageHero",component:v,parameters:{layout:"fullscreen",backgrounds:{default:"dark",values:[{name:"dark",value:"#141414"},{name:"light",value:"#ffffff"}]}},tags:["autodocs"],argTypes:{title:{description:"히어로 섹션의 제목",control:"text"},subtitle:{description:"히어로 섹션의 부제목",control:"text"},badge:{description:"제목 위의 뱃지 텍스트",control:"text"},size:{description:"텍스트 크기 변형",control:"select",options:["sm","lg"],defaultValue:"sm"}}},e={args:{title:"비즈니스를 위한 최고의 솔루션",subtitle:"간단하고 강력한 도구로 비즈니스를 성장시키세요."}},r={args:{badge:"NEW",title:"새로운 기능 출시",subtitle:"더 빠르고 더 강력한 기능으로 업그레이드하세요."}},o={args:{title:"대형 히어로 섹션",subtitle:"큰 텍스트 사이즈로 더 강렬한 인상을 줍니다.",size:"lg",badge:"FEATURED"}};var l,m,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: '비즈니스를 위한 최고의 솔루션',
    subtitle: '간단하고 강력한 도구로 비즈니스를 성장시키세요.'
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,g,x;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    badge: 'NEW',
    title: '새로운 기능 출시',
    subtitle: '더 빠르고 더 강력한 기능으로 업그레이드하세요.'
  }
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var u,f,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: '대형 히어로 섹션',
    subtitle: '큰 텍스트 사이즈로 더 강렬한 인상을 줍니다.',
    size: 'lg',
    badge: 'FEATURED'
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const Z=["Default","WithBadge","Large"];export{e as Default,o as Large,r as WithBadge,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=PageHero.stories-Bgi0LrIU.js.map
