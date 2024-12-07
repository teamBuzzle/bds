import type { Meta, StoryObj } from '@storybook/react';
import { MenuItem } from './MenuItem';

const meta = {
	title: 'Molecules/MenuItem',
	component: MenuItem,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: '메뉴 아이템',
		onClick: () => alert('클릭'),
	},
};

export const Selected: Story = {
	args: {
		children: '선택된 메뉴',
		selected: true,
	},
};
