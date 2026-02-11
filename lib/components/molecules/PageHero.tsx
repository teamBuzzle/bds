import { type ComponentType, type ReactNode } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack, { type StackProps } from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { motion } from 'motion/react';

const EASE_OUT: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const gradientTextSx = {
	background: 'linear-gradient(90deg, #6778ff 0%, #4cc8ff 50%, #9f45ef 100%)',
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
	backgroundClip: 'text',
};

export interface BDSPageHeroProps extends Omit<StackProps, 'title'> {
	/** Main heading text (supports ReactNode for line breaks) */
	title: ReactNode;
	/** Subtitle text below the heading */
	subtitle?: string;
	/** Optional badge/chip text above the title */
	badge?: string;
	/** Size variant affecting text sizes */
	size?: 'sm' | 'lg';
	/** Additional content below subtitle (e.g., CTA button) */
	action?: ReactNode;
}

export const PageHero: ComponentType<BDSPageHeroProps> = ({
	title,
	subtitle,
	badge,
	size = 'sm',
	action,
	sx,
	...props
}) => {
	const titleSize = size === 'lg' ? { xs: '36px', md: '64px' } : { xs: '32px', md: '56px' };
	const subtitleSize = size === 'lg' ? { xs: '16px', md: '20px' } : { xs: '14px', md: '18px' };

	return (
		<Stack
			component={motion.div}
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: EASE_OUT }}
			alignItems="center"
			textAlign="center"
			gap={2}
			sx={{ py: { xs: 6, md: 10 }, ...sx }}
			{...props}
		>
			{badge && (
				<Chip
					label={badge}
					sx={{
						bgcolor: 'rgba(103, 120, 255, 0.15)',
						color: '#6778ff',
						fontWeight: 600,
						fontSize: '14px',
						height: '32px',
						mb: 1,
					}}
				/>
			)}
			<Typography
				component="h1"
				fontWeight={800}
				sx={{
					fontSize: titleSize,
					lineHeight: '120%',
					...gradientTextSx,
				}}
			>
				{title}
			</Typography>
			{subtitle && (
				<Typography
					sx={{
						fontSize: subtitleSize,
						color: 'rgba(255, 255, 255, 0.7)',
						lineHeight: '160%',
						maxWidth: '600px',
					}}
				>
					{subtitle}
				</Typography>
			)}
			{action && <Box sx={{ mt: 2 }}>{action}</Box>}
		</Stack>
	);
};
