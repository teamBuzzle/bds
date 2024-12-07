import { Stack, StackProps } from '@mui/material';
import { FC } from 'react';
import { Link } from '../atoms/Link';

interface Props extends StackProps {
	items: Array<{
		label: string;
		href: string;
	}>;
	onItemClick?: (href: string) => void;
}

export const NavBar: FC<Props> = ({ items, onItemClick, ...props }) => {
	return (
		<Stack component="nav" direction="row" spacing={7} {...props}>
			{items.map(({ label, href }) => (
				<Link key={href} href={href} onClick={() => onItemClick?.(href)} className="nav-link">
					{label}
				</Link>
			))}
		</Stack>
	);
};
