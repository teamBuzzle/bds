import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './NavBar';

const meta = {
	title: 'Molecules/NavBar',
	component: NavBar,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark',
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof NavBar>;

const items = [
	{ label: '주요기능', href: '/feature' },
	{ label: '템플릿', href: '/template' },
	{ label: '요금', href: '/price' },
	{ label: '고객센터', href: '/customer' },
];

export const Default: Story = {
	args: {
		items,
	},
};

export const WithClickHandler: Story = {
	args: {
		items,
		onItemClick: (href) => alert(`이동할 경로: ${href}`),
	},
};

export const Vertical: Story = {
	args: {
		items,
		sx: {
			flexDirection: 'column',
			alignItems: 'flex-start',
			gap: 3,
		},
	},
};
