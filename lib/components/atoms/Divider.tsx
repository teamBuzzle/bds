import { Divider as MuiDivider, DividerProps } from '@mui/material';
import { FC } from 'react';

export const Divider: FC<DividerProps> = (props) => {
	return (
		<MuiDivider
			sx={{
				borderColor: 'divider',
				...props.sx,
			}}
			{...props}
		/>
	);
};
