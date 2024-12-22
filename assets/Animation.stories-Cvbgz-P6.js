import{j as s}from"./jsx-runtime-CfatFE5O.js";import{r as a}from"./index-ClcD9ViR.js";import{a as f}from"./index-BBjdbNcl.js";import{B as i}from"./Box-B7M_Hq5G.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./createTheme-6hCvPVGf.js";import"./useTheme-Ck1BHKKz.js";import"./extendSxProp-Dig3Tbhh.js";const g=({isAnimate:n,finishAnimation:r})=>{const o=a.useRef(null);return a.useEffect(()=>{n&&o.current&&f(o.current,{opacity:[0,1],y:[20,0]},{duration:.5,onComplete:r})},[n,r]),s.jsx(i,{sx:{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"background.default"},children:s.jsx(i,{component:"img",ref:o,src:"/images/logo.svg",alt:"버즐 로고",sx:{width:"120px",height:"120px",objectFit:"contain",opacity:0}})})};g.__docgenInfo={description:"",methods:[],displayName:"Animation",props:{isAnimate:{required:!0,tsType:{name:"boolean"},description:""},finishAnimation:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const _={title:"Organisms/Animation",component:g,parameters:{layout:"fullscreen",backgrounds:{default:"dark"}},tags:["autodocs"]},e={args:{isAnimate:!1,finishAnimation:()=>console.log("애니메이션 종료")}},t={args:{isAnimate:!0,finishAnimation:()=>console.log("애니메이션 종료")}};var m,c,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    isAnimate: false,
    finishAnimation: () => console.log('애니메이션 종료')
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,l,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isAnimate: true,
    finishAnimation: () => console.log('애니메이션 종료')
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const k=["Default","Animated"];export{t as Animated,e as Default,k as __namedExportsOrder,_ as default};
