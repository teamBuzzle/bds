/**
 * BDS Shared Design Tokens
 * Gradient, animation, and breakpoint values used across the design system
 */

// Brand gradient used throughout marketing pages
export const gradient = {
	primary: 'linear-gradient(90deg, #6778ff 0%, #4cc8ff 50%, #9f45ef 100%)',
	primaryHover: 'linear-gradient(90deg, #5667ee 0%, #3bb7ee 50%, #8e34de 100%)',
	text: {
		background: 'linear-gradient(90deg, #6778ff 0%, #4cc8ff 50%, #9f45ef 100%)',
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
		backgroundClip: 'text',
	},
} as const;

// Animation presets for motion/react (framer-motion)
export const motion = {
	easeOut: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
	easeInOut: [0.42, 0, 0.58, 1] as [number, number, number, number],
	duration: {
		fast: 0.3,
		normal: 0.6,
		slow: 0.8,
	},
	// Ready-to-use animation presets
	fadeInUp: {
		initial: { opacity: 0, y: 40 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
	},
	scrollFadeInUp: {
		initial: { opacity: 0, y: 60 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: true, amount: 0.3 },
		transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
	},
	fadeInLeft: {
		initial: { opacity: 0, x: -60 },
		whileInView: { opacity: 1, x: 0 },
		viewport: { once: true, amount: 0.3 },
		transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
	},
	fadeInRight: {
		initial: { opacity: 0, x: 60 },
		whileInView: { opacity: 1, x: 0 },
		viewport: { once: true, amount: 0.3 },
		transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
	},
} as const;

// Breakpoint values for responsive design
export const breakpoints = {
	mobile: 750,
	tablet: 960,
	desktop: 1200,
	query: {
		mobile: '(max-width: 750px)',
		tablet: '(max-width: 960px)',
		desktop: '(min-width: 961px)',
	},
} as const;

// Dark card style preset
export const darkCard = {
	base: {
		bgcolor: 'rgba(255, 255, 255, 0.02)',
		borderRadius: '24px',
		border: '1px solid rgba(255, 255, 255, 0.08)',
		transition: 'all 0.3s',
	},
	hover: {
		bgcolor: 'rgba(255, 255, 255, 0.04)',
		borderColor: 'rgba(255, 255, 255, 0.12)',
	},
} as const;
