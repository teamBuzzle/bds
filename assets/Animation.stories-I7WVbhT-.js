import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-_2TAQcTa.js";import{a as g}from"./index-Dx4Ula-z.js";import{B as i}from"./Box-kWqqRTIL.js";import"./_commonjsHelpers-CqkleIqs.js";import"./emotion-element-f0de968e.browser.esm-C1XcXHaF.js";import"./generateUtilityClasses-Bz_W7Ws-.js";import"./createTheme-BbTyDt8B.js";import"./extendSxProp-D_dSpRvs.js";const d=({isAnimate:r,finishAnimation:s})=>{const e=n.useRef(null);return n.useEffect(()=>{r&&e.current&&g(e.current,{opacity:[0,1],y:[20,0]},{duration:.5,onComplete:s})},[r,s]),a.jsx(i,{sx:{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"background.default"},children:a.jsx(i,{component:"img",ref:e,src:"/images/logo.svg",alt:"버즐 로고",sx:{width:"120px",height:"120px",objectFit:"contain",opacity:0}})})},v={title:"Organisms/Animation",component:d,parameters:{layout:"fullscreen",backgrounds:{default:"dark"}},tags:["autodocs"]},o={args:{isAnimate:!1,finishAnimation:()=>console.log("애니메이션 종료")}},t={args:{isAnimate:!0,finishAnimation:()=>console.log("애니메이션 종료")}};var m,c,l;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    isAnimate: false,
    finishAnimation: () => console.log('애니메이션 종료')
  }
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,u,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    isAnimate: true,
    finishAnimation: () => console.log('애니메이션 종료')
  }
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const w=["Default","Animated"];export{t as Animated,o as Default,w as __namedExportsOrder,v as default};
