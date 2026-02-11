import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{m as V}from"./proxy-CRGCT33f.js";import{B as I}from"./Box-BNoC8hlL.js";import"./index-CgfFrydU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./emotion-element-f0de968e.browser.esm-Cp_kNtMN.js";import"./generateUtilityClasses-CsFllfrJ.js";import"./createTheme-CN4DXWZy.js";import"./extendSxProp-DuE9bGZQ.js";const S=[.25,.46,.45,.94],F={fadeUp:{initial:{opacity:0,y:60},whileInView:{opacity:1,y:0}},fadeLeft:{initial:{opacity:0,x:-60},whileInView:{opacity:1,x:0}},fadeRight:{initial:{opacity:0,x:60},whileInView:{opacity:1,x:0}},fadeIn:{initial:{opacity:0},whileInView:{opacity:1}}},L=({variant:h="fadeUp",delay:y=0,duration:v=.8,threshold:R=.3,children:w,...U})=>{const n=F[h];return t.jsx(V.div,{initial:n.initial,whileInView:n.whileInView,viewport:{once:!0,amount:R},transition:{duration:v,delay:y,ease:S},children:t.jsx(I,{...U,children:w})})},W={title:"컴포넌트/Atoms/AnimatedSection",component:L,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#141414"},{name:"light",value:"#ffffff"}]}},tags:["autodocs"],argTypes:{variant:{description:"애니메이션 종류",control:"select",options:["fadeUp","fadeLeft","fadeRight","fadeIn"],defaultValue:"fadeUp"},delay:{description:"애니메이션 지연 시간 (초)",control:{type:"number",min:0,max:2,step:.1},defaultValue:0},duration:{description:"애니메이션 지속 시간 (초)",control:{type:"number",min:.1,max:3,step:.1},defaultValue:.8},threshold:{description:"뷰포트 노출 비율 (0~1)",control:{type:"number",min:0,max:1,step:.1},defaultValue:.3}}},a={args:{variant:"fadeUp",children:"아래에서 위로 페이드 인",sx:{p:4,color:"#fff",bgcolor:"rgba(255,255,255,0.05)",borderRadius:"12px"}}},e={args:{variant:"fadeLeft",children:"왼쪽에서 오른쪽으로 페이드 인",sx:{p:4,color:"#fff",bgcolor:"rgba(255,255,255,0.05)",borderRadius:"12px"}}},r={args:{variant:"fadeRight",children:"오른쪽에서 왼쪽으로 페이드 인",sx:{p:4,color:"#fff",bgcolor:"rgba(255,255,255,0.05)",borderRadius:"12px"}}},o={args:{variant:"fadeUp",delay:.5,children:"0.5초 지연 후 페이드 인",sx:{p:4,color:"#fff",bgcolor:"rgba(255,255,255,0.05)",borderRadius:"12px"}}};var i,s,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'fadeUp',
    children: '아래에서 위로 페이드 인',
    sx: {
      p: 4,
      color: '#fff',
      bgcolor: 'rgba(255,255,255,0.05)',
      borderRadius: '12px'
    }
  }
}`,...(d=(s=a.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var c,p,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'fadeLeft',
    children: '왼쪽에서 오른쪽으로 페이드 인',
    sx: {
      p: 4,
      color: '#fff',
      bgcolor: 'rgba(255,255,255,0.05)',
      borderRadius: '12px'
    }
  }
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var f,m,u;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'fadeRight',
    children: '오른쪽에서 왼쪽으로 페이드 인',
    sx: {
      p: 4,
      color: '#fff',
      bgcolor: 'rgba(255,255,255,0.05)',
      borderRadius: '12px'
    }
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,x,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'fadeUp',
    delay: 0.5,
    children: '0.5초 지연 후 페이드 인',
    sx: {
      p: 4,
      color: '#fff',
      bgcolor: 'rgba(255,255,255,0.05)',
      borderRadius: '12px'
    }
  }
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const q=["FadeUp","FadeLeft","FadeRight","WithDelay"];export{e as FadeLeft,r as FadeRight,a as FadeUp,o as WithDelay,q as __namedExportsOrder,W as default};
//# sourceMappingURL=AnimatedSection.stories-CjLBwiIm.js.map
