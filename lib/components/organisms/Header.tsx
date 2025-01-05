import type { FC } from 'react';
import { Button } from '@mui/material';
import { Text } from '@/components/atoms/Text';

export const Header: FC = () => {
	return (
		<header>
			<Text variant="h1">Welcome to Our Application</Text>
			<Button variant="contained">Get Started</Button>
		</header>
	);
};
