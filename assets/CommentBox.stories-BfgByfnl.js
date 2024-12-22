import{j as t}from"./jsx-runtime-CfatFE5O.js";import{T as n}from"./Text-BqbwCITv.js";import{B as y}from"./Box-B7M_Hq5G.js";import{B as h}from"./index-BtBnTc2J.js";import{R as i}from"./index-ClcD9ViR.js";import"./Typography-lzik__qm.js";import"./createTheme-6hCvPVGf.js";import"./index-Bvp1bzdA.js";import"./DefaultPropsProvider-Bg0xjppw.js";import"./useTheme-Ck1BHKKz.js";import"./emotion-react.browser.esm-Bdj7olV6.js";import"./extendSxProp-Dig3Tbhh.js";import"./memoTheme-CVjaAQbI.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./index-QLCul3Mm.js";import"./_commonjsHelpers-Cpj98o6Y.js";const x=({type:e,author:a,content:f,date:S,...s})=>t.jsxs(y,{sx:{p:2,minHeight:"105px",display:"flex",flexDirection:"column",gap:"10px",bgcolor:()=>e==="admin"?"rgba(13, 121, 255, 0.1)":"rgba(0, 0, 0, 0.05)",borderRadius:"8px",fontFamily:"Pretendard, sans-serif",...s.sx},...s,children:[a&&t.jsx(n,{sx:{fontWeight:700,fontSize:"16px",color:e==="admin"?"#4c65e9":"#4b4b4b"},children:a}),t.jsx(n,{sx:{fontSize:"14px",lineHeight:"22px"},children:f}),t.jsx(n,{sx:{color:"#727272",fontSize:"14px"},children:S})]});x.__docgenInfo={description:"",methods:[],displayName:"CommentBox",props:{type:{required:!0,tsType:{name:"union",raw:"'admin' | 'customer'",elements:[{name:"literal",value:"'admin'"},{name:"literal",value:"'customer'"}]},description:""},author:{required:!1,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"string"},description:""},date:{required:!0,tsType:{name:"string"},description:""}},composes:["BoxProps"]};const P={title:"Molecules/CommentBox",component:x,decorators:[e=>i.createElement(h,null,i.createElement(e))],parameters:{layout:"centered"},tags:["autodocs"]},g=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")} ${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`},r={args:{type:"customer",author:"사용자",content:"문의 내용입니다.",date:g()}},o={args:{type:"admin",content:"안녕하세요, 버즐 고객센터입니다.",date:g()}};var m,p,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: 'customer',
    author: '사용자',
    content: '문의 내용입니다.',
    date: formatDate()
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,u,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: 'admin',
    content: '안녕하세요, 버즐 고객센터입니다.',
    date: formatDate()
  }
}`,...(l=(u=o.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const A=["Customer","Admin"];export{o as Admin,r as Customer,A as __namedExportsOrder,P as default};
