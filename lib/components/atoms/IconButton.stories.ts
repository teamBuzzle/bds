import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

const meta = {
	title: 'Atoms/IconButton',
	component: IconButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
	args: {
		children: '메뉴',
		onClick: () => alert('클릭'),
	},
};

export const Disabled: Story = {
	args: {
		children: '메뉴',
		disabled: true,
	},
};
