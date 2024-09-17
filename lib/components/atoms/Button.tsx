import type { ButtonHTMLAttributes, PropsWithChildren, FC } from 'react';
import styled from 'styled-components';
import { bds } from '@/constants';
import type { bool, BuildPropsWithSign } from '@/types';
import { buildPropsWithSign } from '@/utils';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
	dense?: bool;
	align?: 'left' | 'right' | 'center';
	outlined?: bool;
	text?: bool;
	fullWidth?: bool;
}

type PropsWithSign = BuildPropsWithSign<Props>;

const StyledButton = styled.button<PropsWithSign>`
	display: flex;
	width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'fit-content')};
	height: ${({ $dense }) => ($dense ? '40px' : '65px')};
	padding: ${bds.value.button.paddingY}px ${bds.value.button.paddingX}px;
	justify-content: center;
	align-items: center;
	align-self: stretch;
	border-radius: ${bds.value.button.radius}px;
	border: none;
	cursor: pointer;
	color: ${bds.color.text.base};
	background-color: ${bds.color.button.base};
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	justify-content: ${({ $align }) => ($align === 'left' ? 'flex-start' : $align === 'right' ? 'flex-end' : 'center')};
	gap: ${bds.value.button.spacing}px;

	${bds.typography.button.base}

	&:hover {
		background-color: ${bds.color.button.hover};
	}

	&:disabled {
		background-color: ${bds.color.button.disabled};
		color: ${bds.color.text.disabled};
		cursor: not-allowed;
		pointer-events: none;
	}

	&:focus {
		outline: none;
	}

	&:active {
		background-color: ${bds.color.button.active};
	}

	&.selected {
		background-color: ${bds.color.button.selected};
	}

	${({ $outlined }) =>
		$outlined &&
		`
			border: 1px solid ${bds.color.button.base};
			background-color: transparent;
			color: ${bds.color.button.base};

			&:hover {
				background-color: transparent;
				color: ${bds.color.text.linkHover};
				border-color: ${bds.color.text.linkHover};
			}

			&:active {
				background-color: transparent;
				color: ${bds.color.text.linkActive};
				border-color: ${bds.color.text.linkActive};
			}

			&:disabled {
				background-color: transparent;
				color: ${bds.color.text.disabled};
				border-color: ${bds.color.text.disabled};
			}
		`}
	${({ $text }) =>
		$text &&
		`
			background-color: transparent;
			border: none;
			color: ${bds.color.button.base};

			&:hover {
				background-color: transparent;
				color: ${bds.color.text.linkHover};
			}

			&:active {
				background-color: transparent;
				color: ${bds.color.text.linkActive};
			}

			&:disabled {
				background-color: transparent;
				color: ${bds.color.text.disabled};
			}
		`}
`;

/**
 * 버튼 컴포넌트
 * @param dense - 버튼 밀도 설정
 * @param align - 버튼 정렬 설정
 * @param onClick - 버튼 클릭 시 실행될 함수
 * @param outlined - 버튼 테두리 설정
 * @param text - 버튼 텍스트 설정
 * @param disabled - 버튼 비활성화 여부
 * @param children - 버튼 내부에 들어갈 텍스트
 * @param fullWidth - 버튼 너비 설정
 */
export const Button: FC<Props> = ({ children, ...props }) => {
	return <StyledButton {...buildPropsWithSign(props)}>{children}</StyledButton>;
};
