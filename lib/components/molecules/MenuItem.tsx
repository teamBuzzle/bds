import { ListItemButton, ListItemButtonProps } from '@mui/material';
import { FC } from 'react';

interface Props extends ListItemButtonProps {
	selected?: boolean;
}

export const MenuItem: FC<Props> = ({ selected, ...props }) => {
	return (
		<ListItemButton
			selected={selected}
			sx={{
				cursor: 'pointer',
				...props.sx,
			}}
			{...props}
		/>
	);
};
