import { ColorPicker } from './index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Organisms/ColorPicker',
	component: ColorPicker,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		viewSize: {
			width: 1024,
			height: 768,
		},
	},
};

export const Mobile: Story = {
	args: {
		viewSize: {
			width: 375,
			height: 667,
		},
	},
};
