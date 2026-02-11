import { type ComponentType, type ReactNode } from 'react';
import Box, { type BoxProps } from '@mui/material/Box';
import { motion } from 'motion/react';

const EASE_OUT: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const variants = {
	fadeUp: {
		initial: { opacity: 0, y: 60 },
		whileInView: { opacity: 1, y: 0 },
	},
	fadeLeft: {
		initial: { opacity: 0, x: -60 },
		whileInView: { opacity: 1, x: 0 },
	},
	fadeRight: {
		initial: { opacity: 0, x: 60 },
		whileInView: { opacity: 1, x: 0 },
	},
	fadeIn: {
		initial: { opacity: 0 },
		whileInView: { opacity: 1 },
	},
};

export interface BDSAnimatedSectionProps extends BoxProps {
	/** Animation variant */
	variant?: keyof typeof variants;
	/** Animation delay in seconds */
	delay?: number;
	/** Animation duration in seconds (default: 0.8) */
	duration?: number;
	/** Viewport threshold to trigger animation (default: 0.3) */
	threshold?: number;
	children?: ReactNode;
}

export const AnimatedSection: ComponentType<BDSAnimatedSectionProps> = ({
	variant = 'fadeUp',
	delay = 0,
	duration = 0.8,
	threshold = 0.3,
	children,
	...props
}) => {
	const v = variants[variant];
	return (
		<motion.div
			initial={v.initial}
			whileInView={v.whileInView}
			viewport={{ once: true, amount: threshold }}
			transition={{ duration, delay, ease: EASE_OUT }}
		>
			<Box {...props}>{children}</Box>
		</motion.div>
	);
};
