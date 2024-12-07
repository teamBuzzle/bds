import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta = {
	title: 'Atoms/Link',
	component: Link,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		href: '#',
		children: '링크',
	},
};

export const Disabled: Story = {
	args: {
		href: '#',
		children: '비활성화 링크',
		color: 'text.disabled',
	},
};
