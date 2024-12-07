import type { Meta, StoryObj } from '@storybook/react';
import { Animation } from './Animation';

const meta = {
	title: 'Organisms/Animation',
	component: Animation,
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'dark',
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Animation>;

export default meta;
type Story = StoryObj<typeof Animation>;

export const Default: Story = {
	args: {
		isAnimate: false,
		finishAnimation: () => console.log('애니메이션 종료'),
	},
};

export const Animated: Story = {
	args: {
		isAnimate: true,
		finishAnimation: () => console.log('애니메이션 종료'),
	},
};
