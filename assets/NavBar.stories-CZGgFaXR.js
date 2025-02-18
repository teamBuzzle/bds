import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{L as j}from"./Link-ChEHdCd6.js";import{S as k}from"./Stack-3WOkeB-t.js";import"./Link-BoSnAiOq.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./generateUtilityClasses-Bz_W7Ws-.js";import"./emotion-element-f0de968e.browser.esm-C1XcXHaF.js";import"./useTheme-Biu8FvYE.js";import"./DefaultPropsProvider-DqQiBI3e.js";import"./createTheme-BbTyDt8B.js";import"./extendSxProp-D_dSpRvs.js";import"./createSimplePaletteValueFilter-BA5_35u8.js";import"./Typography-N54uhdCM.js";import"./index-DWv215FA.js";import"./isFocusVisible-B8k4qzLc.js";const S=({items:a,onItemClick:o,...b})=>i.jsx(k,{component:"nav",direction:"row",spacing:7,...b,children:a.map(({label:h,href:s})=>i.jsx(j,{href:s,onClick:()=>o==null?void 0:o(s),className:"nav-link",children:h},s))}),O={title:"Molecules/NavBar",component:S,parameters:{layout:"centered",backgrounds:{default:"dark"}},argTypes:{items:{description:"네비게이션 아이템 목록",control:"object"},onItemClick:{description:"아이템 클릭 핸들러",control:"object"},sx:{description:"스타일 오버라이드",control:"object"}},tags:["autodocs"]},n=[{label:"주요기능",href:"/feature"},{label:"템플릿",href:"/template"},{label:"요금",href:"/price"},{label:"고객센터",href:"/customer"}],r={args:{items:n}},e={args:{items:n,onItemClick:a=>alert(`이동할 경로: ${a}`)}},t={args:{items:n,sx:{flexDirection:"column",alignItems:"flex-start",gap:3}}};var c,m,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    items
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,d,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    items,
    // eslint-disable-next-line no-alert
    onItemClick: href => alert(\`이동할 경로: \${href}\`)
  }
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,f,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    items,
    sx: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 3
    }
  }
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const R=["Default","WithClickHandler","Vertical"];export{r as Default,t as Vertical,e as WithClickHandler,R as __namedExportsOrder,O as default};
