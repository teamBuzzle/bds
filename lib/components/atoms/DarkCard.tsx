import { type ComponentType, type ReactNode } from 'react';
import Box, { type BoxProps } from '@mui/material/Box';

export interface BDSDarkCardProps extends BoxProps {
	/** Border radius value (default: '24px') */
	radius?: string;
	/** Whether to show hover effect (default: true) */
	hoverable?: boolean;
	children?: ReactNode;
}

export const DarkCard: ComponentType<BDSDarkCardProps> = ({
	radius = '24px',
	hoverable = true,
	sx,
	children,
	...props
}) => (
	<Box
		sx={{
			bgcolor: 'rgba(255, 255, 255, 0.02)',
			borderRadius: radius,
			border: '1px solid rgba(255, 255, 255, 0.08)',
			transition: 'all 0.3s',
			...(hoverable && {
				'&:hover': {
					bgcolor: 'rgba(255, 255, 255, 0.04)',
					borderColor: 'rgba(255, 255, 255, 0.12)',
				},
			}),
			...sx,
		}}
		{...props}
	>
		{children}
	</Box>
);
