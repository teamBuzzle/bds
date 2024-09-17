import{w as x,e as a,f as B,u as w}from"./index-DcZGqPg1.js";import{j as h}from"./jsx-runtime-BlAj40OV.js";import{d as v,b as f,g as T}from"./color-C5ytXC0q.js";import{b as o}from"./index-IyPaAEXY.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const k=v.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: ${({$full:t})=>t?"100%":"auto"};
	height: ${({$full:t})=>t?"100%":"auto"};
	gap: ${o.value.box.spacing}px;
	padding: ${o.value.box.padding}px;
	border-radius: ${o.value.box.radius}px;
	color: ${o.color.text.base};
	background-color: ${({$background:t})=>t?o.color.background.base:o.color.background.elevated};
`,g=({children:t,...n})=>h.jsx(k,{...f(n),children:t});g.__docgenInfo={description:"",methods:[],displayName:"Box",props:{background:{required:!1,tsType:{name:"Bool"},description:""},full:{required:!1,tsType:{name:"Bool"},description:""},as:{required:!1,tsType:{name:"union",raw:"keyof JSX.IntrinsicElements | ComponentType",elements:[{name:"JSX.IntrinsicElements"},{name:"ComponentType"}]},description:""}},composes:["HTMLAttributes","PropsWithChildren"]};const H={title:"Atoms/Box",component:g,parameters:{layout:"centered",docs:{description:{component:"기본 박스 컴포넌트, 레이아웃을 구성하는 기본 단위입니다."}}},tags:["autodocs"],argTypes:{as:{description:"Polymorphic 컴포넌트, 기본 태그를 변경할 수 있습니다.",table:{type:{summary:"keyof JSX.IntrinsicElements | React.ComponentType"},defaultValue:{summary:"div"}},control:{type:"select"}},children:{description:"박스 내부에 들어갈 요소",table:{type:{summary:"string | React.ReactNode"}},control:{type:"text",defaultValue:"Button"}},full:{description:"박스 너비를 화면 너비로 설정",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},background:{description:"배경용 박스 색상 설정",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}}},args:{children:"Basic Box",background:!0}},i={parameters:{docs:{description:{story:'텍스트형 버튼은 주로 덜 중요한 액션을 위해 사용됩니다. 기본과 Outlined 버튼보다 덜 눈에 띄게 디자인되며, 보통 추가적인 옵션을 제공하는 버튼입니다. 예를 들어, "더 보기" 또는 "옵션 설정" 같은 부가적인 기능을 담습니다.'}}},args:{children:"Basic Box"},play:async({canvasElement:t,step:n,args:s})=>{const c=x(t);await n("박스 렌더링 확인",async()=>{const e=c.getByText(s.children);await a(e).toBeInTheDocument()}),await n("박스 텍스트 확인",async()=>{const e=c.getByText(s.children);await a(e).toHaveTextContent("Basic Box")}),await n("박스 스타일 확인",async()=>{const e=c.getByText(s.children),r=window.getComputedStyle(e);await a(r.backgroundColor).toBe(T(o.color.background.base)),await a(r.borderRadius).toBe(`${o.value.box.radius}px`),await a(r.padding).toBe(`${o.value.box.padding}px`),await a(r.gap).toBe(`${o.value.box.spacing}px`)})}},l={parameters:{docs:{description:{story:"Box 컴포넌트를 다른 태그로 렌더링할 수 있습니다."}}},args:{children:"Button as Box",as:"button",background:!1,onClick:B()},play:async({canvasElement:t,step:n,args:s})=>{const c=x(t);await n("버튼 렌더링 확인",async()=>{const e=c.getByRole("button",{name:s.children});await a(e).toBeInTheDocument()}),await n("버튼 텍스트 확인",async()=>{const e=c.getByRole("button",{name:s.children});await a(e).toHaveTextContent("Button as Box")}),await n("버튼 클릭 가능 여부 확인",async()=>{const e=c.getByRole("button",{name:s.children});await a(e).toBeEnabled()}),await n("Button 클릭",async()=>{await w.click(c.getByRole("button",{name:s.children})),await a(s.onClick).toHaveBeenCalled()})}};var d,p,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '텍스트형 버튼은 주로 덜 중요한 액션을 위해 사용됩니다. 기본과 Outlined 버튼보다 덜 눈에 띄게 디자인되며, 보통 추가적인 옵션을 제공하는 버튼입니다. 예를 들어, "더 보기" 또는 "옵션 설정" 같은 부가적인 기능을 담습니다.'
      }
    }
  },
  args: {
    children: 'Basic Box'
  },
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const canvas = within(canvasElement);
    await step('박스 렌더링 확인', async () => {
      const box = canvas.getByText(args.children as string);
      await expect(box).toBeInTheDocument();
    });
    await step('박스 텍스트 확인', async () => {
      const box = canvas.getByText(args.children as string);
      await expect(box).toHaveTextContent('Basic Box');
    });
    await step('박스 스타일 확인', async () => {
      const box = canvas.getByText(args.children as string);
      const styles = window.getComputedStyle(box);
      await expect(styles.backgroundColor).toBe(getCodeToRgb(bds.color.background.base));
      await expect(styles.borderRadius).toBe(\`\${bds.value.box.radius}px\`);
      await expect(styles.padding).toBe(\`\${bds.value.box.padding}px\`);
      await expect(styles.gap).toBe(\`\${bds.value.box.spacing}px\`);
    });
  }
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,b,y;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Box 컴포넌트를 다른 태그로 렌더링할 수 있습니다.'
      }
    }
  },
  args: {
    children: 'Button as Box',
    as: 'button',
    background: false,
    onClick: fn()
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
      await expect(button).toHaveTextContent('Button as Box');
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
  }
}`,...(y=(b=l.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const A=["Basic","As"];export{l as As,i as Basic,A as __namedExportsOrder,H as default};