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
				component:
					'BDS 기본 버튼 컴포넌트, 사용자의 다음 행동을 유발하는 주요 액션을 나타내며, UI에서 가장 두드러지게 디자인됩니다. 사용자가 가장 많이 클릭해야 하는 버튼입니다. 예를 들어, “저장”이나 “제출” 같은 기능을 담고 있습니다.',
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
		fullWidth: {
			description: '버튼 너비를 화면 너비로 설정',
			table: {
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' },
			},
			control: {
				type: 'boolean',
				defaultValue: false,
			},
		},
		outlined: {
			description: '아웃라인 버튼 스타일',
			table: {
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' },
			},
			control: {
				type: 'boolean',
			},
		},
		text: {
			description: '텍스트형 버튼 스타일',
			table: {
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' },
			},
			control: {
				type: 'boolean',
			},
		},
		align: {
			description: '버튼 정렬 설정',
			table: {
				defaultValue: { summary: 'left' },
				type: { summary: 'left | right | center' },
			},
			options: ['left', 'right', 'center'],
			control: {
				type: 'select',
			},
		},
		onClick: {
			description: '버튼 클릭 시 실행될 함수',
			table: {
				type: { summary: 'React.MouseEventHandler<HTMLButtonElement>' },
			},
		},
		disabled: {
			description: '버튼 비활성화 여부',
			table: {
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' },
			},
			control: {
				type: 'boolean',
				defaultValue: false,
			},
		},
		dense: {
			description: '버튼을 밀집하게 표시할지 여부',
			table: {
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' },
			},
			control: {
				type: 'boolean',
				defaultValue: false,
			},
		},
	},
	args: { children: 'Button', onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/* 스토리 */
export const Basic: Story = {
	parameters: {
		docs: {
			description: {
				story: '기본 버튼은 사용자의 다음 행동을 유발하는 주요 액션을 나타내며, UI에서 가장 두드러지게 디자인됩니다. 사용자가 가장 많이 클릭해야 하는 버튼입니다. 예를 들어, “저장”이나 “제출” 같은 기능을 담고 있습니다. 다른 이름으로는 Call to Action (CTA) 버튼으로 부를 수 있습니다.',
			},
		},
	},
	args: {
		children: 'Basic Button',
	},
	play: async ({ canvasElement, step, args }) => {
		const canvas = within(canvasElement);

		await step('Button 클릭', async () => {
			await userEvent.click(canvas.getByRole('button', { name: args.children as string }));
			await expect(args.onClick).toHaveBeenCalled();
		});
	},
};

export const Outlined: Story = {
	parameters: {
		docs: {
			description: {
				story: '아웃라인 버튼은 부차적인 액션을 위한 버튼으로, 기본 버튼보다는 덜 강조되지만 여전히 중요합니다. 예를 들어, “취소”나 “돌아가기”와 같은 기능을 수행합니다.',
			},
		},
	},
	args: {
		children: 'Outlined Button',
		outlined: 'true',
	},
};

export const Text: Story = {
	parameters: {
		docs: {
			description: {
				story: '텍스트형 버튼은 주로 덜 중요한 액션을 위해 사용됩니다. 기본과 Outlined 버튼보다 덜 눈에 띄게 디자인되며, 보통 추가적인 옵션을 제공하는 버튼입니다. 예를 들어, “더 보기” 또는 “옵션 설정” 같은 부가적인 기능을 담습니다.',
			},
		},
	},
	args: {
		children: 'Text Button',
		text: 'true',
	},
};

export const Disabled: Story = {
	parameters: {
		docs: {
			description: {
				story: '비활성화된 버튼은 사용자가 클릭할 수 없는 버튼으로, 버튼 내부에 텍스트만 표시됩니다.',
			},
		},
	},
	args: {
		children: 'Disabled Button',
		disabled: true,
	},
};
