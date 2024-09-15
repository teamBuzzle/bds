import styled from 'styled-components';
import { bds } from '@/constants';

export const Button = styled.button`
	display: flex;
	width: 100%;
	height: 65px;
	padding: 0px 50px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	align-self: stretch;
	border-radius: 30px;
	border: none;
	background: ${bds.color.text.base};
`;
