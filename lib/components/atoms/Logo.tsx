import type { ComponentType } from 'react';
import { Typography, Link, type LinkProps } from '@mui/material';
import { bds } from '@/constants';

const sizes = {
	small: { logo: { width: 123, height: 40 }, text: bds.token.typography.size.title3 },
	medium: { logo: { width: 246, height: 80 }, text: bds.token.typography.size.title2 },
	large: { logo: { width: 369, height: 120 }, text: bds.token.typography.size.title1 },
} as const;

export interface BDSLogoProps extends LinkProps {
	image?: boolean;
	size?: keyof typeof sizes;
}

type LogoComponent = ComponentType<BDSLogoProps>;

/**
 * 로고 컴포넌트
 *
 * @param {boolean} [image] - 이미지 로고 사용 여부
 * @param {keyof typeof sizes} [size='medium'] - 로고 크기
 *   - 'small': 작은 크기
 *   - 'medium': 중간 크기 (기본값)
 *   - 'large': 큰 크기
 *
 * @link https://teambuzzle.github.io/bds/?path=/docs/bds-buzzle-design-system-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-atoms-logo--docs BDS Logo 문서
 * @link https://mui.com/material-ui/api/link/ MUI Link API
 */
export const Logo: LogoComponent = ({ image, size = 'medium', ...props }) => {
	const {
		logo: { width, height },
		text,
	} = sizes[size];

	if (image) {
		return (
			<Link href="/" {...props}>
				<img
					src="/images/logo.svg"
					alt="버즐 로고"
					width={width}
					height={height}
					style={{ objectFit: 'contain', userSelect: 'none' }}
				/>
			</Link>
		);
	}

	return (
		<Typography
			component={Link}
			href="/"
			sx={{
				fontSize: text,
				fontWeight: bds.token.typography.weight.bold,
				fontFamily: bds.token.typography.family.pretendard,
				color: bds.color.text.title,
				userSelect: 'none',
			}}
			{...props}
		>
			Buzzle
		</Typography>
	);
};
