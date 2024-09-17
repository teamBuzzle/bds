import{j as c}from"./jsx-runtime-BlAj40OV.js";import{w as d,e}from"./index-DcZGqPg1.js";import"./Button-Dm__XzTB.js";import{B as r}from"./Box-Cy5sVEm_.js";import{S as m,D as v}from"./Divider-C_jp13If.js";import{b as u}from"./index-DpFthwfH.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./buildProps-CDH3mL-T.js";const C={title:"Atoms/Stack",component:m,parameters:{layout:"centered",docs:{description:{component:"기본 박스 컴포넌트, 레이아웃을 구성하는 기본 단위입니다."}}},tags:["autodocs"],argTypes:{as:{description:"Polymorphic 컴포넌트, 기본 태그를 변경할 수 있습니다.",table:{type:{summary:"keyof JSX.IntrinsicElements | React.ComponentType"},defaultValue:{summary:"div"}},options:["div","button","a","form"],control:{type:"select"}},children:{description:"박스 내부에 들어갈 요소",table:{type:{summary:"string | React.ReactNode"}}},direction:{description:"스택 방향",table:{defaultValue:{summary:"column"},type:{summary:"row | column"}},control:{type:"radio",options:["row","column"],defaultValue:"column"}},gap:{description:"스택 간격",table:{defaultValue:{summary:"small"},type:{summary:"xxLarge | xLarge | large | medium | small | xSmall | xxSmall"}},options:["xxLarge","xLarge","large","medium","small","xSmall","xxSmall"],control:{type:"select",defaultValue:"small"}},align:{description:"스택 정렬(세로)",table:{defaultValue:{summary:"start"},type:{summary:"start | center | end"}},options:["start","center","end"],control:{type:"select"}},justify:{description:"스택 정렬(가로)",table:{defaultValue:{summary:"start"},type:{summary:"start | center | end"}},options:["start","center","end"],control:{type:"select"}},divider:{description:"스택 내부 구분자",table:{defaultValue:{summary:"null"},type:{summary:"ReactNode"}},control:!1}}},i={parameters:{docs:{description:{story:"세로로 요소를 배치합니다."}}},render(o){return c.jsxs(m,{...o,children:[c.jsx(r,{useBlack:!0,fullWidth:!0,children:"Top"}),c.jsx(r,{useBlack:!0,fullWidth:!0,children:"Bottom"})]})},args:{direction:"column"},play:async({canvasElement:o,step:s})=>{const a=d(o);await s("Stack 기능 테스트",async()=>{const n=a.getByText("Top"),t=a.getByText("Bottom");await e(n).toBeInTheDocument(),await e(t).toBeInTheDocument()}),await s("Stack 스타일 테스트",async()=>{const n=a.getByText("Top"),t=window.getComputedStyle(n.parentElement);await e(t.display).toBe("flex"),await e(t.flexDirection).toBe("column"),await e(t.gap).toBe(`${u.value.box.spacing}px`)})}},l={parameters:{docs:{description:{story:"가로로 요소를 배치합니다."}}},render(o){return c.jsxs(m,{...o,children:[c.jsx(r,{useBlack:!0,children:"Left"}),c.jsx(r,{useBlack:!0,children:"Right"})]})},args:{direction:"row"},play:async({canvasElement:o,step:s})=>{const a=d(o);await s("Stack 기능 테스트",async()=>{const n=a.getByText("Left"),t=a.getByText("Right");await e(n).toBeInTheDocument(),await e(t).toBeInTheDocument()}),await s("Stack 스타일 테스트",async()=>{const n=a.getByText("Left"),t=window.getComputedStyle(n.parentElement);await e(t.display).toBe("flex"),await e(t.flexDirection).toBe("row"),await e(t.gap).toBe(`${u.value.box.spacing}px`)})}},p={parameters:{docs:{description:{story:"스택 내부 구분자를 추가할 수 있습니다. 구분자는 스택 내부 요소를 구분하는 역할을 합니다."}}},render(o){return c.jsxs(m,{...o,children:[c.jsx(r,{useBlack:!0,fullWidth:!0,children:"Top"}),c.jsx(r,{useBlack:!0,fullWidth:!0,children:"Bottom"})]})},args:{divider:c.jsx(v,{}),direction:"column"},play:async({canvasElement:o,step:s})=>{const a=d(o);await s("Stack 기능 테스트",async()=>{const n=a.getByText("Top"),t=a.getByText("Bottom");await e(n).toBeInTheDocument(),await e(t).toBeInTheDocument()}),await s("Stack 스타일 테스트",async()=>{const n=a.getByText("Top"),t=window.getComputedStyle(n.parentElement);await e(t.display).toBe("flex"),await e(t.flexDirection).toBe("column"),await e(t.gap).toBe(`${u.value.box.spacing}px`)}),await s("Divider 스타일 테스트",async()=>{const n=a.getByRole("separator");await e(n).toBeInTheDocument()})}};var x,B,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '세로로 요소를 배치합니다.'
      }
    }
  },
  render(args) {
    return <Stack {...args}>
                <Box useBlack fullWidth>
                    Top
                </Box>
                <Box useBlack fullWidth>
                    Bottom
                </Box>
            </Stack>;
  },
  args: {
    direction: 'column'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);

    // Stack 기능 테스트
    await step('Stack 기능 테스트', async () => {
      const topBox = canvas.getByText('Top');
      const bottomBox = canvas.getByText('Bottom');
      await expect(topBox).toBeInTheDocument();
      await expect(bottomBox).toBeInTheDocument();
    });

    // Stack 스타일 테스트
    await step('Stack 스타일 테스트', async () => {
      const topBox = canvas.getByText('Top');
      const computedStyle = window.getComputedStyle(topBox.parentElement as Element);
      await expect(computedStyle.display).toBe('flex');
      await expect(computedStyle.flexDirection).toBe('column');
      await expect(computedStyle.gap).toBe(\`\${bds.value.box.spacing}px\`);
    });
  }
}`,...(y=(B=i.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var g,w,S;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '가로로 요소를 배치합니다.'
      }
    }
  },
  render(args) {
    return <Stack {...args}>
                <Box useBlack>Left</Box>
                <Box useBlack>Right</Box>
            </Stack>;
  },
  args: {
    direction: 'row'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);

    // Stack 기능 테스트
    await step('Stack 기능 테스트', async () => {
      const leftBox = canvas.getByText('Left');
      const rightBox = canvas.getByText('Right');
      await expect(leftBox).toBeInTheDocument();
      await expect(rightBox).toBeInTheDocument();
    });

    // Stack 스타일 테스트
    await step('Stack 스타일 테스트', async () => {
      const leftBox = canvas.getByText('Left');
      const computedStyle = window.getComputedStyle(leftBox.parentElement as Element);
      await expect(computedStyle.display).toBe('flex');
      await expect(computedStyle.flexDirection).toBe('row');
      await expect(computedStyle.gap).toBe(\`\${bds.value.box.spacing}px\`);
    });
  }
}`,...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var f,h,T;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '스택 내부 구분자를 추가할 수 있습니다. 구분자는 스택 내부 요소를 구분하는 역할을 합니다.'
      }
    }
  },
  render(args) {
    return <Stack {...args}>
                <Box useBlack fullWidth>
                    Top
                </Box>
                <Box useBlack fullWidth>
                    Bottom
                </Box>
            </Stack>;
  },
  args: {
    divider: <Divider />,
    direction: 'column'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);

    // Stack 기능 테스트
    await step('Stack 기능 테스트', async () => {
      const topBox = canvas.getByText('Top');
      const bottomBox = canvas.getByText('Bottom');
      await expect(topBox).toBeInTheDocument();
      await expect(bottomBox).toBeInTheDocument();
    });

    // Stack 스타일 테스트
    await step('Stack 스타일 테스트', async () => {
      const topBox = canvas.getByText('Top');
      const computedStyle = window.getComputedStyle(topBox.parentElement as Element);
      await expect(computedStyle.display).toBe('flex');
      await expect(computedStyle.flexDirection).toBe('column');
      await expect(computedStyle.gap).toBe(\`\${bds.value.box.spacing}px\`);
    });

    // Divider 스타일 테스트
    await step('Divider 스타일 테스트', async () => {
      const divider = canvas.getByRole('separator');
      await expect(divider).toBeInTheDocument();
    });
  }
}`,...(T=(h=p.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};const V=["Column","Row","DividerWithStack"];export{i as Column,p as DividerWithStack,l as Row,V as __namedExportsOrder,C as default};
