import{j as i}from"./jsx-runtime-DPRcWr2C.js";import{L as b}from"./Link-BxKfK--Z.js";import{S as v}from"./Stack-CEqnA-Gj.js";import"./index-B6-Y_Zgq.js";import"./_commonjsHelpers-CqkleIqs.js";import"./generateUtilityClasses-BKikQcmt.js";import"./emotion-element-5486c51c.browser.esm-BrRU5PSG.js";import"./useTheme-m-QYQDew.js";import"./DefaultPropsProvider-doerhS6B.js";import"./createTheme-C-zWfE2d.js";import"./useTheme-B4qSp4Qi.js";import"./memoTheme-rWTbEybz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Typography-B3lQxwiS.js";import"./index-t-cyOJK-.js";import"./emotion-react.browser.esm-_yI4pUy6.js";import"./extendSxProp-BDGrLznd.js";import"./isFocusVisible-B8k4qzLc.js";const x=({items:a,onItemClick:s,...y})=>i.jsx(v,{component:"nav",direction:"row",spacing:7,...y,children:a.map(({label:k,href:n})=>i.jsx(b,{href:n,onClick:()=>s==null?void 0:s(n),className:"nav-link",children:k},n))});x.__docgenInfo={description:"",methods:[],displayName:"NavBar",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
	label: string;
	href: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}],raw:`Array<{
	label: string;
	href: string;
}>`},description:""},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(href: string) => void",signature:{arguments:[{type:{name:"string"},name:"href"}],return:{name:"void"}}},description:""}},composes:["StackProps"]};const M={title:"Molecules/NavBar",component:x,parameters:{layout:"centered",backgrounds:{default:"dark"}},tags:["autodocs"]},o=[{label:"주요기능",href:"/feature"},{label:"템플릿",href:"/template"},{label:"요금",href:"/price"},{label:"고객센터",href:"/customer"}],e={args:{items:o}},r={args:{items:o,onItemClick:a=>alert(`이동할 경로: ${a}`)}},t={args:{items:o,sx:{flexDirection:"column",alignItems:"flex-start",gap:3}}};var m,p,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    items
  }
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var l,u,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const O=["Default","WithClickHandler","Vertical"];export{e as Default,t as Vertical,r as WithClickHandler,O as __namedExportsOrder,M as default};
