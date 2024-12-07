import { TextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';

interface Props extends Omit<TextFieldProps, 'error' | 'helperText'> {
	helperText?: string;
	errorMessage?: string;
	successMessage?: string;
}

export const Input: FC<Props> = ({ helperText, errorMessage, successMessage, ...props }) => {
	return (
		<TextField
			error={!!errorMessage}
			helperText={errorMessage || successMessage || helperText}
			FormHelperTextProps={{
				sx: {
					color: errorMessage ? 'error.main' : successMessage ? '#4CAF50' : '#727272',
					marginLeft: 0,
					fontSize: '14px',
					fontFamily: 'Pretendard, sans-serif',
				},
			}}
			{...props}
		/>
	);
};
