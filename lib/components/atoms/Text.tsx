import type { ComponentType } from 'react';
import { Typography, type TypographyProps } from '@mui/material';
import { bds } from '@/constants';

export interface BDSTextProps extends TypographyProps {
	gradient?: boolean;
	fontWeight?: keyof typeof bds.token.typography.weight;
	fontSize?: keyof typeof bds.token.typography.size;
	color?: keyof typeof bds.color.text;
}

type TextComponent = ComponentType<BDSTextProps>;

/**
 * 텍스트를 표시하는 기본 컴포넌트입니다.
 *
 * @param {boolean} [gradient] - 그라데이션 텍스트 효과를 적용할지 여부 (true: 그라데이션 적용, false: 일반 텍스트)
 * @param {keyof typeof bds.token.typography.weight} [fontWeight='regular'] - 텍스트의 굵기
 *   - 'thin': 얇은 글꼴
 *   - 'light': 가벼운 글꼴
 *   - 'regular': 일반 글꼴 (기본값)
 *   - 'medium': 중간 굵기 글꼴
 *   - 'semiBold': 준굵은 글꼴
 *   - 'bold': 굵은 글꼴
 *   - 'extraBold': 매우 굵은 글꼴
 * @param {keyof typeof bds.token.typography.size} [fontSize='body'] - 텍스트의 크기
 *   - 'xs': 아주 작은 크기
 *   - 'sm': 작은 크기
 *   - 'body': 본문 크기 (기본값)
 *   - 'lg': 큰 크기
 *   - 'xl': 아주 큰 크기
 *   - 'h1'~'h6': 제목 크기
 * @param {keyof typeof bds.color.text} [color='base'] - 텍스트의 색상
 *   - 'base': 기본 색상 (기본값)
 *   - 'primary': 주요 색상
 *   - 'secondary': 보조 색상
 *   - 'disabled': 비활성화 색상
 *   - 'error': 오류 색상
 *   - 'success': 성공 색상
 *
 * @link https://teambuzzle.github.io/bds/?path=/docs/bds-buzzle-design-system-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-atoms-text--docs BDS Text 문서
 * @link https://mui.com/material-ui/api/typography/ MUI Typography API
 */
export const Text: TextComponent = ({
	gradient,
	fontWeight = 'regular',
	fontSize = 'body',
	color = 'base',
	...props
}) => {
	return (
		<Typography
			className={gradient ? 'gradient-text' : undefined}
			sx={{
				fontFamily: bds.token.typography.family.pretendard,
				fontWeight: bds.token.typography.weight[fontWeight],
				fontSize: bds.token.typography.size[fontSize],
				color: bds.color.text[color],
				...(gradient && {
					background: 'linear-gradient(180deg, #6778ff 0%, #4cc8ff 42.38%, #9f45ef 100%)',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
					backgroundClip: 'text',
				}),
				...props.sx,
			}}
			{...props}
		/>
	);
};
