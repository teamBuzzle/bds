import{j as i}from"./jsx-runtime-CfatFE5O.js";import{L as b}from"./Link-DUab5Pqy.js";import{S as v}from"./Stack-B5D6a5TZ.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./createTheme-CjrVVy3p.js";import"./useTheme-BxZkkcra.js";import"./DefaultPropsProvider-DfOUXs8s.js";import"./useTheme-BCGC1O2J.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Typography-BaHhcfnU.js";import"./index-B0nsEdms.js";import"./emotion-react.browser.esm-BCmK9DIQ.js";import"./extendSxProp-BJbtdSy1.js";import"./isFocusVisible-B8k4qzLc.js";const x=({items:t,onItemClick:s,...y})=>i.jsx(v,{component:"nav",direction:"row",spacing:7,...y,children:t.map(({label:k,href:n})=>i.jsx(b,{href:n,onClick:()=>s==null?void 0:s(n),className:"nav-link",children:k},n))});x.__docgenInfo={description:"",methods:[],displayName:"NavBar",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
	label: string;
	href: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}],raw:`Array<{
	label: string;
	href: string;
}>`},description:""},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(href: string) => void",signature:{arguments:[{type:{name:"string"},name:"href"}],return:{name:"void"}}},description:""}},composes:["StackProps"]};const V={title:"Molecules/NavBar",component:x,parameters:{layout:"centered",backgrounds:{default:"dark"}},tags:["autodocs"]},o=[{label:"주요기능",href:"/feature"},{label:"템플릿",href:"/template"},{label:"요금",href:"/price"},{label:"고객센터",href:"/customer"}],e={args:{items:o}},r={args:{items:o,onItemClick:t=>alert(`이동할 경로: ${t}`)}},a={args:{items:o,sx:{flexDirection:"column",alignItems:"flex-start",gap:3}}};var m,c,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    items
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,u,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items,
    onItemClick: href => alert(\`이동할 경로: \${href}\`)
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,f,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    items,
    sx: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 3
    }
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const W=["Default","WithClickHandler","Vertical"];export{e as Default,a as Vertical,r as WithClickHandler,W as __namedExportsOrder,V as default};
