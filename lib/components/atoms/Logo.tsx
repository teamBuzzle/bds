import { Stack, Typography } from '@mui/material';
import { FC } from 'react';

const sizes = {
	small: { logo: 36, text: '24px' },
	medium: { logo: 48, text: '32px' },
	large: { logo: 60, text: '40px' },
} as const;

interface Props {
	size?: keyof typeof sizes;
}

export const Logo: FC<Props> = ({ size = 'medium' }) => {
	const { logo, text } = sizes[size];

	return (
		<Stack direction="row" alignItems="center" spacing={1}>
			<img src="/images/logo.svg" alt="버즐 로고" width={logo} height={logo} style={{ objectFit: 'contain' }} />
			<Typography
				className="logo-text"
				sx={{
					fontSize: text,
					background: 'linear-gradient(180deg, #6778ff 0%, #4cc8ff 42.38%, #9f45ef 100%)',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
					backgroundClip: 'text',
				}}
			>
				buzzle
			</Typography>
		</Stack>
	);
};
