import { Button as MuiButton, ButtonProps } from '@mui/material';
import { FC } from 'react';

interface Props extends ButtonProps {
	fullWidth?: boolean;
}

export const Button: FC<Props> = ({ variant = 'contained', ...props }) => {
	return <MuiButton variant={variant} {...props} />;
};
