import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';
import { BDSProvider } from '../Provider';
import React from 'react';

const meta = {
	title: 'Atoms/Box',
	component: Box,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	decorators: [(Story) => React.createElement(BDSProvider, null, React.createElement(Story))],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: '기본 박스',
		sx: {
			width: '200px',
			height: '200px',
			bgcolor: '#f5f5f5',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	},
};

export const Rounded: Story = {
	args: {
		children: '둥근 모서리 박스',
		rounded: true,
		sx: {
			width: '200px',
			height: '200px',
			bgcolor: '#f5f5f5',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	},
};

export const Shadow: Story = {
	args: {
		children: '그림자 박스',
		shadow: true,
		sx: {
			width: '200px',
			height: '200px',
			bgcolor: '#f5f5f5',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	},
};

export const RoundedWithShadow: Story = {
	args: {
		children: '둥근 모서리와 그림자가 있는 박스',
		rounded: true,
		shadow: true,
		sx: {
			width: '200px',
			height: '200px',
			bgcolor: '#f5f5f5',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
	},
};
