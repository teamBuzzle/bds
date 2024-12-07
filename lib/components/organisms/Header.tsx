import { FC } from 'react';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

export const Header: FC = () => {
	return (
		<header>
			<Text variant="h1">Welcome to Our Application</Text>
			<Button variant="contained">Get Started</Button>
		</header>
	);
};
