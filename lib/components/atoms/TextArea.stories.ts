import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta = {
	title: 'Atoms/TextArea',
	component: TextArea,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: '내용을 입력해주세요',
		rows: 4,
	},
};

export const WithMaxLength: Story = {
	args: {
		placeholder: '최대 100자까지 입력 가능합니다',
		rows: 4,
		maxLength: 100,
	},
};
