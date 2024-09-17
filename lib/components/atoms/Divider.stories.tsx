import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import { Stack, Box, Divider } from '@/components/atoms';
import { bds } from '@/constants';
import { getCodeToRgb } from '@/utils';

/* 메타 */
const meta = {
	title: 'Atoms/Divider',
	component: Divider,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: '구분선 컴포넌트, 레이아웃을 구분하는 용도로 사용합니다.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		direction: {
			description: '구분선 방향',
			table: {
				defaultValue: { summary: 'horizontal' },
				type: { summary: 'horizontal | vertical' },
			},
			options: ['horizontal', 'vertical'],
			control: {
				type: 'radio',
			},
		},
	},
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

/* 스토리 */
export const Horizontal: Story = {
	parameters: {
		docs: {
			description: {
				story: '가로로 구분선을 표시합니다.',
			},
		},
	},
	render(args) {
		return (
			<Stack divider={<Divider {...args} />}>
				<Box useBlack fullWidth>
					Top
				</Box>
				<Box useBlack fullWidth>
					Bottom
				</Box>
			</Stack>
		);
	},
	args: {
		direction: 'horizontal',
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);

		await step('Divider 기능 테스트', async () => {
			const divider = canvas.getByRole('separator');
			await expect(divider).toBeInTheDocument();
		});

		await step('Divider 스타일 테스트', async () => {
			const divider = canvas.getByRole('separator');
			const computedStyle = window.getComputedStyle(divider);
			expect(computedStyle.backgroundColor).toBe(getCodeToRgb(bds.color.line.base));
		});
	},
};

export const Vertical: Story = {
	parameters: {
		docs: {
			description: {
				story: '세로로 구분선을 표시합니다.',
			},
		},
	},
	render(args) {
		return (
			<Stack direction="row" divider={<Divider {...args} />}>
				<Box useBlack fullWidth>
					Left
				</Box>
				<Box useBlack fullWidth>
					Right
				</Box>
			</Stack>
		);
	},
	args: {
		direction: 'vertical',
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);

		await step('Divider 기능 테스트', async () => {
			const divider = canvas.getByRole('separator');
			await expect(divider).toBeInTheDocument();
		});

		await step('Divider 스타일 테스트', async () => {
			const divider = canvas.getByRole('separator');
			const computedStyle = window.getComputedStyle(divider);
			expect(computedStyle.backgroundColor).toBe(getCodeToRgb(bds.color.line.base));
		});
	},
};
