import{j as l}from"./jsx-runtime-BlAj40OV.js";import{d as i,l as t,b as r}from"./buildProps-CDH3mL-T.js";import{b as o}from"./index-DpFthwfH.js";const s=i.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: ${({$fullWidth:e})=>e?"-webkit-fill-available":"auto"};
	height: ${({$fullHeight:e})=>e?"-webkit-fill-available":"auto"};
	gap: ${o.value.box.spacing}px;
	padding: ${o.value.box.padding}px;
	border-radius: ${o.value.box.radius}px;
	color: ${o.color.text.base};
	background-color: ${({$useBlack:e})=>e?o.color.background.base:o.color.background.elevated};
	${({$css:e})=>e&&t(e)};
`,d=({children:e,...a})=>l.jsx(s,{...r(a),children:e});d.__docgenInfo={description:`박스 컴포넌트
@param {boolean} useBlack - 배경 색상 설정
@param {boolean} fullWidth - 너비 설정
@param {boolean} fullHeight - 높이 설정
@param {StyledObject} css - 스타일 설정
@param {As} as - 렌더링할 HTML 요소 또는 컴포넌트`,methods:[],displayName:"Box",props:{useBlack:{required:!1,tsType:{name:"Bool"},description:""},fullWidth:{required:!1,tsType:{name:"Bool"},description:""},fullHeight:{required:!1,tsType:{name:"Bool"},description:""},css:{required:!1,tsType:{name:"StyledObject"},description:""}},composes:["HTMLAttributes","PropsWithChildren"]};export{d as B};
