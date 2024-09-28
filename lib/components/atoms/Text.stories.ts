import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

/* 메타 */
const meta = {
	title: 'Atoms/Text',
	component: Text,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: '텍스트 컴포넌트, 텍스트를 표시하는 컴포넌트입니다.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		as: {
			description: 'Polymorphic 컴포넌트, 기본 태그를 변경할 수 있습니다.',
			table: {
				type: { summary: 'keyof JSX.IntrinsicElements | React.ComponentType' },
				defaultValue: { summary: 'div' },
			},
			options: ['div', 'button', 'a', 'form'],
			control: {
				type: 'select',
			},
		},
		children: {
			description: '박스 내부에 들어갈 요소',
			table: {
				type: { summary: 'string | React.ReactNode' },
			},
			control: {
				type: 'text',
				defaultValue: 'Button',
			},
		},
		css: {
			description: '박스에 적용할 추가적인 CSS 스타일',
			table: {
				type: { summary: 'StyledObject' },
			},
			control: {
				type: 'object',
			},
		},
		small: {
			description: '작은 텍스트로 렌더링합니다.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
	},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

/* 스토리 */
export const Basic: Story = {
	parameters: {
		docs: {
			description: {
				story: '기본 텍스트를 표시합니다.',
			},
		},
	},
	args: {
		children: 'Basic Text',
	},
};

export const Small: Story = {
	parameters: {
		docs: {
			description: {
				story: '작은 텍스트를 표시합니다.',
			},
		},
	},
	args: {
		children: 'Small Text',
		small: true,
	},
};
