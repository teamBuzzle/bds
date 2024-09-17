import{f as E,w as y,e,u as D}from"./index-DcZGqPg1.js";import{B as k}from"./Button-Dm__XzTB.js";import{g as i}from"./color-Xy7DcXOu.js";import{b as c}from"./index-DpFthwfH.js";import"./jsx-runtime-BlAj40OV.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./buildProps-CDH3mL-T.js";const M={title:"Atoms/Button",component:k,parameters:{layout:"centered",docs:{description:{component:'BDS 기본 버튼 컴포넌트, 사용자의 다음 행동을 유발하는 주요 액션을 나타내며, UI에서 가장 두드러지게 디자인됩니다. 사용자가 가장 많이 클릭해야 하는 버튼입니다. 예를 들어, "저장"이나 "제출" 같은 기능을 담고 있습니다.'}}},tags:["autodocs"],argTypes:{children:{description:"버튼 내부에 들어갈 요소",table:{type:{summary:"string | React.ReactNode"}},control:{type:"text",defaultValue:"Button"}},fullWidth:{description:"버튼 너비를 화면 너비로 설정",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean",defaultValue:!1}},outlined:{description:"아웃라인 버튼 스타일",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},text:{description:"텍스트형 버튼 스타일",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean"}},align:{description:"버튼 정렬 설정",table:{defaultValue:{summary:"left"},type:{summary:"left | right | center"}},options:["left","right","center"],control:{type:"select"}},onClick:{description:"버튼 클릭 시 실행될 함수",table:{type:{summary:"React.MouseEventHandler<HTMLButtonElement>"}}},disabled:{description:"버튼 비활성화 여부",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean",defaultValue:!1}},dense:{description:"버튼을 밀집하게 표시할지 여부",table:{defaultValue:{summary:"false"},type:{summary:"boolean"}},control:{type:"boolean",defaultValue:!1}}},args:{children:"Button",onClick:E()}},l={parameters:{docs:{description:{story:'기본 버튼은 사용자의 다음 행동을 유발하는 주요 액션을 나타내며, UI에서 가장 두드러지게 디자인됩니다. 사용자가 가장 많이 클릭해야 하는 버튼입니다. 예를 들어, "저장"이나 "제출" 같은 기능을 담고 있습니다. 다른 이름으로는 Call to Action (CTA) 버튼으로 부를 수 있습니다.'}}},args:{children:"Basic Button"},play:async({canvasElement:r,step:a,args:n})=>{const o=y(r);await a("버튼 렌더링 확인",async()=>{const t=o.getByRole("button",{name:n.children});await e(t).toBeInTheDocument()}),await a("버튼 텍스트 확인",async()=>{const t=o.getByRole("button",{name:n.children});await e(t).toHaveTextContent("Basic Button")}),await a("버튼 클릭 가능 여부 확인",async()=>{const t=o.getByRole("button",{name:n.children});await e(t).toBeEnabled()}),await a("Button 클릭",async()=>{await D.click(o.getByRole("button",{name:n.children})),await e(n.onClick).toHaveBeenCalled()}),await a("버튼 스타일 확인",async()=>{const t=o.getByRole("button",{name:n.children}),s=window.getComputedStyle(t);await e(s.backgroundColor).not.toBe(c.color.button.base),await e(s.color).toBe(i(c.color.text.base)),await e(s.borderRadius).toBe(`${c.value.button.radius}px`)})}},u={parameters:{docs:{description:{story:'아웃라인 버튼은 부차적인 액션을 위한 버튼으로, 기본 버튼보다는 덜 강조되지만 여전히 중요합니다. 예를 들어, "취소"나 "돌아가기"와 같은 기능을 수행합니다.'}}},args:{children:"Outlined Button",outlined:"true"},play:async({canvasElement:r,step:a,args:n})=>{const o=y(r);await a("버튼 렌더링 확인",async()=>{const t=o.getByRole("button",{name:n.children});await e(t).toBeInTheDocument()}),await a("버튼 텍스트 확인",async()=>{const t=o.getByRole("button",{name:n.children});await e(t).toHaveTextContent("Outlined Button")}),await a("버튼 클릭 가능 여부 확인",async()=>{const t=o.getByRole("button",{name:n.children});await e(t).toBeEnabled()}),await a("버튼 스타일 확인",async()=>{const t=o.getByRole("button",{name:n.children}),s=window.getComputedStyle(t);await e(s.backgroundColor).toBe("rgba(0, 0, 0, 0)"),await e(s.color).toBe(i(c.color.button.outlined)),await e(s.borderRadius).toBe(`${c.value.button.radius}px`),await e(s.border).toBe(`1px solid ${i(c.color.button.outlined)}`)})}},d={parameters:{docs:{description:{story:'텍스트형 버튼은 주로 덜 중요한 액션을 위해 사용됩니다. 기본과 Outlined 버튼보다 덜 눈에 띄게 디자인되며, 보통 추가적인 옵션을 제공하는 버튼입니다. 예를 들어, "더 보기" 또는 "옵션 설정" 같은 부가적인 기능을 담습니다.'}}},args:{children:"Text Button",text:"true"},play:async({canvasElement:r,step:a,args:n})=>{const o=y(r);await a("버튼 렌더링 확인",async()=>{const t=o.getByRole("button",{name:n.children});await e(t).toBeInTheDocument()}),await a("버튼 텍스트 확인",async()=>{const t=o.getByRole("button",{name:n.children});await e(t).toHaveTextContent("Text Button")}),await a("버튼 클릭 가능 여부 확인",async()=>{const t=o.getByRole("button",{name:n.children});await e(t).toBeEnabled()}),await a("버튼 스타일 확인",async()=>{const t=o.getByRole("button",{name:n.children}),s=window.getComputedStyle(t);await e(s.backgroundColor).toBe("rgba(0, 0, 0, 0)"),await e(s.color).toBe(i(c.color.button.text)),await e(s.border).toBe("0px none rgb(102, 119, 255)"),await e(s.borderRadius).toBe(`${c.value.button.radius}px`)})}},b={parameters:{docs:{description:{story:"비활성화된 버튼은 사용자가 클릭할 수 없는 버튼으로, 버튼 내부에 텍스트만 표시됩니다."}}},args:{children:"Disabled Button",disabled:!0},play:async({canvasElement:r,step:a,args:n})=>{const o=y(r);await a("버튼 렌더링 확인",async()=>{const t=o.getByRole("button",{name:n.children});await e(t).toBeInTheDocument()}),await a("버튼 텍스트 확인",async()=>{const t=o.getByRole("button",{name:n.children});await e(t).toHaveTextContent("Disabled Button")}),await a("버튼 클릭 가능 여부 확인",async()=>{const t=o.getByRole("button",{name:n.children});await e(t).toBeDisabled()}),await a("버튼 스타일 확인",async()=>{const t=o.getByRole("button",{name:n.children}),s=window.getComputedStyle(t);await e(s.backgroundColor).toBe(i(c.color.button.disabled)),await e(s.color).toBe(i(c.color.text.disabled)),await e(s.borderRadius).toBe(`${c.value.button.radius}px`)})}};var p,m,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(m=l.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var w,B,x;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(x=(B=u.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var h,v,R;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(R=(v=d.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var C,T,f;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(f=(T=b.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};const _=["Basic","Outlined","Text","Disabled"];export{l as Basic,b as Disabled,u as Outlined,d as Text,_ as __namedExportsOrder,M as default};
