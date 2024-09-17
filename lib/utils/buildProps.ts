import type { BuildPropsWithSign } from '@/types';

/**
 * 컴포넌트 속성에 사인을 붙이는 함수
 * @param props 컴포넌트 속성
 * @returns 사인이 붙은 컴포넌트 속성
 */
export const buildPropsWithSign = <T extends object>(props: T): BuildPropsWithSign<T> => {
	const propsWithSign = Object.keys(props).reduce<Record<string, unknown>>((acc, key) => {
		if (
			key.startsWith('$') ||
			key.startsWith('on') ||
			key === 'children' ||
			key === 'className' ||
			key === 'style'
		) {
			acc[key] = props[key as keyof T];
		} else {
			acc[`$${key}`] = props[key as keyof T];
		}
		return acc;
	}, {});

	return propsWithSign as BuildPropsWithSign<T>;
};
