import type { FC, PropsWithChildren, HTMLAttributes, ComponentType } from 'react';
import styled from 'styled-components';
import type { BuildPropsWithSign, Bool } from '@/types';
import { buildPropsWithSign } from '@/utils';
import { bds } from '@/constants';

interface Props extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {
	background?: Bool;
	full?: Bool;
}

type PropsWithSign = BuildPropsWithSign<Props>;

export const StyledBox = styled.div<PropsWithSign>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: ${({ $full }) => ($full ? '100%' : 'auto')};
	height: ${({ $full }) => ($full ? '100%' : 'auto')};
	gap: ${bds.value.box.spacing}px;
	padding: ${bds.value.box.padding}px;
	border-radius: ${bds.value.box.radius}px;
	color: ${bds.color.text.base};
	background-color: ${({ $background }) => ($background ? bds.color.background.base : bds.color.background.elevated)};
`;

export const Box: FC<Props & { as?: keyof JSX.IntrinsicElements | ComponentType }> = ({ children, ...props }) => {
	return <StyledBox {...buildPropsWithSign(props)}>{children}</StyledBox>;
};
