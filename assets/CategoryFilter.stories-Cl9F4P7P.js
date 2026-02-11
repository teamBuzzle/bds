import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{S as D}from"./Stack-D3BswWfF.js";import{C as E}from"./Chip-DPYNYyeQ.js";import"./createSimplePaletteValueFilter-BFYkdot2.js";import"./DefaultPropsProvider-Bo6nkiJm.js";import"./emotion-element-f0de968e.browser.esm-Cp_kNtMN.js";import"./index-CgfFrydU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createTheme-CN4DXWZy.js";import"./generateUtilityClasses-CsFllfrJ.js";import"./useThemeProps-CTxHbmAC.js";import"./extendSxProp-DuE9bGZQ.js";import"./useSlot-Bag7hyuP.js";import"./useTimeout-CLJHompC.js";import"./ButtonBase-0dgLigRO.js";import"./useEnhancedEffect-QNI2HLi_.js";import"./isFocusVisible-B8k4qzLc.js";const F=(r,e)=>r&&e?"rgba(103, 120, 255, 0.2)":r?"#6174fb":e?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.05)",_=(r,e)=>r&&e?"#6778ff":r?"#fff":e?"rgba(255, 255, 255, 0.6)":"rgba(0, 0, 0, 0.6)",z=(r,e)=>r&&e?"1px solid rgba(103, 120, 255, 0.3)":r?"1px solid #6174fb":"1px solid transparent",H=(r,e)=>r&&e?"rgba(103, 120, 255, 0.25)":r?"#5563e0":e?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.08)",M=({categories:r,selected:e,onChange:y,showAll:p=!0,allLabel:o="전체",variant:W="dark",sx:w,...A})=>{const B=p?[o,...r]:r,V=t=>p&&t===o?e==="all"||e===o:e===t,a=W==="dark";return d.jsx(D,{direction:"row",flexWrap:"wrap",gap:1,sx:w,...A,children:B.map(t=>{const s=V(t);return d.jsx(E,{label:t,onClick:()=>y(p&&t===o?"all":t),sx:{fontWeight:600,fontSize:"14px",cursor:"pointer",bgcolor:F(s,a),color:_(s,a),border:z(s,a),"&:hover":{bgcolor:H(s,a)}}},t)})})},O=()=>{},er={title:"컴포넌트/Molecules/CategoryFilter",component:M,args:{onChange:O},parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#141414"},{name:"light",value:"#ffffff"}]}},tags:["autodocs"],argTypes:{categories:{description:"카테고리 목록",control:"object"},selected:{description:"현재 선택된 카테고리",control:"text"},showAll:{description:"'전체' 옵션 포함 여부",control:"boolean",defaultValue:!0},allLabel:{description:"'전체' 옵션의 라벨",control:"text",defaultValue:"전체"},variant:{description:"색상 변형",control:"select",options:["dark","light"],defaultValue:"dark"}}},n={args:{categories:["서비스","결제","기술","기타"],selected:"all",variant:"dark"}},i={args:{categories:["서비스","결제","기술","기타"],selected:"서비스",variant:"dark"}},c={args:{categories:["서비스","결제","기술","기타"],selected:"all",variant:"light"}},l={args:{categories:["서비스","결제","기술","기타"],selected:"서비스",showAll:!1,variant:"dark"}};var g,u,m;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    categories: ['서비스', '결제', '기술', '기타'],
    selected: 'all',
    variant: 'dark'
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var f,h,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    categories: ['서비스', '결제', '기술', '기타'],
    selected: '서비스',
    variant: 'dark'
  }
}`,...(k=(h=i.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var b,x,C;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    categories: ['서비스', '결제', '기술', '기타'],
    selected: 'all',
    variant: 'light'
  }
}`,...(C=(x=c.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var v,S,j;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    categories: ['서비스', '결제', '기술', '기타'],
    selected: '서비스',
    showAll: false,
    variant: 'dark'
  }
}`,...(j=(S=l.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const tr=["Dark","DarkSelected","Light","WithoutAll"];export{n as Dark,i as DarkSelected,c as Light,l as WithoutAll,tr as __namedExportsOrder,er as default};
//# sourceMappingURL=CategoryFilter.stories-Cl9F4P7P.js.map
