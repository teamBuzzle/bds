import { PageHero } from './PageHero';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: '컴포넌트/Molecules/PageHero',
	component: PageHero,
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'dark',
			values: [
				{ name: 'dark', value: '#141414' },
				{ name: 'light', value: '#ffffff' },
			],
		},
	},
	tags: ['autodocs'],
	argTypes: {
		title: {
			description: '히어로 섹션의 제목',
			control: 'text',
		},
		subtitle: {
			description: '히어로 섹션의 부제목',
			control: 'text',
		},
		badge: {
			description: '제목 위의 뱃지 텍스트',
			control: 'text',
		},
		size: {
			description: '텍스트 크기 변형',
			control: 'select',
			options: ['sm', 'lg'],
			defaultValue: 'sm',
		},
	},
} satisfies Meta<typeof PageHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: '비즈니스를 위한 최고의 솔루션',
		subtitle: '간단하고 강력한 도구로 비즈니스를 성장시키세요.',
	},
};

export const WithBadge: Story = {
	args: {
		badge: 'NEW',
		title: '새로운 기능 출시',
		subtitle: '더 빠르고 더 강력한 기능으로 업그레이드하세요.',
	},
};

export const Large: Story = {
	args: {
		title: '대형 히어로 섹션',
		subtitle: '큰 텍스트 사이즈로 더 강렬한 인상을 줍니다.',
		size: 'lg',
		badge: 'FEATURED',
	},
};
