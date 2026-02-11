import { FeatureSection } from './FeatureSection';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: '컴포넌트/Molecules/FeatureSection',
	component: FeatureSection,
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
		heading: {
			description: '섹션 제목',
			control: 'text',
		},
		subheading: {
			description: '섹션 설명',
			control: 'text',
		},
		reversed: {
			description: '레이아웃 반전 (비주얼이 왼쪽으로)',
			control: 'boolean',
			defaultValue: false,
		},
		animated: {
			description: '스크롤 애니메이션 적용',
			control: 'boolean',
			defaultValue: true,
		},
	},
} satisfies Meta<typeof FeatureSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		heading: '강력한 기능',
		subheading:
			'비즈니스에 필요한 모든 것을 한곳에서 관리하세요. 직관적인 인터페이스로 누구나 쉽게 사용할 수 있습니다.',
	},
};

export const Reversed: Story = {
	args: {
		heading: '레이아웃 반전',
		subheading: '비주얼 콘텐츠가 왼쪽에 배치되는 반전 레이아웃입니다.',
		reversed: true,
	},
};

export const NoAnimation: Story = {
	args: {
		heading: '애니메이션 없음',
		subheading: '스크롤 애니메이션이 비활성화된 섹션입니다.',
		animated: false,
	},
};
