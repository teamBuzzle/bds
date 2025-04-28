import { BarGraph } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BarGraph> = {
	title: '컴포넌트/Molecules/BarGraph',
	component: BarGraph,
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
		grid: {
			description: '배경 실선 여부',
			control: 'boolean',
		},
		sortOrder: {
			description: '정렬 기준',
			control: { type: 'select' },
			options: ['basic', 'ascending', 'descending'],
		},
		layout: {
			description: '그래프 방향',
			control: false,
			table: {
				type: { summary: 'vertical | horizontal' },
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof BarGraph>;

export default meta;
type Story = StoryObj<typeof BarGraph>;

const barItems = [
	{ label: 'Apples', value: 30 },
	{ label: 'Bananas', value: 50 },
	{ label: 'Cherries', value: 40 },
	{ label: 'A1', value: 40 },
	{ label: 'B2', value: 20 },
	{ label: 'C1', value: 10 },
	{ label: 'D1', value: 70 },
];

export const VerticalChart: Story = {
	args: {
		data: barItems,
		grid: false,
		layout: 'vertical',
		sortOrder: 'basic',
	},
};

export const HorizontalChart: Story = {
	args: {
		data: barItems,
		grid: false,
		layout: 'horizontal',
		sortOrder: 'basic',
	},
};
