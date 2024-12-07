import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta = {
	title: 'Atoms/Divider',
	component: Divider,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
	args: {
		sx: {
			width: '100px',
			margin: '20px 0',
		},
	},
};

export const Vertical: Story = {
	args: {
		orientation: 'vertical',
		flexItem: true,
		sx: {
			height: '50px',
			margin: '0 20px',
		},
	},
};
