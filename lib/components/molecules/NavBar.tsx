import type { FC } from 'react';
import { Stack, type StackProps } from '@mui/material';
import { Link } from '@/components/atoms/Link';

export interface Props extends StackProps {
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
