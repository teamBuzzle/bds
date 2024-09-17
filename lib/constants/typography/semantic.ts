import { token } from './token';

export const semantic = {
	logo: {
		base: {
			fontSize: token.size.largeTitle,
			lineHeight: token.lineHeight.largeTitle,
			letterSpacing: token.letterSpacing.main,
			fontWeight: token.weight.bold,
			fontFamily: `${token.family.gMarketSans}, ${token.family.sansSerif}`,
		},
	},
	title: {
		largeTitle: {
			fontSize: token.size.largeTitle,
			lineHeight: token.lineHeight.largeTitle,
			letterSpacing: token.letterSpacing.main,
			fontWeight: token.weight.bold,
			fontFamily: `${token.family.pretendard}, ${token.family.notoSans}, ${token.family.sansSerif}`,
		},
		base: {
			fontSize: token.size.title1,
			lineHeight: token.lineHeight.title1,
			letterSpacing: token.letterSpacing.main,
			fontWeight: token.weight.bold,
			fontFamily: `${token.family.pretendard}, ${token.family.notoSans}, ${token.family.sansSerif}`,
		},
		small: {
			fontSize: token.size.title2,
			lineHeight: token.lineHeight.title2,
			letterSpacing: token.letterSpacing.main,
			fontWeight: token.weight.semibold,
			fontFamily: `${token.family.pretendard}, ${token.family.notoSans}, ${token.family.sansSerif}`,
		},
	},
	text: {
		base: {
			fontSize: token.size.body,
			lineHeight: token.lineHeight.body,
			letterSpacing: token.letterSpacing.main,
			fontWeight: token.weight.regular,
			fontFamily: `${token.family.pretendard}, ${token.family.notoSans}, ${token.family.sansSerif}`,
		},
		small: {
			fontSize: token.size.subhead,
			lineHeight: token.lineHeight.subhead,
			letterSpacing: token.letterSpacing.main,
			fontWeight: token.weight.regular,
			fontFamily: `${token.family.pretendard}, ${token.family.notoSans}, ${token.family.sansSerif}`,
		},
	},
	caption: {
		base: {
			fontSize: token.size.caption1,
			lineHeight: token.lineHeight.caption1,
			letterSpacing: token.letterSpacing.main,
			fontWeight: token.weight.regular,
			fontFamily: `${token.family.pretendard}, ${token.family.notoSans}, ${token.family.sansSerif}`,
		},
		small: {
			fontSize: token.size.caption2,
			lineHeight: token.lineHeight.caption2,
			letterSpacing: token.letterSpacing.main,
			fontWeight: token.weight.regular,
			fontFamily: `${token.family.pretendard}, ${token.family.notoSans}, ${token.family.sansSerif}`,
		},
	},
	button: {
		base: {
			fontSize: token.size.body,
			lineHeight: token.lineHeight.body,
			letterSpacing: token.letterSpacing.main,
			fontWeight: token.weight.medium,
			fontFamily: `${token.family.pretendard}, ${token.family.notoSans}, ${token.family.sansSerif}`,
		},
	},
	label: {
		base: {
			fontSize: token.size.body,
			lineHeight: token.lineHeight.body,
			letterSpacing: token.letterSpacing.main,
			fontWeight: token.weight.medium,
			fontFamily: `${token.family.pretendard}, ${token.family.notoSans}, ${token.family.sansSerif}`,
		},
	},
	link: {
		base: {
			fontSize: token.size.body,
			lineHeight: token.lineHeight.body,
			letterSpacing: token.letterSpacing.main,
			fontWeight: token.weight.medium,
			fontFamily: `${token.family.pretendard}, ${token.family.notoSans}, ${token.family.sansSerif}`,
			textDecoration: 'none',
		},
	},
	headline: {
		base: {
			fontSize: token.size.headline,
			lineHeight: token.lineHeight.headline,
			letterSpacing: token.letterSpacing.main,
			fontWeight: token.weight.semibold,
			fontFamily: `${token.family.pretendard}, ${token.family.notoSans}, ${token.family.sansSerif}`,
		},
	},
	callout: {
		base: {
			fontSize: token.size.callout,
			lineHeight: token.lineHeight.callout,
			letterSpacing: token.letterSpacing.main,
			fontWeight: token.weight.medium,
			fontFamily: `${token.family.pretendard}, ${token.family.notoSans}, ${token.family.sansSerif}`,
		},
	},
	footnote: {
		base: {
			fontSize: token.size.footnote,
			lineHeight: token.lineHeight.footnote,
			letterSpacing: token.letterSpacing.main,
			fontWeight: token.weight.regular,
			fontFamily: `${token.family.pretendard}, ${token.family.notoSans}, ${token.family.sansSerif}`,
		},
	},
	input: {
		base: {
			fontSize: token.size.body,
			lineHeight: token.lineHeight.body,
			letterSpacing: token.letterSpacing.main,
			fontWeight: token.weight.regular,
			fontFamily: `${token.family.pretendard}, ${token.family.notoSans}, ${token.family.sansSerif}`,
		},
	},
} as const;
