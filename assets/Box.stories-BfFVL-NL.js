import{w as B,e as a,f as x,u as g}from"./index-DcZGqPg1.js";import{B as w}from"./Box-Cy5sVEm_.js";import{b as c}from"./index-DpFthwfH.js";import{g as v}from"./color-Xy7DcXOu.js";import"./jsx-runtime-BlAj40OV.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./buildProps-CDH3mL-T.js";const H={title:"Atoms/Box",component:w,parameters:{layout:"centered",docs:{description:{component:"기본 박스 컴포넌트, 레이아웃을 구성하는 기본 단위입니다."}}},tags:["autodocs"],argTypes:{as:{description:"Polymorphic 컴포넌트, 기본 태그를 변경할 수 있습니다.",table:{type:{summary:"keyof JSX.IntrinsicElements | React.ComponentType"},defaultValue:{summary:"div"}},options:["div","button","a","form"],control:{type:"select"}},children:{description:"박스 내부에 들어갈 요소",table:{type:{summary:"string | React.ReactNode"}},control:{type:"text",defaultValue:"Button"}},fullWidth:{description:"박스 너비를 화면 너비로 설정",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},fullHeight:{description:"박스 높이를 화면 높이로 설정",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},useBlack:{description:"배경용 박스 색상 설정",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},css:{description:"박스에 적용할 추가적인 CSS 스타일",table:{type:{summary:"StyledObject"}},control:{type:"object"}}},args:{children:"Box",useBlack:"true"}},r={parameters:{docs:{description:{story:'텍스트형 버튼은 주로 덜 중요한 액션을 위해 사용됩니다. 기본과 Outlined 버튼보다 덜 눈에 띄게 디자인되며, 보통 추가적인 옵션을 제공하는 버튼입니다. 예를 들어, "더 보기" 또는 "옵션 설정" 같은 부가적인 기능을 담습니다.'}}},args:{children:"Basic Box"},play:async({canvasElement:l,step:e,args:n})=>{const o=B(l);await e("박스 렌더링 확인",async()=>{const t=o.getByText(n.children);await a(t).toBeInTheDocument()}),await e("박스 텍스트 확인",async()=>{const t=o.getByText(n.children);await a(t).toHaveTextContent("Basic Box")}),await e("박스 스타일 확인",async()=>{const t=o.getByText(n.children),s=window.getComputedStyle(t);await a(s.backgroundColor).toBe(v(c.color.background.base)),await a(s.borderRadius).toBe(`${c.value.box.radius}px`),await a(s.padding).toBe(`${c.value.box.padding}px`),await a(s.gap).toBe(`${c.value.box.spacing}px`)})}},i={parameters:{docs:{description:{story:"Box 컴포넌트를 다른 태그로 렌더링할 수 있습니다."}}},args:{children:"Button as Box",as:"button",useBlack:"false",onClick:x()},play:async({canvasElement:l,step:e,args:n})=>{const o=B(l);await e("버튼 렌더링 확인",async()=>{const t=o.getByRole("button",{name:n.children});await a(t).toBeInTheDocument()}),await e("버튼 텍스트 확인",async()=>{const t=o.getByRole("button",{name:n.children});await a(t).toHaveTextContent("Button as Box")}),await e("버튼 클릭 가능 여부 확인",async()=>{const t=o.getByRole("button",{name:n.children});await a(t).toBeEnabled()}),await e("Button 클릭",async()=>{await g.click(o.getByRole("button",{name:n.children})),await a(n.onClick).toHaveBeenCalled()})}};var d,p,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var y,m,b;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
    useBlack: 'false',
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
}`,...(b=(m=i.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const $=["Basic","As"];export{i as As,r as Basic,$ as __namedExportsOrder,H as default};
