import type { ComponentType } from 'react';

export type Bool = boolean | 'true' | 'false';

export type BuildPropsWithSign<T extends object> = {
	[K in keyof T as K extends string ? `$${K}` : never]: T[K];
};

export type As = {
	as?: keyof JSX.IntrinsicElements | ComponentType;
};
