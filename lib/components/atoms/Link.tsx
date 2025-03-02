import type { FC } from 'react';
import { Link as MuiLink, type LinkProps } from '@mui/material';

export interface Props extends LinkProps {
	href: string;
	cta?: boolean;
	disabled?: boolean;
}

export const Link: FC<Props> = ({ href, cta, children, ...props }) => {
	return (
		<MuiLink href={href} {...props} className={cta ? 'buzzle-cta' : ''}>
			{children}
		</MuiLink>
	);
};
