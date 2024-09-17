export type Bool = boolean | 'true';

export type BuildPropsWithSign<T extends object> = {
	[K in keyof T as K extends string ? `$${K}` : never]: T[K];
};
