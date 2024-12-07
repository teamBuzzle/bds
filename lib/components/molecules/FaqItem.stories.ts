import type { Meta, StoryObj } from '@storybook/react';
import { FaqItem } from './FaqItem';
import { BDSProvider } from '../Provider';
import React from 'react';

const meta = {
	title: 'Molecules/FaqItem',
	component: FaqItem,
	decorators: [(Story) => React.createElement(BDSProvider, null, React.createElement(Story))],
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof FaqItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: '자주 묻는 질문입니다',
		subtitle: '일반',
		content: '자주 묻는 질문에 대한 답변입니다.',
	},
};

export const Selected: Story = {
	args: {
		title: '자주 묻는 질문입니다',
		subtitle: '일반',
		content: '자주 묻는 질문에 대한 답변입니다.',
		selected: true,
	},
};
