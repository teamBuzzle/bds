import{f as k,w as p,e as n,u as E}from"./index-DcZGqPg1.js";import{j as D}from"./jsx-runtime-BlAj40OV.js";import{d as H,b as S,g as l}from"./color-C5ytXC0q.js";import{b as t}from"./index-IyPaAEXY.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const I=H.button`
	display: flex;
	width: ${({$fullWidth:s})=>s?"100%":"fit-content"};
	height: ${({$dense:s})=>s?"40px":"65px"};
	padding: ${t.value.button.paddingY}px ${t.value.button.paddingX}px;
	justify-content: center;
	align-items: center;
	align-self: stretch;
	border-radius: ${t.value.button.radius}px;
	border: none;
	cursor: pointer;
	color: ${t.color.text.base};
	background-color: ${t.color.button.base};
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	justify-content: ${({$align:s})=>s==="left"?"flex-start":s==="right"?"flex-end":"center"};
	gap: ${t.value.button.spacing}px;

	${t.typography.button.base}

	&:hover {
		background-color: ${t.color.button.hover};
	}

	&:disabled {
		background-color: ${t.color.button.disabled};
		color: ${t.color.text.disabled};
		cursor: not-allowed;
		pointer-events: none;
	}

	&:focus {
		outline: none;
	}

	&:active {
		background-color: ${t.color.button.active};
	}

	&.selected {
		background-color: ${t.color.button.selected};
	}

	${({$outlined:s})=>s&&`
			border: 1px solid ${t.color.button.outlined};
			background-color: transparent;
			color: ${t.color.button.outlined};

			&:hover {
				background-color: transparent;
				color: ${t.color.text.linkHover};
				border-color: ${t.color.text.linkHover};
			}

			&:active {
				background-color: transparent;
				color: ${t.color.text.linkActive};
				border-color: ${t.color.text.linkActive};
			}

			&:disabled {
				background-color: transparent;
				color: ${t.color.text.disabled};
				border-color: ${t.color.text.disabled};
			}
		`}
	${({$text:s})=>s&&`
			background-color: transparent;
			border: none;
			color: ${t.color.button.text};

			&:hover {
				background-color: transparent;
				color: ${t.color.text.linkHover};
			}

			&:active {
				background-color: transparent;
				color: ${t.color.text.linkActive};
			}

			&:disabled {
				background-color: transparent;
				color: ${t.color.text.disabled};
			}
		`}
