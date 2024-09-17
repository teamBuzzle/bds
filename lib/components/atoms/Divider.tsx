import type { FC } from 'react';
import { useRef, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { buildPropsWithSign } from '@/utils';
import type { BuildPropsWithSign } from '@/types';
import { bds } from '@/constants';

interface Props {
	direction?: 'horizontal' | 'vertical';
}

type PropsWithSign = BuildPropsWithSign<Props>;
type Height = {
	$height: number;
};

const StyledDivider = styled.hr<PropsWithSign & Height>`
	border: none;
	margin: 0;
	padding: 0;
	align-items: center;
	white-space: nowrap;
	text-align: center;
	background-color: ${bds.color.line.base};
	width: ${({ $direction }) => ($direction === 'vertical' ? '1px' : '100%')};
	height: ${({ $direction, $height }) => ($direction === 'vertical' ? `${$height}px` : '1px')};
`;

export const Divider: FC<Props> = (props) => {
	const dividerRef = useRef<HTMLHRElement>(null);
	const [height, setHeight] = useState(1);

	useLayoutEffect(() => {
		if (dividerRef.current) {
			const nextSibling = dividerRef.current.nextSibling as HTMLElement;
			const height = nextSibling?.offsetHeight ?? 1;
			setHeight(height);
		}
	}, []);

	return <StyledDivider $height={height} ref={dividerRef} {...buildPropsWithSign(props)} role="separator" />;
};
