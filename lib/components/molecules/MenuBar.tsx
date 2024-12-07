import { Stack, StackProps } from '@mui/material';
import { FC } from 'react';
import { Link } from '../atoms/Link';

interface MenuItem {
	label: string;
	href: string;
}

interface Props extends StackProps {
	items: MenuItem[];
}

export const MenuBar: FC<Props> = ({ items, ...props }) => {
	return (
		<Stack component="nav" direction="row" spacing={7} {...props}>
			{items.map(({ label, href }) => (
				<Link
					key={href}
					href={href}
					sx={{
						fontFamily: 'Pretendard',
						fontWeight: 300,
						fontSize: '16px',
						lineHeight: '22px',
						letterSpacing: '-0.01em',
					}}
				>
					{label}
				</Link>
			))}
		</Stack>
	);
};
