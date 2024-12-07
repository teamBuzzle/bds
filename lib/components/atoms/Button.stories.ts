import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { BDSProvider } from '../Provider';
import React from 'react';

const meta = {
	title: 'Atoms/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	decorators: [(Story) => React.createElement(BDSProvider, null, React.createElement(Story))],
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
