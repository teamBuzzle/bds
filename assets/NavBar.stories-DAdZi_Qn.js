import{j as i}from"./jsx-runtime-DPRcWr2C.js";import{L as k}from"./Link-CGVOWZqt.js";import{S as v}from"./Stack-CDFTm-xz.js";import"./index-B6-Y_Zgq.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-qyqulL5M.js";import"./generateUtilityClasses-C7NVNw6_.js";import"./emotion-element-5486c51c.browser.esm-BQ8bDspF.js";import"./useTheme-BNOASdsC.js";import"./DefaultPropsProvider-BO4dxBej.js";import"./createTheme-BXx0ugnC.js";import"./extendSxProp-B5Q85D5w.js";import"./createSimplePaletteValueFilter-B6WGg_tz.js";import"./Typography-iLfPInb-.js";import"./index-BGARUmAf.js";import"./isFocusVisible-B8k4qzLc.js";const x=({items:a,onItemClick:s,...b})=>i.jsx(v,{component:"nav",direction:"row",spacing:7,...b,children:a.map(({label:y,href:n})=>i.jsx(k,{href:n,onClick:()=>s==null?void 0:s(n),className:"nav-link",children:y},n))});x.__docgenInfo={description:"",methods:[],displayName:"NavBar",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
	label: string;
	href: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}],raw:`Array<{
	label: string;
	href: string;
}>`},description:""},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(href: string) => void",signature:{arguments:[{type:{name:"string"},name:"href"}],return:{name:"void"}}},description:""}},composes:["StackProps"]};const W={title:"Molecules/NavBar",component:x,parameters:{layout:"centered",backgrounds:{default:"dark"}},argTypes:{items:{description:"네비게이션 아이템 목록",control:"object"},onItemClick:{description:"아이템 클릭 핸들러",control:"object"},sx:{description:"스타일 오버라이드",control:"object"}},tags:["autodocs"]},o=[{label:"주요기능",href:"/feature"},{label:"템플릿",href:"/template"},{label:"요금",href:"/price"},{label:"고객센터",href:"/customer"}],e={args:{items:o}},r={args:{items:o,onItemClick:a=>alert(`이동할 경로: ${a}`)}},t={args:{items:o,sx:{flexDirection:"column",alignItems:"flex-start",gap:3}}};var c,m,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    items
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,u,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items,
    onItemClick: href => alert(\`이동할 경로: \${href}\`)
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,f,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    items,
    sx: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 3
    }
  }
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const $=["Default","WithClickHandler","Vertical"];export{e as Default,t as Vertical,r as WithClickHandler,$ as __namedExportsOrder,W as default};
