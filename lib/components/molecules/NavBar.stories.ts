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
	argTypes: {
		items: {
			description: '네비게이션 아이템 목록',
			control: 'object',
		},
		onItemClick: {
			description: '아이템 클릭 핸들러',
			control: 'object',
		},
		sx: {
			description: '스타일 오버라이드',
			control: 'object',
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
