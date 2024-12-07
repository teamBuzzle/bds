import { Typography, TypographyProps } from '@mui/material';
import { FC } from 'react';

interface Props extends TypographyProps {
	gradient?: 'primary' | 'secondary' | 'tertiary';
}

export const Text: FC<Props> = ({ gradient, ...props }) => {
	return (
		<Typography
			className={gradient ? 'gradient-text' : undefined}
			sx={{
				...(gradient && {
					background: (theme) => theme.palette.primary.main,
				}),
				...props.sx,
			}}
			{...props}
		/>
	);
};
