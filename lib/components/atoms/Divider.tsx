import type { FC } from 'react';
import styled, { css } from 'styled-components';
import { buildPropsWithSign } from '@/utils';
import type { BuildPropsWithSign } from '@/types';
import { bds } from '@/constants';

interface Props {
	direction?: 'horizontal' | 'vertical';
}

type PropsWithSign = BuildPropsWithSign<Props>;

const StyledDivider = styled.div<PropsWithSign>`
	width: 100%;
	height: 1px;
	background-color: ${bds.color.line.base};
	${({ $direction }) =>
		$direction === 'horizontal' &&
		css`
			width: 100%;
			height: 1px;
		`}
	${({ $direction }) =>
		$direction === 'vertical' &&
		css`
			width: 1px;
			height: 100%;
		`}
`;

export const Divider: FC<Props> = (props) => {
	return <StyledDivider {...buildPropsWithSign(props)} role="separator" />;
};
