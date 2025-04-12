import { nanoid } from 'nanoid';
import { DonutGraph } from './DonutGraph';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DonutGraph> = {
	title: '컴포넌트/Molecules/DonutGraph',
	component: DonutGraph,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark',
		},
	},
	argTypes: {
		data: {
			description: '그래프 데이터',
			control: 'object',
		},
		legends: {
			description: 'legends 여부',
			control: 'boolean',
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof DonutGraph>;

export default meta;
type Story = StoryObj<typeof DonutGraph>;

const data = [
	{ id: nanoid(), label: '라벨1', value: 40, color: '#ff6384' },
	{ id: nanoid(), label: '라벨2', value: 30, color: '#36a2eb' },
	{ id: nanoid(), label: '라벨3', value: 20, color: '#ffcd56' },
	{ id: nanoid(), label: '라벨4', value: 80, color: '#4bc0c0' },
];

export const Default: Story = {
	args: {
		data,
		legends: true,
	},
};
