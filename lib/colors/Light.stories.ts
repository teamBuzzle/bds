import type { Meta, StoryObj } from '@storybook/react';
import { Light } from './Light';

const meta = {
	title: 'COLORS/Light',
	component: Light,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'light', // 배경색을 흰색으로 설정
			values: [
				{
					name: 'light',
					value: '#ffffff', // 흰색 배경
				},
			],
		},
	},
	argTypes: {
		// Primary Color States
		primaryNormal: {
			control: 'color',
			description: 'Primary Normal Color',
			defaultValue: '#6174fb',
		},
		primaryHover: {
			control: 'color',
			description: 'Primary Hover Color',
			defaultValue: '#7A94FF',
		},
		primaryDisabled: {
			control: 'color',
			description: 'Primary Disabled Color',
			defaultValue: 'rgba(97, 116, 251, 0.5)',
		},

		// Secondary Color States
		secondaryNormal: {
			control: 'color',
			description: 'Secondary Normal Color',
			defaultValue: '#F34541',
		},
		secondaryHover: {
			control: 'color',
			description: 'Secondary Hover Color',
			defaultValue: '#FB716E',
		},
		secondaryDisabled: {
			control: 'color',
			description: 'Secondary Disabled Color',
			defaultValue: 'rgba(243, 69, 65, 0.5)',
		},
	},
} satisfies Meta<typeof Light>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		primaryNormal: '#6174fb',
		primaryHover: '#7A94FF',
		primaryDisabled: 'rgba(97, 116, 251, 0.5)',
		secondaryNormal: '#F34541',
		secondaryHover: '#FB716E',
		secondaryDisabled: 'rgba(243, 69, 65, 0.5)',
	},
};
