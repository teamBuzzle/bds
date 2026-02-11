import { type ComponentType, type ReactNode } from 'react';
import Box, { type BoxProps } from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion } from 'motion/react';

const EASE_OUT: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export interface BDSFeatureSectionProps extends Omit<BoxProps, 'title'> {
	/** Section heading */
	heading: ReactNode;
	/** Section subheading/description */
	subheading?: ReactNode;
	/** Visual content (image, animation, etc.) */
	visual?: ReactNode;
	/** Whether to reverse the layout (visual on left) */
	reversed?: boolean;
	/** Whether to animate on scroll (default: true) */
	animated?: boolean;
	/** Additional content below heading/subheading */
	extra?: ReactNode;
}

export const FeatureSection: ComponentType<BDSFeatureSectionProps> = ({
	heading,
	subheading,
	visual,
	reversed = false,
	animated = true,
	extra,
	sx,
	...props
}) => {
	const textDirection = reversed ? 'row-reverse' : 'row';
	const slideFrom = reversed ? 60 : -60;

	const textContent = (
		<Box
			{...(animated && {
				component: motion.div,
				initial: { opacity: 0, x: slideFrom },
				whileInView: { opacity: 1, x: 0 },
				viewport: { once: true, amount: 0.3 },
				transition: { duration: 0.8, ease: EASE_OUT },
			})}
			sx={{ flex: 1 }}
		>
			<Typography
				component="h2"
				fontWeight={800}
				sx={{
					fontSize: { xs: '32px', md: '56px' },
					lineHeight: '130%',
					color: '#FEFFFF',
					mb: 2,
				}}
			>
				{heading}
			</Typography>
			{subheading && (
				<Typography
					sx={{
						fontSize: { xs: '16px', md: '20px' },
						lineHeight: '170%',
						color: 'rgba(255, 255, 255, 0.6)',
					}}
				>
					{subheading}
				</Typography>
			)}
			{extra}
		</Box>
	);

	const visualContent = visual ? (
		<Box
			{...(animated && {
				component: motion.div,
				initial: { opacity: 0, x: -slideFrom },
				whileInView: { opacity: 1, x: 0 },
				viewport: { once: true, amount: 0.3 },
				transition: { duration: 0.8, delay: 0.2, ease: EASE_OUT },
			})}
			sx={{ flex: 1, width: '100%' }}
		>
			{visual}
		</Box>
	) : null;

	return (
		<Container maxWidth="lg">
			<Box
				sx={{
					py: { xs: 10, md: 20 },
					display: 'flex',
					flexDirection: { xs: reversed ? 'column-reverse' : 'column', md: textDirection },
					alignItems: 'center',
					gap: { xs: 6, md: 10 },
					...sx,
				}}
				{...props}
			>
				{textContent}
				{visualContent}
			</Box>
		</Container>
	);
};
