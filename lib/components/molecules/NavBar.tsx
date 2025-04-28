import type { ComponentType } from 'react';
import { Stack, type StackProps } from '@mui/material';
import { Link } from '@/components/atoms/Link';

export interface BDSNavBarProps extends StackProps {
	items: Array<{
		label: string;
		href: string;
	}>;
}

type NavBarComponent = ComponentType<BDSNavBarProps>;

/**
 * 네비게이션 바 컴포넌트
 *
 * @param {Array<{label: string, href: string}>} [items] - 네비게이션 항목 배열, 각 항목은 라벨과 링크 주소를 포함
 * @param {MouseEventHandler<HTMLAnchorElement>} [onClick] - 링크 클릭 시 실행될 이벤트 핸들러
 *
 * @link https://teambuzzle.github.io/bds/?path=/docs/bds-buzzle-design-system-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-molecules-navbar--docs BDS NavBar 문서
 * @link https://mui.com/material-ui/api/stack/ MUI Stack API
 */
export const NavBar: NavBarComponent = ({ items, ...props }) => {
	return (
		<Stack component="nav" direction="row" spacing={7} {...props}>
			{items.map(({ label, href }) => (
				<Link key={href} href={href} className="nav-link">
					{label}
				</Link>
			))}
		</Stack>
	);
};
