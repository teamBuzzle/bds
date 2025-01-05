import { IconButton } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Atoms/IconButton',
	component: IconButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		children: {
			description: '아이콘 버튼의 내용',
			control: 'text',
			defaultValue: '메뉴',
		},
		disabled: {
			description: '비활성화 여부',
			control: 'boolean',
			defaultValue: false,
		},
		onClick: {
			description: '클릭 이벤트 핸들러',
			action: 'clicked',
		},
	},
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
	args: {
		children: '메뉴',
		// eslint-disable-next-line no-alert
		onClick: () => alert('클릭'),
	},
};

export const Disabled: Story = {
	args: {
		children: '메뉴',
		disabled: true,
	},
};
