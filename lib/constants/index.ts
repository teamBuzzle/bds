import { colorSemantic, colorToken, type ColorToken } from './color';
import { typographySemantic, typographyToken, type TypographyToken } from './typography';
import { valueSemantic, valueToken, type ValueToken } from './value';

export const bds = {
	color: colorSemantic,
	typography: typographySemantic,
	value: valueSemantic,
	token: {
		color: colorToken,
		typography: typographyToken,
		value: valueToken,
	},
};

export type { ColorToken, TypographyToken, ValueToken };
