import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect, fn } from '@storybook/test';
import { Button } from './Button';

/* 메타 */
const meta = {
	title: 'Atoms/Button',
	component: Button,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: '버튼 컴포넌트',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		children: {
			description: '버튼 내부에 들어갈 텍스트',
			table: {
				type: { summary: 'string | React.ReactNode' },
			},
			control: {
				type: 'text',
				defaultValue: 'Button',
			},
		},
		onClick: {
			description: '버튼 클릭 시 실행될 함수',
			table: {
				type: { summary: 'React.MouseEventHandler<HTMLButtonElement>' },
			},
		},
	},
	args: { children: 'Button', onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/* 스토리 */
export const Primary: Story = {
	parameters: {
		docs: {
			description: {
				story: '기본 버튼',
			},
		},
	},
	args: {
		children: 'Primary Button',
	},
	play: async ({ canvasElement, step, args }) => {
		const canvas = within(canvasElement);

		await step('Button 클릭', async () => {
			await userEvent.click(canvas.getByRole('button', { name: args.children as string }));
			await expect(args.onClick).toHaveBeenCalled();
		});
	},
};

export const Secondary: Story = {
	args: {
		children: 'Secondary Button',
	},
};

export const Large: Story = {
	args: {
		children: 'Large Button',
	},
};

export const Small: Story = {
	args: {
		children: 'Small Button',
	},
};
