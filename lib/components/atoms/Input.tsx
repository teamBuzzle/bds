import { type FC, useState, useMemo, useCallback } from 'react';
import { TextField, type TextFieldProps, IconButton } from '@mui/material';

interface Props extends Omit<TextFieldProps, 'helperText'> {
	helperText?: string;
	errorMessage?: string;
	successMessage?: string;
}

export const Input: FC<Props> = ({ type, helperText, errorMessage, successMessage, ...props }) => {
	const isPassword = useMemo(() => type === 'password', [type]);
	const [isPasswordVisible, setIsPasswordVisible] = useState(!isPassword);

	const handleTogglePasswordVisibility = useCallback(() => {
		setIsPasswordVisible(!isPasswordVisible);
	}, [isPasswordVisible]);

	return (
		<TextField
			type={isPassword ? (isPasswordVisible ? 'password' : 'text') : type}
			error={!!errorMessage}
			helperText={errorMessage || successMessage || helperText}
			slotProps={{
				formHelperText: {
					color: errorMessage ? 'error.main' : successMessage ? '#4CAF50' : '#727272',
				},
				input: {
					endAdornment: isPassword && (
						<IconButton onClick={handleTogglePasswordVisibility}>
							{isPasswordVisible ? (
								<img alt="비밀번호 숨기기" height={24} src="/images/eye_off_icon.svg" width={24} />
							) : (
								<img alt="비밀번호 보기" height={24} src="/images/eye_on_icon.svg" width={24} />
							)}
						</IconButton>
					),
				},
			}}
			{...props}
		/>
	);
};
