import { Link as MuiLink, LinkProps } from '@mui/material';
import { FC } from 'react';

interface Props extends LinkProps {
	href: string;
}

export const Link: FC<Props> = ({ href, children, ...props }) => {
	return (
		<MuiLink href={href} {...props}>
			{children}
		</MuiLink>
	);
};
