import { type ComponentType, useState, useMemo, useCallback } from 'react';
import { TextField, type TextFieldProps, IconButton } from '@mui/material';

export interface BDSInputProps extends Omit<TextFieldProps, 'helperText'> {
	helperText?: string;
	errorMessage?: string;
	successMessage?: string;
}

type InputComponent = ComponentType<BDSInputProps>;

const getInputType = (isPassword: boolean, isPasswordVisible: boolean, type: string | undefined) => {
	if (!isPassword) return type;
	return isPasswordVisible ? 'password' : 'text';
};

/**
 * 입력 필드 컴포넌트
 *
 * @param {string} [helperText] - 도움말 텍스트
 * @param {string} [errorMessage] - 오류 메시지
 * @param {string} [successMessage] - 성공 메시지
 *
 * @link https://teambuzzle.github.io/bds/?path=/docs/bds-buzzle-design-system-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-atoms-input--docs BDS Input 문서
 * @link https://mui.com/material-ui/api/text-field/ MUI TextField API
 */
export const Input: InputComponent = ({ type, helperText, errorMessage, successMessage, ...props }) => {
	const isPassword = useMemo(() => type === 'password', [type]);
	const [isPasswordVisible, setIsPasswordVisible] = useState(isPassword);

	const handleTogglePasswordVisibility = useCallback(() => {
		setIsPasswordVisible(!isPasswordVisible);
	}, [isPasswordVisible]);

	return (
		<TextField
			type={getInputType(isPassword, isPasswordVisible, type)}
			error={!!errorMessage}
			helperText={errorMessage || successMessage || helperText}
			slotProps={{
				formHelperText: {
					color: (() => {
						if (errorMessage) return 'error.main';
						if (successMessage) return 'success.main';
						return 'text.secondary';
					})(),
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
