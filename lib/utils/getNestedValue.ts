type Split<S extends string, D extends string = '.'> = S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S];

type PathValue<T, P extends string[]> = P extends [infer K, ...infer Rest]
	? K extends keyof T
		? Rest extends string[]
			? PathValue<T[K], Rest>
			: T[K]
		: never
	: T;

/**
 * 객체에서 중첩된 속성 값을 가져옵니다.
 * @param obj 객체
 * @param path 속성 경로
 * @returns 중첩된 속성 값
 * @example
 * const obj = {
 *   a: {
 *     b: {
 *       c: 1,
 *     },
 *   },
 * };
 * getNestedValue(obj, 'a.b.c'); // number
 * getNestedValue(obj, 'a.b'); // { c: 1 }
 * getNestedValue(obj, 'a.b.d'); // undefined
 */
export const getNestedValue = <T, P extends string>(obj: T, path: P): PathValue<T, Split<P>> => {
	const pathArray = path.split('.') as Split<P>;
	return pathArray.reduce((acc, key) => {
		return acc && typeof acc === 'object' && key in acc
			? (acc as Record<string, unknown>)[key as string]
			: undefined;
	}, obj as unknown) as PathValue<T, Split<P>>;
};
