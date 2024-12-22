import{j as s}from"./jsx-runtime-DPRcWr2C.js";import{r as a}from"./index-B6-Y_Zgq.js";import{a as f}from"./index-BBjdbNcl.js";import{B as i}from"./Box-ezUirVkb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./emotion-element-5486c51c.browser.esm-BrRU5PSG.js";import"./generateUtilityClasses-BKikQcmt.js";import"./createTheme-C-zWfE2d.js";import"./useTheme-B4qSp4Qi.js";import"./extendSxProp-BDGrLznd.js";const g=({isAnimate:r,finishAnimation:n})=>{const o=a.useRef(null);return a.useEffect(()=>{r&&o.current&&f(o.current,{opacity:[0,1],y:[20,0]},{duration:.5,onComplete:n})},[r,n]),s.jsx(i,{sx:{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"background.default"},children:s.jsx(i,{component:"img",ref:o,src:"/images/logo.svg",alt:"버즐 로고",sx:{width:"120px",height:"120px",objectFit:"contain",opacity:0}})})};g.__docgenInfo={description:"",methods:[],displayName:"Animation",props:{isAnimate:{required:!0,tsType:{name:"boolean"},description:""},finishAnimation:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const w={title:"Organisms/Animation",component:g,parameters:{layout:"fullscreen",backgrounds:{default:"dark"}},tags:["autodocs"]},e={args:{isAnimate:!1,finishAnimation:()=>console.log("애니메이션 종료")}},t={args:{isAnimate:!0,finishAnimation:()=>console.log("애니메이션 종료")}};var m,c,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    isAnimate: false,
    finishAnimation: () => console.log('애니메이션 종료')
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,l,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isAnimate: true,
    finishAnimation: () => console.log('애니메이션 종료')
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const R=["Default","Animated"];export{t as Animated,e as Default,R as __namedExportsOrder,w as default};
