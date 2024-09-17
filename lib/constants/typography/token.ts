export const token = {
	family: {
		pretendard: 'Pretendard',
		notoSans: 'Noto Sans KR',
		gMarketSans: 'Gmarket Sans',
		sansSerif: 'sans-serif',
	},
	size: {
		largeTitle: 32,
		title1: 26,
		title2: 20,
		title3: 18,
		headline: 16,
		body: 16,
		callout: 15,
		subhead: 14,
		footnote: 12,
		caption1: 11,
		caption2: 10,
	},
	weight: {
		regular: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
	},
	lineHeight: {
		largeTitle: 38,
		title1: 32,
		title2: 25,
		title3: 23,
		headline: 21,
		body: 21,
		callout: 20,
		subhead: 19,
		footnote: 16,
		caption1: 13,
		caption2: 12,
	},
	letterSpacing: {
		main: 0,
	},
} as const;

export type Token = typeof token;
