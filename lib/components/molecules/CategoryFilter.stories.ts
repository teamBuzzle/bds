import { CategoryFilter } from './CategoryFilter';
import type { Meta, StoryObj } from '@storybook/react';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const handleChange = () => {};

const meta = {
	title: '컴포넌트/Molecules/CategoryFilter',
	component: CategoryFilter,
	args: {
		onChange: handleChange,
	},
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
		categories: {
			description: '카테고리 목록',
			control: 'object',
		},
		selected: {
			description: '현재 선택된 카테고리',
			control: 'text',
		},
		showAll: {
			description: "'전체' 옵션 포함 여부",
			control: 'boolean',
			defaultValue: true,
		},
		allLabel: {
			description: "'전체' 옵션의 라벨",
			control: 'text',
			defaultValue: '전체',
		},
		variant: {
			description: '색상 변형',
			control: 'select',
			options: ['dark', 'light'],
			defaultValue: 'dark',
		},
	},
} satisfies Meta<typeof CategoryFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
	args: {
		categories: ['서비스', '결제', '기술', '기타'],
		selected: 'all',
		variant: 'dark',
	},
};

export const DarkSelected: Story = {
	args: {
		categories: ['서비스', '결제', '기술', '기타'],
		selected: '서비스',
		variant: 'dark',
	},
};

export const Light: Story = {
	args: {
		categories: ['서비스', '결제', '기술', '기타'],
		selected: 'all',
		variant: 'light',
	},
};

export const WithoutAll: Story = {
	args: {
		categories: ['서비스', '결제', '기술', '기타'],
		selected: '서비스',
		showAll: false,
		variant: 'dark',
	},
};
