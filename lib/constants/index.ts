import { colorSemantic, colorToken, type ColorToken } from './color';
import { gradient, motion, breakpoints, darkCard } from './shared';
import { typographySemantic, typographyToken, type TypographyToken } from './typography';
import { valueSemantic, valueToken, type ValueToken } from './value';

export { bdsTheme } from './theme';

export const bds = {
	color: colorSemantic,
	typography: typographySemantic,
	value: valueSemantic,
	token: {
		color: colorToken,
		typography: typographyToken,
		value: valueToken,
	},
	gradient,
	motion,
	breakpoints,
	darkCard,
};

export type { ColorToken, TypographyToken, ValueToken };
