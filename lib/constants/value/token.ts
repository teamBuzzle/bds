const xxLarge = () => token.radius.xxLarge - token.spacing.xxLarge;
const xLarge = () => token.radius.xLarge - token.spacing.xLarge;
const large = () => token.radius.large - token.spacing.large;
const medium = () => token.radius.medium - token.spacing.medium;
const small = () => token.radius.small - token.spacing.small;
const xSmall = () => token.radius.xSmall - token.spacing.xSmall;
const xxSmall = () => token.radius.xxSmall - token.spacing.xxSmall;

export const token = {
	spacing: {
		xxLarge: 48,
		xLarge: 36,
		large: 24,
		medium: 16,
		small: 8,
		xSmall: 4,
		xxSmall: 2,
	},
	radius: {
		xxLarge: 48,
		xLarge: 36,
		large: 24,
		medium: 16,
		small: 8,
		xSmall: 4,
		xxSmall: 2,
		innerRadius: {
			xxLarge,
			xLarge,
			medium,
			large,
			small,
			xSmall,
			xxSmall,
		},
	},
	borderWidth: {
		xxLarge: 6,
		xLarge: 5,
		large: 4,
		medium: 3,
		xSmall: 2,
		xxSmall: 1,
	},
} as const;

export type Token = typeof token;
