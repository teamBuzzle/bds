import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{b as e}from"./index-52F6tjRH.js";import{L as m}from"./Link-BweQ-t2B.js";import{T as w}from"./Typography-CsS5dEZh.js";import"./createTheme-BJe9hqys.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createSimplePaletteValueFilter-D8UXgGMj.js";import"./DefaultPropsProvider-PWp-ue-w.js";import"./useTheme-DF8Pg9qS.js";import"./index-Bd-4k5me.js";import"./isFocusVisible-B8k4qzLc.js";const T={small:{logo:{width:123,height:40},text:e.token.typography.size.title3},medium:{logo:{width:246,height:80},text:e.token.typography.size.title2},large:{logo:{width:369,height:120},text:e.token.typography.size.title1}},W=({image:S,size:k="medium",...i})=>{const{logo:{width:b,height:j},text:L}=T[k];return S?a.jsx(m,{href:"/",...i,children:a.jsx("img",{src:"/images/logo.svg",alt:"버즐 로고",width:b,height:j,style:{objectFit:"contain",userSelect:"none"}})}):a.jsx(w,{component:m,href:"/",sx:{fontSize:L,fontWeight:e.token.typography.weight.bold,fontFamily:e.token.typography.family.pretendard,color:e.color.text.title,userSelect:"none"},...i,children:"Buzzle"})},D={title:"Atoms/Logo",component:W,parameters:{layout:"centered",backgrounds:{default:"dark"}},argTypes:{size:{control:"select",options:["small","medium","large"],description:"로고 크기"},image:{control:"boolean",description:"이미지 표시 여부"}},tags:["autodocs"]},r={args:{size:"small"}},t={args:{size:"medium"}},o={args:{size:"large"}},s={args:{size:"large",image:!0}};var n,c,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var g,p,d;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,h,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var z,f,x;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'large',
    image: true
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const G=["Small","Medium","Large","WithImage"];export{o as Large,t as Medium,r as Small,s as WithImage,G as __namedExportsOrder,D as default};
//# sourceMappingURL=Logo.stories-Cha6rZiX.js.map
