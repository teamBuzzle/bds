import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { InputAdornment } from '@mui/material';
import { BDSProvider } from '../Provider';
import React from 'react';

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
	decorators: [(Story) => React.createElement(BDSProvider, null, React.createElement(Story))],
	tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const createEndAdornment = () => {
	return React.createElement(
		InputAdornment,
		{ position: 'end' },
		React.createElement('img', {
			src: '/images/eye_off_icon.svg',
			alt: '비밀번호 숨기기',
			width: 24,
			height: 24,
		}),
	);
};

export const Default: Story = {
	args: {
		placeholder: '비밀번호를 입력해주세요',
		label: '비밀번호',
		InputProps: {
			endAdornment: createEndAdornment(),
		},
	},
};

export const WithValidation: Story = {
	args: {
		label: '비밀번호',
		placeholder: '비밀번호를 입력해주세요',
		InputProps: {
			endAdornment: createEndAdornment(),
		},
		helperText: '숫자, 대소문자, 특수문자를 포함해 12자 이상 입력해주세요',
	},
};

export const WithError: Story = {
	args: {
		label: '비밀번호',
		placeholder: '비밀번호를 입력해주세요',
		errorMessage: '올바른 비밀번호 형식이 아닙니다',
		InputProps: {
			endAdornment: createEndAdornment(),
		},
	},
};
