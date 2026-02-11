import { type ComponentType } from 'react';
import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';

export interface BDSButtonProps extends MuiButtonProps {
	/** Gradient variant with brand gradient background */
	gradient?: boolean;
}

export const Button: ComponentType<BDSButtonProps> = ({ gradient, sx, ...props }) => {
	const gradientSx = gradient
		? ({
				background: 'linear-gradient(90deg, #6778ff 0%, #4cc8ff 50%, #9f45ef 100%)',
				color: '#fff',
				textTransform: 'none',
				boxShadow: '0 12px 40px rgba(103,120,255,0.3)',
				'&:hover': {
					background: 'linear-gradient(90deg, #5667ee 0%, #3bb7ee 50%, #8e34de 100%)',
					boxShadow: '0 16px 48px rgba(103,120,255,0.45)',
					opacity: 1,
				},
			} as const)
		: {};

	return <MuiButton sx={{ textTransform: 'none', ...gradientSx, ...sx }} {...props} />;
};
