import type { FC } from 'react';
import { Card as MuiCard, CardProps } from '@mui/material';

interface Props extends CardProps {
	selected?: boolean;
}

export const Card: FC<Props> = ({ selected, ...props }) => {
	return (
		<MuiCard
			sx={{
				padding: '20px',
				minHeight: '150px',
				display: 'flex',
				flexDirection: 'column',
				gap: '8px',
				borderRadius: '14px',
				transition: 'all 0.2s ease-in-out',
				border: (theme) => (selected ? `1px solid ${theme.palette.primary.main}` : '1px solid #b0b0b0'),
				'&:hover': {
					border: (theme) => `1px solid ${theme.palette.primary.main}`,
					cursor: 'pointer',
				},
				...(selected && {
					boxShadow: (theme) => `0px 6px 20px ${theme.palette.primary.main}40`,
					bgcolor: (theme) => theme.palette.primary.main,
					color: '#FFFFFF',
				}),
				...props.sx,
			}}
			{...props}
		/>
	);
};
