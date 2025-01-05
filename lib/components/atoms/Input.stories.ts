import { Input } from './Input';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Atoms/Input',
	component: Input,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark',
			values: [
				{ name: 'dark', value: '#141414' },
				{ name: 'light', value: '#ffffff' },
			],
		},
	},
	tags: ['autodocs'],
	argTypes: {
		label: {
			description: '입력 필드의 레이블',
			control: 'text',
			defaultValue: '레이블',
		},
		placeholder: {
			description: '입력 필드의 플레이스홀더',
			control: 'text',
			defaultValue: '입력해주세요',
		},
		type: {
			description: '입력 필드의 타입',
			control: 'select',
			options: ['text', 'password', 'email', 'number'],
			defaultValue: 'text',
		},
		helperText: {
			description: '도움말 텍스트',
			control: 'text',
			defaultValue: '',
		},
		errorMessage: {
			description: '에러 메시지',
			control: 'text',
			defaultValue: '',
		},
		successMessage: {
			description: '성공 메시지',
			control: 'text',
			defaultValue: '',
		},
		disabled: {
			description: '비활성화 여부',
			control: 'boolean',
			defaultValue: false,
		},
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: '비밀번호를 입력해주세요',
		label: '비밀번호',
	},
};

export const WithValidation: Story = {
	args: {
		label: '비밀번호',
		placeholder: '비밀번호를 입력해주세요',
		helperText: '숫자, 대소문자, 특수문자를 포함해 12자 이상 입력해주세요',
	},
};

export const WithError: Story = {
	args: {
		label: '비밀번호',
		placeholder: '비밀번호를 입력해주세요',
		errorMessage: '올바른 비밀번호 형식이 아닙니다',
		type: 'password',
	},
};
