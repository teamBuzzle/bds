import { TextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';

interface Props extends Omit<TextFieldProps, 'variant' | 'multiline'> {
	maxLength?: number;
}

export const TextArea: FC<Props> = ({ maxLength, ...props }) => {
	return (
		<TextField
			multiline
			inputProps={{
				maxLength,
			}}
			{...props}
		/>
	);
};
