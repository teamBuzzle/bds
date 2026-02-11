import { AnimatedSection } from './AnimatedSection';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: '컴포넌트/Atoms/AnimatedSection',
	component: AnimatedSection,
	parameters: {
		layout: 'centered',
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
		variant: {
			description: '애니메이션 종류',
			control: 'select',
			options: ['fadeUp', 'fadeLeft', 'fadeRight', 'fadeIn'],
			defaultValue: 'fadeUp',
		},
		delay: {
			description: '애니메이션 지연 시간 (초)',
			control: { type: 'number', min: 0, max: 2, step: 0.1 },
			defaultValue: 0,
		},
		duration: {
			description: '애니메이션 지속 시간 (초)',
			control: { type: 'number', min: 0.1, max: 3, step: 0.1 },
			defaultValue: 0.8,
		},
		threshold: {
			description: '뷰포트 노출 비율 (0~1)',
			control: { type: 'number', min: 0, max: 1, step: 0.1 },
			defaultValue: 0.3,
		},
	},
} satisfies Meta<typeof AnimatedSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FadeUp: Story = {
	args: {
		variant: 'fadeUp',
		children: '아래에서 위로 페이드 인',
		sx: { p: 4, color: '#fff', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '12px' },
	},
};

export const FadeLeft: Story = {
	args: {
		variant: 'fadeLeft',
		children: '왼쪽에서 오른쪽으로 페이드 인',
		sx: { p: 4, color: '#fff', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '12px' },
	},
};

export const FadeRight: Story = {
	args: {
		variant: 'fadeRight',
		children: '오른쪽에서 왼쪽으로 페이드 인',
		sx: { p: 4, color: '#fff', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '12px' },
	},
};

export const WithDelay: Story = {
	args: {
		variant: 'fadeUp',
		delay: 0.5,
		children: '0.5초 지연 후 페이드 인',
		sx: { p: 4, color: '#fff', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '12px' },
	},
};
