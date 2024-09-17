import type { FC, PropsWithChildren, HTMLAttributes } from 'react';
import styled, { css, type StyledObject } from 'styled-components';
import type { BuildPropsWithSign, Bool, As } from '@/types';
import { buildPropsWithSign } from '@/utils';
import { bds } from '@/constants';

interface Props extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {
	useBlack?: Bool;
	fullWidth?: Bool;
	fullHeight?: Bool;
	css?: StyledObject;
}

type PropsWithSign = BuildPropsWithSign<Props>;

export const StyledBox = styled.div<PropsWithSign>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: ${({ $fullWidth }) => ($fullWidth ? '-webkit-fill-available' : 'auto')};
	height: ${({ $fullHeight }) => ($fullHeight ? '-webkit-fill-available' : 'auto')};
	gap: ${bds.value.box.spacing}px;
	padding: ${bds.value.box.padding}px;
	border-radius: ${bds.value.box.radius}px;
	color: ${bds.color.text.base};
	background-color: ${({ $useBlack }) => ($useBlack ? bds.color.background.base : bds.color.background.elevated)};
	${({ $css }) => $css && css($css)};
`;

/**
 * 박스 컴포넌트
 * @param {boolean} useBlack - 배경 색상 설정
 * @param {boolean} fullWidth - 너비 설정
 * @param {boolean} fullHeight - 높이 설정
 * @param {StyledObject} css - 스타일 설정
 * @param {As} as - 렌더링할 HTML 요소 또는 컴포넌트
 */
export const Box: FC<Props & As> = ({ children, ...props }) => {
	return <StyledBox {...buildPropsWithSign(props)}>{children}</StyledBox>;
};
