import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{b as e}from"./index-C8vcGTzu.js";import{L as p}from"./Link-vUMxFn4P.js";import{T as w}from"./Typography-czKpvgvd.js";import"./index-Dcms-uI6.js";import"./createTheme-DT7P5OtA.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./generateUtilityClasses-BQmCNWlW.js";import"./emotion-element-f0de968e.browser.esm-DyKlJ_Vv.js";import"./useTheme-cvpGXu9U.js";import"./DefaultPropsProvider-DvTmJLRd.js";import"./extendSxProp-RZ5FkWSB.js";import"./createSimplePaletteValueFilter-DkYKAHP0.js";import"./isFocusVisible-B8k4qzLc.js";import"./index-CD44Cmxn.js";const C={small:{logo:{width:123,height:40},text:e.token.typography.size.title3},medium:{logo:{width:246,height:80},text:e.token.typography.size.title2},large:{logo:{width:369,height:120},text:e.token.typography.size.title1}},i=({image:m,size:k="medium",...n})=>{const{logo:{width:L,height:b},text:j}=C[k];return m?a.jsx(p,{href:"/",...n,children:a.jsx("img",{src:"/images/logo.svg",alt:"버즐 로고",width:L,height:b,style:{objectFit:"contain",userSelect:"none"}})}):a.jsx(w,{component:p,href:"/",sx:{fontSize:j,fontWeight:e.token.typography.weight.bold,fontFamily:e.token.typography.family.pretendard,color:e.color.text.title,userSelect:"none"},...n,children:"Buzzle"})};try{i.displayName="Logo",i.__docgenInfo={description:"로고 컴포넌트",displayName:"Logo",props:{}}}catch{}const J={title:"컴포넌트/Atoms/Logo",component:i,parameters:{layout:"centered",backgrounds:{default:"dark"}},argTypes:{size:{control:"select",options:["small","medium","large"],description:"로고 크기"},image:{control:"boolean",description:"이미지 표시 여부"}},tags:["autodocs"]},r={args:{size:"small"}},o={args:{size:"medium"}},t={args:{size:"large"}},s={args:{size:"large",image:!0}};var c,g,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(l=(g=r.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var d,u,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,z,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(f=(z=t.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var x,_,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'large',
    image: true
  }
}`,...(S=(_=s.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};const K=["Small","Medium","Large","WithImage"];export{t as Large,o as Medium,r as Small,s as WithImage,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Logo.stories-BHUzGccX.js.map
