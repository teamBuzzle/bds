import { IconButton as MuiIconButton, IconButtonProps } from '@mui/material';
import { FC } from 'react';

export const IconButton: FC<IconButtonProps> = ({ children, ...props }) => {
	return (
		<MuiIconButton
			sx={{
				'&:hover': {
					opacity: 0.5,
					backgroundColor: 'transparent',
				},
			}}
			{...props}
		>
			{children}
		</MuiIconButton>
	);
};
