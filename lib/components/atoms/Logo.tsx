import type { FC } from 'react';
import { Typography, Link, type LinkProps } from '@mui/material';
import { bds } from '@/constants';

const sizes = {
	small: { logo: { width: 123, height: 40 }, text: bds.token.typography.size.title3 },
	medium: { logo: { width: 246, height: 80 }, text: bds.token.typography.size.title2 },
	large: { logo: { width: 369, height: 120 }, text: bds.token.typography.size.title1 },
} as const;

interface Props extends LinkProps {
	image?: boolean;
	size?: keyof typeof sizes;
}

export const Logo: FC<Props> = ({ image, size = 'medium', ...props }) => {
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
