import type { Meta, StoryObj } from '@storybook/react';
import { CommentBox } from './CommentBox';

const meta = {
	title: 'Molecules/CommentBox',
	component: CommentBox,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof CommentBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const formatDate = () => {
	const now = new Date();
	return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
};

export const Customer: Story = {
	args: {
		type: 'customer',
		author: '사용자',
		content: '문의 내용입니다.',
		date: formatDate(),
	},
};

export const Admin: Story = {
	args: {
		type: 'admin',
		content: '안녕하세요, 버즐 고객센터입니다.',
		date: formatDate(),
	},
};
