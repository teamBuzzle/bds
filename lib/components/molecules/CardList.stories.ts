import type { Meta, StoryObj } from '@storybook/react';
import { CardList } from './CardList';

const meta = {
	title: 'Molecules/CardList',
	component: CardList,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof CardList>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
	{ id: '1', title: 'Card 1', content: 'This is the first card.' },
	{ id: '2', title: 'Card 2', content: 'This is the second card.' },
];

export const Default: Story = {
	args: {
		items,
	},
};
