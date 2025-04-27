import { Link as MuiLink, type LinkProps } from '@mui/material';

export interface Props extends LinkProps {
	href: string;
	cta?: boolean;
	disabled?: boolean;
}

type LinkComponent = React.ComponentType<Props>;

/**
 * 링크 컴포넌트
 *
 * @param {string} href - 링크 주소
 * @param {boolean} [cta] - 컨텐츠 전달 타입 여부
 */
export const Link: LinkComponent = ({ href, cta, children, ...props }) => {
	return (
		<MuiLink href={href} {...props} className={cta ? 'buzzle-cta' : ''}>
			{children}
		</MuiLink>
	);
};
