import type { ComponentType } from 'react';
import { Link as MuiLink, type LinkProps } from '@mui/material';

export interface BDSLinkProps extends LinkProps {
	href: string;
	cta?: boolean;
}

type LinkComponent = ComponentType<BDSLinkProps>;

/**
 * 링크 컴포넌트
 *
 * @param {string} href - 링크 주소
 * @param {boolean} [cta] - 컨텐츠 전달 타입 여부
 *
 * @link https://teambuzzle.github.io/bds/?path=/docs/bds-buzzle-design-system-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-atoms-link--docs BDS Link 문서
 * @link https://mui.com/material-ui/api/link/ MUI Link API
 */
export const Link: LinkComponent = ({ href, cta, children, ...props }) => {
	return (
		<MuiLink href={href} {...props} className={cta ? 'buzzle-cta' : ''}>
			{children}
		</MuiLink>
	);
};
