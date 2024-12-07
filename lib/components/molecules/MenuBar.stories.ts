import type { Meta, StoryObj } from '@storybook/react';
import { MenuBar } from './MenuBar';

const meta = {
	title: 'Molecules/MenuBar',
	component: MenuBar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof MenuBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
	{ label: '주요기능', href: '/feature' },
	{ label: '템플릿', href: '/template' },
	{ label: '요금', href: '/price' },
	{ label: '고객센터', href: '/customer' },
];

export const Horizontal: Story = {
	args: {
		items,
	},
};

export const Vertical: Story = {
	args: {
		items,
		sx: {
			flexDirection: 'column',
			gap: 3,
		},
	},
};
