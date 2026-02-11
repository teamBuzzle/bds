import useMediaQuery from '@mui/material/useMediaQuery';

const BREAKPOINTS = {
	mobile: 750,
	tablet: 960,
	desktop: 1200,
} as const;

/**
 * Centralized responsive breakpoint hook for consistent media queries.
 * Replaces scattered useMediaQuery('(max-width:750px)') calls.
 *
 * @returns Object with boolean flags for current viewport size
 */
export const useBreakpoint = () => {
	const isMobile = useMediaQuery(`(max-width:${BREAKPOINTS.mobile}px)`);
	const isTablet = useMediaQuery(`(max-width:${BREAKPOINTS.tablet}px)`);
	const isDesktop = useMediaQuery(`(min-width:${BREAKPOINTS.desktop + 1}px)`);

	return { isMobile, isTablet, isDesktop };
};
