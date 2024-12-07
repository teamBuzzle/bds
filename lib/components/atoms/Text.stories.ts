import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta = {
	title: 'Atoms/Text',
	component: Text,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
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
		gradient: 'primary',
		children: '그라데이션 텍스트',
	},
};
