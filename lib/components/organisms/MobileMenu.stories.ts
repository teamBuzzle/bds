import type { Meta, StoryObj } from '@storybook/react';
import { MobileMenu } from './MobileMenu';

const meta = {
	title: 'Organisms/MobileMenu',
	component: MobileMenu,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof MobileMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const menuItems = [
	{ label: '주요기능', href: '/feature' },
	{ label: '템플릿', href: '/template' },
	{ label: '요금', href: '/price' },
	{ label: '고객센터', href: '/customer' },
];

export const LoggedOut: Story = {
	args: {
		menuItems,
		isLoggedIn: false,
	},
};

export const LoggedIn: Story = {
	args: {
		menuItems,
		isLoggedIn: true,
		onLogout: () => alert('로그아웃'),
	},
};
