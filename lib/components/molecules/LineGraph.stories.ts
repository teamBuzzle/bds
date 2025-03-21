import { LineGraph } from './LineGraph';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LineGraph> = {
	title: 'Molecules/LineGraph',
	component: LineGraph,
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
		lineColor: {
			description: '선 색상',
			control: 'color',
		},
		lineWidth: {
			description: '선 두께',
			control: 'number',
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof LineGraph>;

export default meta;
type Story = StoryObj<typeof LineGraph>;

const lineItems = [
	{ x: 0, y: 100 },
	{ x: 1, y: 200 },
	{ x: 2, y: 150 },
	{ x: 3, y: 300 },
	{ x: 4, y: 250 },
	{ x: 5, y: 230 },
	{ x: 6, y: 190 },
	{ x: 7, y: 290 },
	{ x: 8, y: 220 },
];

export const Default: Story = {
	args: {
		data: lineItems,
		grid: false,
	},
};
