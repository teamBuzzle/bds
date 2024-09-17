import{j as e}from"./jsx-runtime-BlAj40OV.js";import{w as B,e as s}from"./index-DcZGqPg1.js";import"./Button-Dm__XzTB.js";import{B as c}from"./Box-Cy5sVEm_.js";import{D as l,S as h}from"./Divider-C_jp13If.js";import{b as w}from"./index-DpFthwfH.js";import{g as x}from"./color-Xy7DcXOu.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./buildProps-CDH3mL-T.js";const z={title:"Atoms/Divider",component:l,parameters:{layout:"centered",docs:{description:{component:"구분선 컴포넌트, 레이아웃을 구분하는 용도로 사용합니다."}}},tags:["autodocs"],argTypes:{direction:{description:"구분선 방향",table:{defaultValue:{summary:"horizontal"},type:{summary:"horizontal | vertical"}},options:["horizontal","vertical"],control:{type:"radio"}}}},i={parameters:{docs:{description:{story:"가로로 구분선을 표시합니다."}}},render(t){return e.jsxs(h,{divider:e.jsx(l,{...t}),children:[e.jsx(c,{useBlack:!0,fullWidth:!0,children:"Top"}),e.jsx(c,{useBlack:!0,fullWidth:!0,children:"Bottom"})]})},args:{direction:"horizontal"},play:async({canvasElement:t,step:r})=>{const a=B(t);await r("Divider 기능 테스트",async()=>{const o=a.getByRole("separator");await s(o).toBeInTheDocument()}),await r("Divider 스타일 테스트",async()=>{const o=a.getByRole("separator"),d=window.getComputedStyle(o);s(d.backgroundColor).toBe(x(w.color.line.base))})}},n={parameters:{docs:{description:{story:"세로로 구분선을 표시합니다."}}},render(t){return e.jsxs(h,{direction:"row",divider:e.jsx(l,{...t}),children:[e.jsx(c,{useBlack:!0,fullWidth:!0,children:"Left"}),e.jsx(c,{useBlack:!0,fullWidth:!0,children:"Right"})]})},args:{direction:"vertical"},play:async({canvasElement:t,step:r})=>{const a=B(t);await r("Divider 기능 테스트",async()=>{const o=a.getByRole("separator");await s(o).toBeInTheDocument()}),await r("Divider 스타일 테스트",async()=>{const o=a.getByRole("separator"),d=window.getComputedStyle(o);s(d.backgroundColor).toBe(x(w.color.line.base))})}};var p,u,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '가로로 구분선을 표시합니다.'
      }
    }
  },
  render(args) {
    return <Stack divider={<Divider {...args} />}>
                <Box useBlack fullWidth>
                    Top
                </Box>
                <Box useBlack fullWidth>
                    Bottom
                </Box>
            </Stack>;
  },
  args: {
    direction: 'horizontal'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Divider 기능 테스트', async () => {
      const divider = canvas.getByRole('separator');
      await expect(divider).toBeInTheDocument();
    });
    await step('Divider 스타일 테스트', async () => {
      const divider = canvas.getByRole('separator');
      const computedStyle = window.getComputedStyle(divider);
      expect(computedStyle.backgroundColor).toBe(getCodeToRgb(bds.color.line.base));
    });
  }
}`,...(m=(u=i.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var v,y,g;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '세로로 구분선을 표시합니다.'
      }
    }
  },
  render(args) {
    return <Stack direction="row" divider={<Divider {...args} />}>
                <Box useBlack fullWidth>
                    Left
                </Box>
                <Box useBlack fullWidth>
                    Right
                </Box>
            </Stack>;
  },
  args: {
    direction: 'vertical'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Divider 기능 테스트', async () => {
      const divider = canvas.getByRole('separator');
      await expect(divider).toBeInTheDocument();
    });
    await step('Divider 스타일 테스트', async () => {
      const divider = canvas.getByRole('separator');
      const computedStyle = window.getComputedStyle(divider);
      expect(computedStyle.backgroundColor).toBe(getCodeToRgb(bds.color.line.base));
    });
  }
}`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const E=["Horizontal","Vertical"];export{i as Horizontal,n as Vertical,E as __namedExportsOrder,z as default};
