import type { ComponentType } from 'react';

/**
 * 불리언 문자열 또는 불리언 타입
 */
export type Bool = boolean | 'true' | 'false';

/**
 * 속성 이름에 $를 붙여주는 유틸리티 타입
 */
export type BuildPropsWithSign<T extends object> = {
	[K in keyof T as K extends string ? `$${K}` : never]: T[K];
};

/**
 * JSX.IntrinsicElements 또는 컴포넌트 타입
 */
export type As = {
	as?: keyof JSX.IntrinsicElements | ComponentType;
};

/**
 * 객체의 깊은 키를 가져오는 유틸리티 타입
 */
export type DeepKeyOf<T> = T extends object
	? { [K in keyof T]: `${K & string}${T[K] extends object ? `.${DeepKeyOf<T[K]>}` : ''}` }[keyof T]
	: '';
