import type { Meta, StoryObj } from '@storybook/react';
import { CommentInput } from './CommentInput';

const meta = {
	title: 'Molecules/CommentInput',
	component: CommentInput,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark',
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof CommentInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		onSubmit: (content) => alert(`입력된 내용: ${content}`),
	},
};
