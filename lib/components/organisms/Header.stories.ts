import { Header } from './Header';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Organisms/Header',
	component: Header,
	parameters: {
		layout: 'centered',
	},
	args: {
		user: {
			customer: true,
			admin: false,
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AdminView: Story = {
	args: {
		user: {
			customer: false,
			admin: true,
		},
	},
};
