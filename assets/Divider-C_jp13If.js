import{j as s}from"./jsx-runtime-BlAj40OV.js";import{r as i}from"./index-Cs7sjTYM.js";import{b as u}from"./index-DpFthwfH.js";import{B as d}from"./Box-Cy5sVEm_.js";import{d as m,b as p}from"./buildProps-CDH3mL-T.js";const f=(a,e)=>{const l=i.Children.toArray(a);return l.reduce((t,r,n)=>(t.push(s.jsx(i.Fragment,{children:r},`child-${n}`)),n!==l.length-1&&e&&t.push(s.jsx(i.Fragment,{children:e},`divider-${n}`)),t),[])},h=({children:a,direction:e="column",gap:l="small",align:t="start",justify:r="start",divider:n,as:c})=>{var o;return s.jsx(d,{as:c,css:{display:"flex",flexDirection:e,gap:(o=u.token.value.spacing)==null?void 0:o[l],alignItems:t,justifyContent:r},children:f(a,n)})};h.__docgenInfo={description:`스택 컴포넌트
@param {ReactNode} children - 자식 요소
@param {'row' | 'column'} direction - 스택 방향
@param {keyof ValueToken['spacing']} gap - 스택 간격
@param {Align} align - 스택 정렬
@param {Justify} justify - 스택 정렬
@param {ReactNode} divider - 스택 내부 구분자
@param {As} as - 렌더링할 HTML 요소 또는 컴포넌트`,methods:[],displayName:"Stack",props:{direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:"",defaultValue:{value:"'column'",computed:!1}},gap:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"'small'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:"",defaultValue:{value:"'start'",computed:!1}},justify:{required:!1,tsType:{name:"union",raw:"Align | 'space-between' | 'space-around' | 'space-evenly'",elements:[{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-evenly'"}]},description:"",defaultValue:{value:"'start'",computed:!1}},divider:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["PropsWithChildren","As"]};const v=m.hr`
	border: none;
	margin: 0;
	padding: 0;
	align-items: center;
	white-space: nowrap;
	text-align: center;
	background-color: ${u.color.line.base};
	width: ${({$direction:a})=>a==="vertical"?"1px":"100%"};
	height: ${({$direction:a,$height:e})=>a==="vertical"?`${e}px`:"1px"};
`,g=a=>{const e=i.useRef(null),[l,t]=i.useState(1);return i.useLayoutEffect(()=>{if(e.current){const r=e.current.nextSibling,n=(r==null?void 0:r.offsetHeight)??1;t(n)}},[]),s.jsx(v,{$height:l,ref:e,...p(a),role:"separator"})};g.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:""}}};export{g as D,h as S};
