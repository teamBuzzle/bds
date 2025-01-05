import { MobileMenu } from './MobileMenu';
import type { Meta, StoryObj } from '@storybook/react';

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

export const LoggedOut: Story = {
	args: {
		isLoggedIn: false,
	},
};

export const LoggedIn: Story = {
	args: {
		isLoggedIn: true,
		// eslint-disable-next-line no-alert
		onLogout: () => alert('로그아웃'),
	},
};
