import { bds } from '@/constants';
import { Text } from './Text';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Atoms/Text',
	component: Text,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: Object.keys(bds.token.typography.size),
			description: '텍스트 변형',
		},
		gradient: {
			control: 'boolean',
			description: '그라데이션 스타일',
		},
		fontWeight: {
			control: 'select',
			options: Object.keys(bds.token.typography.weight),
			description: '폰트 굵기',
		},
		fontSize: {
			control: 'select',
			options: Object.keys(bds.token.typography.size),
			description: '폰트 크기',
		},
		color: {
			control: 'select',
			options: Object.keys(bds.color.text),
			description: '텍스트 색상',
		},
		children: {
			control: 'text',
			description: '텍스트 내용',
		},
	},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: '기본 텍스트',
	},
};

export const Heading: Story = {
	args: {
		variant: 'h1',
		children: '제목',
	},
};

export const GradientText: Story = {
	args: {
		gradient: true,
		children: '그라데이션 텍스트',
	},
};
