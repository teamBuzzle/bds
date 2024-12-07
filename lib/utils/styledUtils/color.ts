import type { DeepKeyOf } from '@/types';
import type { ColorToken } from '@/constants';
import { getNestedValue } from '@/utils';
import { bds } from '@/constants';

export interface Color {
	color?: DeepKeyOf<ColorToken>;
}

export const color = (baseColor: typeof bds.color, $color?: DeepKeyOf<ColorToken>) => `
color: ${
	$color
		? (() => {
				const colorValue = getNestedValue(bds.token.color, $color);
				if (typeof colorValue === 'string') {
					return colorValue;
				}
				throw new Error(`유효하지 않은 색상 경로: ${$color}`);
			})()
		: baseColor
};`;
