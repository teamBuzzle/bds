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
			extraLarge: 30,
			medium: 15,
			large: 8,
			small: 4,
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
		light: {
			large: {
				xOffset: 0,
				yOffset: 4,
				blur: 34,
				spread: 0,
				color: 'rgba(0,0,0,.5)',
			},
			medium: {
				xOffset: 0,
				yOffset: 4,
				blur: 17,
				spread: 0,
				color: 'rgba(0,0,0,.45)',
			},
			small: {
				xOffset: 0,
				yOffset: 4,
				blur: 8.5,
				spread: 0,
				color: 'rgba(0,0,0,.35)',
			},
		},
		dark: {
			large: {
				xOffset: 0,
				yOffset: 4,
				blur: 34,
				spread: 0,
				color: 'rgba(0,0,0,.5)',
			},
			medium: {
				xOffset: 0,
				yOffset: 4,
				blur: 17,
				spread: 0,
				color: 'rgba(0,0,0,.45)',
			},
			small: {
				xOffset: 0,
				yOffset: 4,
				blur: 8.5,
				spread: 0,
				color: 'rgba(0,0,0,.35)',
			},
		},
	},
} as const;

export type Token = typeof token;
