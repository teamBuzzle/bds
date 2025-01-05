import type { Meta, StoryObj } from '@storybook/react';
import { FaqItem } from './FaqItem';

const meta = {
	title: 'Molecules/FaqItem',
	component: FaqItem,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		title: {
			description: '자주 묻는 질문의 제목',
			control: 'text',
		},
		subtitle: {
			description: '자주 묻는 질문의 카테고리',
			control: 'text',
		},
		content: {
			description: '자주 묻는 질문의 답변 내용',
			control: 'text',
		},
		selected: {
			description: '아코디언 메뉴의 펼침 상태',
			control: 'boolean',
		},
	},
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
