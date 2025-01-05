import type { FC } from 'react';
import { Box, Container, Stack, Divider } from '@mui/material';
import { Link } from '@/components/atoms/Link';
import { Logo } from '@/components/atoms/Logo';
import { Text } from '@/components/atoms/Text';

export const Footer: FC = () => {
	return (
		<Box
			component="footer"
			sx={{
				width: '100%',
				bgcolor: 'background.footer',
				borderTop: '1px solid',
				borderColor: 'divider',
			}}
		>
			<Container
				sx={{
					py: 4,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 3,
				}}
			>
				<Logo size="small" />
				<Text color="base">버즐과 함께 즐겁게 서비스를 만드세요</Text>
				<Stack direction="row" spacing={1} alignItems="center">
					<Link href="/privacy" color="text.disabled">
						개인정보처리방침
					</Link>
					<Divider orientation="vertical" flexItem />
					<Link href="/terms" color="text.disabled">
						이용약관
					</Link>
				</Stack>
			</Container>
		</Box>
	);
};
