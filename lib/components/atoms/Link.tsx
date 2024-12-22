import { Link as MuiLink, LinkProps } from '@mui/material';
import { FC } from 'react';

interface Props extends LinkProps {
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
