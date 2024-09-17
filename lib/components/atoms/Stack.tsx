import type { FC, PropsWithChildren, ReactNode } from 'react';
import { Fragment, Children } from 'react';
import type { ValueToken } from '@/constants';
import { bds } from '@/constants';
import type { As } from '@/types';
import { Box } from './Box';

type Direction = 'row' | 'column';
type Align = 'start' | 'center' | 'end';
type Justify = Align | 'space-between' | 'space-around' | 'space-evenly';

interface Props extends PropsWithChildren, As {
	direction?: Direction;
	gap?: keyof ValueToken['spacing'];
	align?: Align;
	justify?: Justify;
	divider?: ReactNode;
}

/**
 * 자식 요소를 구분자로 연결하는 함수
 * @param {ReactNode[]} children - 자식 요소
 * @param {ReactNode} divider - 구분자
 * @returns {ReactNode[]} 연결된 자식 요소
 */
const joinChildren = (children: ReactNode, divider?: ReactNode) => {
	const childrenArray = Children.toArray(children);
	return childrenArray.reduce<ReactNode[]>((acc, child, index) => {
		acc.push(<Fragment key={`child-${index}`}>{child}</Fragment>);
		if (index !== childrenArray.length - 1 && divider) {
			acc.push(<Fragment key={`divider-${index}`}>{divider}</Fragment>);
		}
		return acc;
	}, []);
};

/**
 * 스택 컴포넌트
 * @param {ReactNode} children - 자식 요소
 * @param {'row' | 'column'} direction - 스택 방향
 * @param {keyof ValueToken['spacing']} gap - 스택 간격
 * @param {Align} align - 스택 정렬
 * @param {Justify} justify - 스택 정렬
 * @param {ReactNode} divider - 스택 내부 구분자
 * @param {As} as - 렌더링할 HTML 요소 또는 컴포넌트
 */
export const Stack: FC<Props> = ({
	children,
	direction = 'column',
	gap = 'small',
	align = 'start',
	justify = 'start',
	divider,
	as,
}) => {
	return (
		<Box
			as={as}
			css={{
				display: 'flex',
				flexDirection: direction,
				gap: bds.token.value.spacing?.[gap],
				alignItems: align,
				justifyContent: justify,
			}}
		>
			{joinChildren(children, divider)}
		</Box>
	);
};
