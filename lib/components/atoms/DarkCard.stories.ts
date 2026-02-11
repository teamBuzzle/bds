import { DarkCard } from './DarkCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: '컴포넌트/Atoms/DarkCard',
	component: DarkCard,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark',
			values: [
				{ name: 'dark', value: '#141414' },
				{ name: 'light', value: '#ffffff' },
			],
		},
	},
	tags: ['autodocs'],
	argTypes: {
		radius: {
			description: '카드의 테두리 둥글기',
			control: 'text',
			defaultValue: '24px',
		},
		hoverable: {
			description: '호버 효과 적용 여부',
			control: 'boolean',
			defaultValue: true,
		},
		children: {
			description: '카드 내부 콘텐츠',
			control: 'text',
		},
	},
} satisfies Meta<typeof DarkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: '다크 카드 콘텐츠',
		sx: { p: 4, width: '300px', color: '#fff' },
	},
};

export const NoHover: Story = {
	args: {
		hoverable: false,
		children: '호버 효과 없는 카드',
		sx: { p: 4, width: '300px', color: '#fff' },
	},
};

export const SmallRadius: Story = {
	args: {
		radius: '8px',
		children: '작은 둥글기 카드',
		sx: { p: 4, width: '300px', color: '#fff' },
	},
};
