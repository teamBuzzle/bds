import type { FC, PropsWithChildren, HTMLAttributes } from 'react';
import styled, { css, type StyledObject } from 'styled-components';
import type { BuildPropsWithSign, As, Bool, DeepKeyOf } from '@/types';
import { buildPropsWithSign, getNestedValue } from '@/utils';
import { bds, type ColorToken } from '@/constants';

type Align = 'left' | 'center' | 'right';

interface Props extends Omit<HTMLAttributes<HTMLElement>, 'color'>, PropsWithChildren {
	align?: Align;
	small?: Bool;
	color?: DeepKeyOf<ColorToken>;
	css?: StyledObject;
}

type PropsWithSign = BuildPropsWithSign<Props>;

export const StyledText = styled.p<PropsWithSign>`
	font-size: ${({ $small }) => ($small ? bds.typography.text.small.fontSize : bds.typography.text.base.fontSize)}px;
	font-weight: ${({ $small }) =>
		$small ? bds.typography.text.small.fontWeight : bds.typography.text.base.fontWeight};
	line-height: ${({ $small }) =>
		$small ? bds.typography.text.small.lineHeight : bds.typography.text.base.lineHeight};
	letter-spacing: ${({ $small }) =>
		$small ? bds.typography.text.small.letterSpacing : bds.typography.text.base.letterSpacing};
	font-family: ${({ $small }) =>
		$small ? bds.typography.text.small.fontFamily : bds.typography.text.base.fontFamily};
	color: ${({ $color }) => {
		if ($color) {
			const colorValue = getNestedValue(bds.color, $color);
			if (typeof colorValue === 'string') {
				return colorValue;
			}
			throw new Error(`유효하지 않은 색상 경로: ${$color}`);
		}
		return bds.color.text.base;
	}};
	text-align: ${({ $align }) => $align};

	${({ $css }) => $css && css($css)};
`;

export const Text: FC<Props & As> = ({ children, as, ...props }) => {
	return (
		<StyledText as={as} {...buildPropsWithSign(props)}>
			{children}
		</StyledText>
	);
};
