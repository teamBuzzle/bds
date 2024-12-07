import { Box as MuiBox, BoxProps } from '@mui/material';
import { FC } from 'react';

interface Props extends BoxProps {
	rounded?: boolean;
	shadow?: boolean;
}

export const Box: FC<Props> = ({ rounded, shadow, ...props }) => {
	return (
		<MuiBox
			sx={{
				...(rounded && {
					borderRadius: (theme) => theme.buzzle.borderRadius.card,
				}),
				...(shadow && {
					boxShadow: (theme) => `0px 6px 20px ${theme.palette.buzzle.main}40`,
				}),
				...props.sx,
			}}
			{...props}
		/>
	);
};
