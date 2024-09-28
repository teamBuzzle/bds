import{j as g}from"./jsx-runtime-BlAj40OV.js";import{d as f,l as h,b as x}from"./buildProps-CDH3mL-T.js";import{b as t}from"./index-DpFthwfH.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const b=(e,r)=>r.split(".").reduce((a,l)=>a&&typeof a=="object"&&l in a?a[l]:void 0,e),S=f.p`
	font-size: ${({$small:e})=>e?t.typography.text.small.fontSize:t.typography.text.base.fontSize}px;
	font-weight: ${({$small:e})=>e?t.typography.text.small.fontWeight:t.typography.text.base.fontWeight};
	line-height: ${({$small:e})=>e?t.typography.text.small.lineHeight:t.typography.text.base.lineHeight};
	letter-spacing: ${({$small:e})=>e?t.typography.text.small.letterSpacing:t.typography.text.base.letterSpacing};
	font-family: ${({$small:e})=>e?t.typography.text.small.fontFamily:t.typography.text.base.fontFamily};
	color: ${({$color:e})=>{if(e){const r=b(t.color,e);if(typeof r=="string")return r;throw new Error(`유효하지 않은 색상 경로: ${e}`)}return t.color.text.base}};
	text-align: ${({$align:e})=>e};

	${({$css:e})=>e&&h(e)};
`,u=({children:e,as:r,...n})=>g.jsx(S,{as:r,...x(n),children:e});u.__docgenInfo={description:"",methods:[],displayName:"Text",props:{align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:""},small:{required:!1,tsType:{name:"Bool"},description:""},color:{required:!1,tsType:{name:"DeepKeyOf",elements:[{name:"ColorToken"}],raw:"DeepKeyOf<ColorToken>"},description:""},css:{required:!1,tsType:{name:"StyledObject"},description:""}},composes:["Omit","PropsWithChildren"]};const $={title:"Atoms/Text",component:u,parameters:{layout:"centered",docs:{description:{component:"텍스트 컴포넌트, 텍스트를 표시하는 컴포넌트입니다."}}},tags:["autodocs"],argTypes:{as:{description:"Polymorphic 컴포넌트, 기본 태그를 변경할 수 있습니다.",table:{type:{summary:"keyof JSX.IntrinsicElements | React.ComponentType"},defaultValue:{summary:"div"}},options:["div","button","a","form"],control:{type:"select"}},children:{description:"박스 내부에 들어갈 요소",table:{type:{summary:"string | React.ReactNode"}},control:{type:"text",defaultValue:"Button"}},css:{description:"박스에 적용할 추가적인 CSS 스타일",table:{type:{summary:"StyledObject"}},control:{type:"object"}},small:{description:"작은 텍스트로 렌더링합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},o={parameters:{docs:{description:{story:"기본 텍스트를 표시합니다."}}},args:{children:"Basic Text"}},s={parameters:{docs:{description:{story:"작은 텍스트를 표시합니다."}}},args:{children:"Small Text",small:!0}};var i,p,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '기본 텍스트를 표시합니다.'
      }
    }
  },
  args: {
    children: 'Basic Text'
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,d,y;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '작은 텍스트를 표시합니다.'
      }
    }
  },
  args: {
    children: 'Small Text',
    small: true
  }
}`,...(y=(d=s.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};const w=["Basic","Small"];export{o as Basic,s as Small,w as __namedExportsOrder,$ as default};
