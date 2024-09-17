import{j as r}from"./jsx-runtime-BlAj40OV.js";import{d as n,b as l}from"./buildProps-CDH3mL-T.js";import{b as o}from"./index-DpFthwfH.js";const a=n.button`
	display: flex;
	width: ${({$fullWidth:e})=>e?"100%":"fit-content"};
	height: ${({$dense:e})=>e?"40px":"65px"};
	padding: ${o.value.button.paddingY}px ${o.value.button.paddingX}px;
	justify-content: center;
	align-items: center;
	align-self: stretch;
	border-radius: ${o.value.button.radius}px;
	border: none;
	cursor: pointer;
	color: ${o.color.text.base};
	background-color: ${o.color.button.base};
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	justify-content: ${({$align:e})=>e==="left"?"flex-start":e==="right"?"flex-end":"center"};
	gap: ${o.value.button.spacing}px;

	${o.typography.button.base}

	&:hover {
		background-color: ${o.color.button.hover};
	}

	&:disabled {
		background-color: ${o.color.button.disabled};
		color: ${o.color.text.disabled};
		cursor: not-allowed;
		pointer-events: none;
	}

	&:focus {
		outline: none;
	}

	&:active {
		background-color: ${o.color.button.active};
	}

	&.selected {
		background-color: ${o.color.button.selected};
	}

	${({$outlined:e})=>e&&`
			border: 1px solid ${o.color.button.outlined};
			background-color: transparent;
			color: ${o.color.button.outlined};

			&:hover {
				background-color: transparent;
				color: ${o.color.text.linkHover};
				border-color: ${o.color.text.linkHover};
			}

			&:active {
				background-color: transparent;
				color: ${o.color.text.linkActive};
				border-color: ${o.color.text.linkActive};
			}

			&:disabled {
				background-color: transparent;
				color: ${o.color.text.disabled};
				border-color: ${o.color.text.disabled};
			}
		`}
	${({$text:e})=>e&&`
			background-color: transparent;
			border: none;
			color: ${o.color.button.text};

			&:hover {
				background-color: transparent;
				color: ${o.color.text.linkHover};
			}

			&:active {
				background-color: transparent;
				color: ${o.color.text.linkActive};
			}

			&:disabled {
				background-color: transparent;
				color: ${o.color.text.disabled};
			}
		`}
`,c=({children:e,...t})=>r.jsx(a,{...l(t),children:e});c.__docgenInfo={description:`버튼 컴포넌트
@param {boolean} dense - 버튼 밀도 설정
@param {string} align - 버튼 정렬 설정
@param {function} onClick - 버튼 클릭 시 실행될 함수
@param {boolean} outlined - 버튼 테두리 설정
@param {boolean} text - 버튼 텍스트 설정
@param {boolean} disabled - 버튼 비활성화 여부
@param {ReactNode} children - 버튼 내부에 들어갈 텍스트
@param {boolean} fullWidth - 버튼 너비 설정`,methods:[],displayName:"Button",props:{dense:{required:!1,tsType:{name:"Bool"},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"}]},description:""},outlined:{required:!1,tsType:{name:"Bool"},description:""},text:{required:!1,tsType:{name:"Bool"},description:""},fullWidth:{required:!1,tsType:{name:"Bool"},description:""}},composes:["ButtonHTMLAttributes","PropsWithChildren"]};export{c as B};
