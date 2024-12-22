import{j as e}from"./jsx-runtime-DPRcWr2C.js";import{T as n}from"./Text-CYiKTx7p.js";import{B as S}from"./Box-ezUirVkb.js";import"./index-B6-Y_Zgq.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Typography-B3lQxwiS.js";import"./generateUtilityClasses-BKikQcmt.js";import"./emotion-element-5486c51c.browser.esm-BrRU5PSG.js";import"./index-t-cyOJK-.js";import"./DefaultPropsProvider-doerhS6B.js";import"./createTheme-C-zWfE2d.js";import"./useTheme-B4qSp4Qi.js";import"./emotion-react.browser.esm-_yI4pUy6.js";import"./extendSxProp-BDGrLznd.js";import"./memoTheme-rWTbEybz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const l=({type:t,author:a,content:g,date:f,...s})=>e.jsxs(S,{sx:{p:2,minHeight:"105px",display:"flex",flexDirection:"column",gap:"10px",bgcolor:()=>t==="admin"?"rgba(13, 121, 255, 0.1)":"rgba(0, 0, 0, 0.05)",borderRadius:"8px",fontFamily:"Pretendard, sans-serif",...s.sx},...s,children:[a&&e.jsx(n,{sx:{fontWeight:700,fontSize:"16px",color:t==="admin"?"#4c65e9":"#4b4b4b"},children:a}),e.jsx(n,{sx:{fontSize:"14px",lineHeight:"22px"},children:g}),e.jsx(n,{sx:{color:"#727272",fontSize:"14px"},children:f})]});l.__docgenInfo={description:"",methods:[],displayName:"CommentBox",props:{type:{required:!0,tsType:{name:"union",raw:"'admin' | 'customer'",elements:[{name:"literal",value:"'admin'"},{name:"literal",value:"'customer'"}]},description:""},author:{required:!1,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"string"},description:""},date:{required:!0,tsType:{name:"string"},description:""}},composes:["BoxProps"]};const A={title:"Molecules/CommentBox",component:l,parameters:{layout:"centered"},tags:["autodocs"]},x=()=>{const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`},r={args:{type:"customer",author:"사용자",content:"문의 내용입니다.",date:x()}},o={args:{type:"admin",content:"안녕하세요, 버즐 고객센터입니다.",date:x()}};var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: 'customer',
    author: '사용자',
    content: '문의 내용입니다.',
    date: formatDate()
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,d,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'admin',
    content: '안녕하세요, 버즐 고객센터입니다.',
    date: formatDate()
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const E=["Customer","Admin"];export{o as Admin,r as Customer,E as __namedExportsOrder,A as default};
