import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import { Stack, Box, Divider } from '@/components/atoms';
import { bds } from '@/constants';

/* 메타 */
const meta = {
	title: 'Atoms/Stack',
	component: Stack,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: '기본 박스 컴포넌트, 레이아웃을 구성하는 기본 단위입니다.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		as: {
			description: 'Polymorphic 컴포넌트, 기본 태그를 변경할 수 있습니다.',
			table: {
				type: { summary: 'keyof JSX.IntrinsicElements | React.ComponentType' },
				defaultValue: { summary: 'div' },
			},
			options: ['div', 'button', 'a', 'form'],
			control: {
				type: 'select',
			},
		},
		children: {
			description: '박스 내부에 들어갈 요소',
			table: {
				type: { summary: 'string | React.ReactNode' },
			},
		},
		direction: {
			description: '스택 방향',
			table: {
				defaultValue: { summary: 'column' },
				type: { summary: 'row | column' },
			},
			control: {
				type: 'select',
				options: ['row', 'column'],
				defaultValue: 'column',
			},
		},
		gap: {
			description: '스택 간격',
			table: {
				defaultValue: { summary: 'small' },
				type: { summary: 'xxLarge | xLarge | large | medium | small | xSmall | xxSmall' },
			},
			options: ['xxLarge', 'xLarge', 'large', 'medium', 'small', 'xSmall', 'xxSmall'],
			control: {
				type: 'select',
				defaultValue: 'small',
			},
		},
		align: {
			description: '스택 정렬(세로)',
			table: {
				defaultValue: { summary: 'start' },
				type: { summary: 'start | center | end' },
			},
			options: ['start', 'center', 'end'],
			control: {
				type: 'select',
			},
		},
		justify: {
			description: '스택 정렬(가로)',
			table: {
				defaultValue: { summary: 'start' },
				type: { summary: 'start | center | end' },
			},
			options: ['start', 'center', 'end'],
			control: {
				type: 'select',
			},
		},
		divider: {
			description: '스택 내부 구분자',
			table: {
				defaultValue: { summary: 'null' },
				type: { summary: 'ReactNode' },
			},
			control: false,
		},
	},
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

/* 스토리 */
export const Column: Story = {
	parameters: {
		docs: {
			description: {
				story: '세로로 요소를 배치합니다.',
			},
		},
	},
	render(args) {
		return (
			<Stack {...args}>
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
		direction: 'column',
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);

		// Stack 기능 테스트
		await step('Stack 기능 테스트', async () => {
			const topBox = canvas.getByText('Top');
			const bottomBox = canvas.getByText('Bottom');

			await expect(topBox).toBeInTheDocument();
			await expect(bottomBox).toBeInTheDocument();
		});

		// Stack 스타일 테스트
		await step('Stack 스타일 테스트', async () => {
			const topBox = canvas.getByText('Top');
			const computedStyle = window.getComputedStyle(topBox.parentElement as Element);

			await expect(computedStyle.display).toBe('flex');
			await expect(computedStyle.flexDirection).toBe('column');
			await expect(computedStyle.gap).toBe(`${bds.value.box.spacing}px`);
		});
	},
};

export const Row: Story = {
	parameters: {
		docs: {
			description: {
				story: '가로로 요소를 배치합니다.',
			},
		},
	},
	render(args) {
		return (
			<Stack {...args}>
				<Box useBlack>Left</Box>
				<Box useBlack>Right</Box>
			</Stack>
		);
	},
	args: {
		direction: 'row',
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);

		// Stack 기능 테스트
		await step('Stack 기능 테스트', async () => {
			const leftBox = canvas.getByText('Left');
			const rightBox = canvas.getByText('Right');

			await expect(leftBox).toBeInTheDocument();
			await expect(rightBox).toBeInTheDocument();
		});

		// Stack 스타일 테스트
		await step('Stack 스타일 테스트', async () => {
			const leftBox = canvas.getByText('Left');
			const computedStyle = window.getComputedStyle(leftBox.parentElement as Element);

			await expect(computedStyle.display).toBe('flex');
			await expect(computedStyle.flexDirection).toBe('row');
			await expect(computedStyle.gap).toBe(`${bds.value.box.spacing}px`);
		});
	},
};

export const DividerWithStack: Story = {
	parameters: {
		docs: {
			description: {
				story: '스택 내부 구분자를 추가할 수 있습니다. 구분자는 스택 내부 요소를 구분하는 역할을 합니다.',
			},
		},
	},
	render(args) {
		return (
			<Stack {...args}>
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
		divider: <Divider />,
		direction: 'column',
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);

		// Stack 기능 테스트
		await step('Stack 기능 테스트', async () => {
			const topBox = canvas.getByText('Top');
			const bottomBox = canvas.getByText('Bottom');

			await expect(topBox).toBeInTheDocument();
			await expect(bottomBox).toBeInTheDocument();
		});

		// Stack 스타일 테스트
		await step('Stack 스타일 테스트', async () => {
			const topBox = canvas.getByText('Top');
			const computedStyle = window.getComputedStyle(topBox.parentElement as Element);

			await expect(computedStyle.display).toBe('flex');
			await expect(computedStyle.flexDirection).toBe('column');
			await expect(computedStyle.gap).toBe(`${bds.value.box.spacing}px`);
		});

		// Divider 스타일 테스트
		await step('Divider 스타일 테스트', async () => {
			const divider = canvas.getByRole('separator');

			await expect(divider).toBeInTheDocument();
		});
	},
};