`,$=({children:s,...o})=>D.jsx(I,{...S(o),children:s});$.__docgenInfo={description:`버튼 컴포넌트
@param dense - 버튼 밀도 설정
@param align - 버튼 정렬 설정
@param onClick - 버튼 클릭 시 실행될 함수
@param outlined - 버튼 테두리 설정
@param text - 버튼 텍스트 설정
@param disabled - 버튼 비활성화 여부
@param children - 버튼 내부에 들어갈 텍스트
@param fullWidth - 버튼 너비 설정`,methods:[],displayName:"Button",props:{dense:{required:!1,tsType:{name:"Bool"},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"}]},description:""},outlined:{required:!1,tsType:{name:"Bool"},description:""},text:{required:!1,tsType:{name:"Bool"},description:""},fullWidth:{required:!1,tsType:{name:"Bool"},description:""}},composes:["ButtonHTMLAttributes","PropsWithChildren"]};const _={title:"Atoms/Button",component:$,parameters:{layout:"centered",docs:{description:{component:'BDS 기본 버튼 컴포넌트, 사용자의 다음 행동을 유발하는 주요 액션을 나타내며, UI에서 가장 두드러지게 디자인됩니다. 사용자가 가장 많이 클릭해야 하는 버튼입니다. 예를 들어, "저장"이나 "제출" 같은 기능을 담고 있습니다.'}}},tags:["autodocs"],argTypes:{children:{description:"버튼 내부에 들어갈 요소",table:{type:{summary:"string | React.ReactNode"}},control:{type:"text",defaultValue:"Button"}},fullWidth:{description:"버튼 너비를 화면 너비로 설정",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean",defaultValue:!1}},outlined:{description:"아웃라인 버튼 스타일",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},text:{description:"텍스트형 버튼 스타일",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},align:{description:"버튼 정렬 설정",table:{defaultValue:{summary:"left"},type:{summary:"left | right | center"}},options:["left","right","center"],control:{type:"select"}},onClick:{description:"버튼 클릭 시 실행될 함수",table:{type:{summary:"React.MouseEventHandler<HTMLButtonElement>"}}},disabled:{description:"버튼 비활성화 여부",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean",defaultValue:!1}},dense:{description:"버튼을 밀집하게 표시할지 여부",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean",defaultValue:!1}}},args:{children:"Button",onClick:k()}},i={parameters:{docs:{description:{story:'기본 버튼은 사용자의 다음 행동을 유발하는 주요 액션을 나타내며, UI에서 가장 두드러지게 디자인됩니다. 사용자가 가장 많이 클릭해야 하는 버튼입니다. 예를 들어, "저장"이나 "제출" 같은 기능을 담고 있습니다. 다른 이름으로는 Call to Action (CTA) 버튼으로 부를 수 있습니다.'}}},args:{children:"Basic Button"},play:async({canvasElement:s,step:o,args:a})=>{const r=p(s);await o("버튼 렌더링 확인",async()=>{const e=r.getByRole("button",{name:a.children});await n(e).toBeInTheDocument()}),await o("버튼 텍스트 확인",async()=>{const e=r.getByRole("button",{name:a.children});await n(e).toHaveTextContent("Basic Button")}),await o("버튼 클릭 가능 여부 확인",async()=>{const e=r.getByRole("button",{name:a.children});await n(e).toBeEnabled()}),await o("Button 클릭",async()=>{await E.click(r.getByRole("button",{name:a.children})),await n(a.onClick).toHaveBeenCalled()}),await o("버튼 스타일 확인",async()=>{const e=r.getByRole("button",{name:a.children}),c=window.getComputedStyle(e);await n(c.backgroundColor).not.toBe(t.color.button.base),await n(c.color).toBe(l(t.color.text.base)),await n(c.borderRadius).toBe(`${t.value.button.radius}px`)})}},u={parameters:{docs:{description:{story:'아웃라인 버튼은 부차적인 액션을 위한 버튼으로, 기본 버튼보다는 덜 강조되지만 여전히 중요합니다. 예를 들어, "취소"나 "돌아가기"와 같은 기능을 수행합니다.'}}},args:{children:"Outlined Button",outlined:"true"},play:async({canvasElement:s,step:o,args:a})=>{const r=p(s);await o("버튼 렌더링 확인",async()=>{const e=r.getByRole("button",{name:a.children});await n(e).toBeInTheDocument()}),await o("버튼 텍스트 확인",async()=>{const e=r.getByRole("button",{name:a.children});await n(e).toHaveTextContent("Outlined Button")}),await o("버튼 클릭 가능 여부 확인",async()=>{const e=r.getByRole("button",{name:a.children});await n(e).toBeEnabled()}),await o("버튼 스타일 확인",async()=>{const e=r.getByRole("button",{name:a.children}),c=window.getComputedStyle(e);await n(c.backgroundColor).toBe("rgba(0, 0, 0, 0)"),await n(c.color).toBe(l(t.color.button.outlined)),await n(c.borderRadius).toBe(`${t.value.button.radius}px`),await n(c.border).toBe(`1px solid ${l(t.color.button.outlined)}`)})}},d={parameters:{docs:{description:{story:'텍스트형 버튼은 주로 덜 중요한 액션을 위해 사용됩니다. 기본과 Outlined 버튼보다 덜 눈에 띄게 디자인되며, 보통 추가적인 옵션을 제공하는 버튼입니다. 예를 들어, "더 보기" 또는 "옵션 설정" 같은 부가적인 기능을 담습니다.'}}},args:{children:"Text Button",text:"true"},play:async({canvasElement:s,step:o,args:a})=>{const r=p(s);await o("버튼 렌더링 확인",async()=>{const e=r.getByRole("button",{name:a.children});await n(e).toBeInTheDocument()}),await o("버튼 텍스트 확인",async()=>{const e=r.getByRole("button",{name:a.children});await n(e).toHaveTextContent("Text Button")}),await o("버튼 클릭 가능 여부 확인",async()=>{const e=r.getByRole("button",{name:a.children});await n(e).toBeEnabled()}),await o("버튼 스타일 확인",async()=>{const e=r.getByRole("button",{name:a.children}),c=window.getComputedStyle(e);await n(c.backgroundColor).toBe("rgba(0, 0, 0, 0)"),await n(c.color).toBe(l(t.color.button.text)),await n(c.border).toBe("0px none rgb(102, 119, 255)"),await n(c.borderRadius).toBe(`${t.value.button.radius}px`)})}},b={parameters:{docs:{description:{story:"비활성화된 버튼은 사용자가 클릭할 수 없는 버튼으로, 버튼 내부에 텍스트만 표시됩니다."}}},args:{children:"Disabled Button",disabled:!0},play:async({canvasElement:s,step:o,args:a})=>{const r=p(s);await o("버튼 렌더링 확인",async()=>{const e=r.getByRole("button",{name:a.children});await n(e).toBeInTheDocument()}),await o("버튼 텍스트 확인",async()=>{const e=r.getByRole("button",{name:a.children});await n(e).toHaveTextContent("Disabled Button")}),await o("버튼 클릭 가능 여부 확인",async()=>{const e=r.getByRole("button",{name:a.children});await n(e).toBeDisabled()}),await o("버튼 스타일 확인",async()=>{const e=r.getByRole("button",{name:a.children}),c=window.getComputedStyle(e);await n(c.backgroundColor).toBe(l(t.color.button.disabled)),await n(c.color).toBe(l(t.color.text.disabled)),await n(c.borderRadius).toBe(`${t.value.button.radius}px`)})}};var y,m,g;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '기본 버튼은 사용자의 다음 행동을 유발하는 주요 액션을 나타내며, UI에서 가장 두드러지게 디자인됩니다. 사용자가 가장 많이 클릭해야 하는 버튼입니다. 예를 들어, "저장"이나 "제출" 같은 기능을 담고 있습니다. 다른 이름으로는 Call to Action (CTA) 버튼으로 부를 수 있습니다.'
      }
    }
  },
  args: {
    children: 'Basic Button'
  },
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const canvas = within(canvasElement);
    await step('버튼 렌더링 확인', async () => {
      const button = canvas.getByRole('button', {
        name: args.children as string
      });
      await expect(button).toBeInTheDocument();
    });
    await step('버튼 텍스트 확인', async () => {
      const button = canvas.getByRole('button', {
        name: args.children as string
      });
      await expect(button).toHaveTextContent('Basic Button');
    });
    await step('버튼 클릭 가능 여부 확인', async () => {
      const button = canvas.getByRole('button', {
        name: args.children as string
      });
      await expect(button).toBeEnabled();
    });
    await step('Button 클릭', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: args.children as string
      }));
      await expect(args.onClick).toHaveBeenCalled();
    });
    await step('버튼 스타일 확인', async () => {
      const button = canvas.getByRole('button', {
        name: args.children as string
      });
      const styles = window.getComputedStyle(button);
      await expect(styles.backgroundColor).not.toBe(bds.color.button.base);
      await expect(styles.color).toBe(getCodeToRgb(bds.color.text.base));
      await expect(styles.borderRadius).toBe(\`\${bds.value.button.radius}px\`);
    });
  }
}`,...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var B,w,x;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '아웃라인 버튼은 부차적인 액션을 위한 버튼으로, 기본 버튼보다는 덜 강조되지만 여전히 중요합니다. 예를 들어, "취소"나 "돌아가기"와 같은 기능을 수행합니다.'
      }
    }
  },
  args: {
    children: 'Outlined Button',
    outlined: 'true'
  },
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const canvas = within(canvasElement);
    await step('버튼 렌더링 확인', async () => {
      const button = canvas.getByRole('button', {
        name: args.children as string
      });
      await expect(button).toBeInTheDocument();
    });
    await step('버튼 텍스트 확인', async () => {
      const button = canvas.getByRole('button', {
        name: args.children as string
      });
      await expect(button).toHaveTextContent('Outlined Button');
    });
    await step('버튼 클릭 가능 여부 확인', async () => {
      const button = canvas.getByRole('button', {
        name: args.children as string
      });
      await expect(button).toBeEnabled();
    });
    await step('버튼 스타일 확인', async () => {
      const button = canvas.getByRole('button', {
        name: args.children as string
      });
      const styles = window.getComputedStyle(button);
      await expect(styles.backgroundColor).toBe(\`rgba(0, 0, 0, 0)\`);
      await expect(styles.color).toBe(getCodeToRgb(bds.color.button.outlined));
      await expect(styles.borderRadius).toBe(\`\${bds.value.button.radius}px\`);
      await expect(styles.border).toBe(\`1px solid \${getCodeToRgb(bds.color.button.outlined)}\`);
    });
  }
}`,...(x=(w=u.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var h,v,R;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '텍스트형 버튼은 주로 덜 중요한 액션을 위해 사용됩니다. 기본과 Outlined 버튼보다 덜 눈에 띄게 디자인되며, 보통 추가적인 옵션을 제공하는 버튼입니다. 예를 들어, "더 보기" 또는 "옵션 설정" 같은 부가적인 기능을 담습니다.'
      }
    }
  },
  args: {
    children: 'Text Button',
    text: 'true'
  },
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const canvas = within(canvasElement);
    await step('버튼 렌더링 확인', async () => {
      const button = canvas.getByRole('button', {
        name: args.children as string
      });
      await expect(button).toBeInTheDocument();
    });
    await step('버튼 텍스트 확인', async () => {
      const button = canvas.getByRole('button', {
        name: args.children as string
      });
      await expect(button).toHaveTextContent('Text Button');
    });
    await step('버튼 클릭 가능 여부 확인', async () => {
      const button = canvas.getByRole('button', {
        name: args.children as string
      });
      await expect(button).toBeEnabled();
    });
    await step('버튼 스타일 확인', async () => {
      const button = canvas.getByRole('button', {
        name: args.children as string
      });
      const styles = window.getComputedStyle(button);
      await expect(styles.backgroundColor).toBe(\`rgba(0, 0, 0, 0)\`);
      await expect(styles.color).toBe(getCodeToRgb(bds.color.button.text));
      await expect(styles.border).toBe(\`0px none rgb(102, 119, 255)\`);
      await expect(styles.borderRadius).toBe(\`\${bds.value.button.radius}px\`);
    });
  }
}`,...(R=(v=d.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var f,C,T;b.parameters={...b.parameters,docs:{...(f=b.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '비활성화된 버튼은 사용자가 클릭할 수 없는 버튼으로, 버튼 내부에 텍스트만 표시됩니다.'
      }
    }
  },
  args: {
    children: 'Disabled Button',
    disabled: true
  },
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const canvas = within(canvasElement);
    await step('버튼 렌더링 확인', async () => {
      const button = canvas.getByRole('button', {
        name: args.children as string
      });
      await expect(button).toBeInTheDocument();
    });
    await step('버튼 텍스트 확인', async () => {
      const button = canvas.getByRole('button', {
        name: args.children as string
      });
      await expect(button).toHaveTextContent('Disabled Button');
    });
    await step('버튼 클릭 가능 여부 확인', async () => {
      const button = canvas.getByRole('button', {
        name: args.children as string
      });
      await expect(button).toBeDisabled();
    });
    await step('버튼 스타일 확인', async () => {
      const button = canvas.getByRole('button', {
        name: args.children as string
      });
      const styles = window.getComputedStyle(button);
      await expect(styles.backgroundColor).toBe(getCodeToRgb(bds.color.button.disabled));
      await expect(styles.color).toBe(getCodeToRgb(bds.color.text.disabled));
      await expect(styles.borderRadius).toBe(\`\${bds.value.button.radius}px\`);
    });
  }
}`,...(T=(C=b.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const M=["Basic","Outlined","Text","Disabled"];export{i as Basic,b as Disabled,u as Outlined,d as Text,M as __namedExportsOrder,_ as default};
