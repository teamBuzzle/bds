import { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
	title: 'Molecules/Table',
	component: Table,
	argTypes: {
		data: {
			description: '테이블 데이터',
		},
		columns: {
			description: '테이블 컬럼',
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

const data = [
	{ id: 1, name: 'Alice', age: 25 },
	{ id: 2, name: 'Bob', age: 30 },
	{ id: 3, name: 'Charlie', age: 35 },
	{ id: 4, name: 'Alice', age: 25 },
	{ id: 5, name: 'Bob', age: 30 },
	{ id: 6, name: 'Charlie', age: 35 },
	{ id: 7, name: 'Alice', age: 25 },
	{ id: 8, name: 'Bob', age: 30 },
	{ id: 9, name: 'Charlie', age: 35 },
	{ id: 10, name: 'Alice', age: 25 },
	{ id: 11, name: 'Bob', age: 30 },
	{ id: 12, name: 'Charlie', age: 35 },
	{ id: 13, name: 'Alice', age: 25 },
	{ id: 14, name: 'Bob', age: 30 },
	{ id: 15, name: 'Charlie', age: 35 },
];

const columns = [
	{ accessorKey: 'id', header: 'ID' },
	{ accessorKey: 'name', header: '이름' },
	{ accessorKey: 'age', header: '나이' },
];

export const Default: Story = {
	args: {
		data,
		columns,
	},
};
