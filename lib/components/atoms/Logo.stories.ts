import { Logo } from './Logo';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Atoms/Logo',
	component: Logo,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark',
		},
	},
	argTypes: {
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
			description: '로고 크기',
		},
		image: {
			control: 'boolean',
			description: '이미지 표시 여부',
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof Logo>;

export const Small: Story = {
	args: {
		size: 'small',
	},
};

export const Medium: Story = {
	args: {
		size: 'medium',
	},
};

export const Large: Story = {
	args: {
		size: 'large',
	},
};

export const WithImage: Story = {
	args: {
		size: 'large',
		image: true,
	},
};
