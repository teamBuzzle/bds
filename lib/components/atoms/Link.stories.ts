import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta = {
	title: 'Atoms/Link',
	component: Link,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		href: {
			control: 'text',
			description: '링크 주소',
		},
		children: {
			control: 'text',
			description: '링크 텍스트',
		},
		cta: {
			control: 'boolean',
			description: 'CTA 스타일 적용 여부',
		},
	},
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		href: '#',
		children: '링크',
	},
};

export const CTA: Story = {
	args: {
		href: '#',
		children: 'CTA 링크',
		cta: true,
	},
};
