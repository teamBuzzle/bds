import { Button } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: '컴포넌트/Atoms/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			description: '버튼의 스타일 변형',
			control: 'select',
			options: ['contained', 'outlined'],
			defaultValue: 'contained',
		},
		size: {
			description: '버튼의 크기',
			control: 'select',
			options: ['small', 'medium', 'large'],
			defaultValue: 'medium',
		},
		children: {
			description: '버튼의 텍스트',
			control: 'text',
			defaultValue: '버튼',
		},
		fullWidth: {
			description: '전체 너비 적용 여부',
			control: 'boolean',
			defaultValue: false,
		},
		disabled: {
			description: '비활성화 여부',
			control: 'boolean',
			defaultValue: false,
		},
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: 'contained',
		children: '버튼',
		sx: { width: '200px' },
	},
};

export const Secondary: Story = {
	args: {
		variant: 'outlined',
		children: '버튼',
		sx: { width: '200px' },
	},
};

export const FullWidth: Story = {
	args: {
		variant: 'contained',
		children: '버튼',
		fullWidth: true,
	},
};

export const Small: Story = {
	args: {
		variant: 'outlined',
		children: '등록',
		size: 'small',
	},
};

export const Large: Story = {
	args: {
		variant: 'contained',
		children: '페이지로 이동하기',
		size: 'large',
	},
};
