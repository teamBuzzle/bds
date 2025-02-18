const extraLarge = () => token.radius.extraLarge - token.spacing.xLarge;
const large = () => token.radius.large - token.spacing.large;
const medium = () => token.radius.medium - token.spacing.medium;
const small = () => token.radius.small - token.spacing.small;

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
		innerRadius: {
			extraLarge,
			medium,
			large,
			small,
		},
		extraLarge: 30,
		large: 15,
		medium: 8,
		small: 4,
		round: 999,
	},
	borderWidth: {
		thick: 3,
		regular: 2,
		thin: 1,
	},
	effect: {
		
	}
} as const;

export type Token = typeof token;
