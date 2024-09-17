import { token } from './token';

export const semantic = {
	container: {
		paddingY: token.spacing.large,
		paddingX: token.spacing.medium,
		spacing: token.spacing.medium,
	},
	card: {
		paddingY: token.spacing.medium,
		paddingX: token.spacing.medium,
		radius: token.radius.medium,
		borderWidth: token.borderWidth.xxSmall,
		spacing: token.spacing.small,
		img: {
			radius: token.radius.innerRadius.medium(),
		},
		button: {
			paddingY: token.spacing.small,
			paddingX: token.spacing.medium,
			radius: token.radius.innerRadius.medium(),
		},
		paper: {
			radius: token.radius.innerRadius.medium(),
		},
	},
	box: {
		spacing: token.spacing.small,
		radius: token.radius.medium,
		borderWidth: token.borderWidth.xxSmall,
		padding: token.spacing.medium,
	},
	button: {
		paddingY: token.spacing.small,
		paddingX: token.spacing.medium,
		radius: token.radius.medium,
		spacing: token.spacing.small,
	},
	list: {
		spacing: token.spacing.small,
		radius: token.radius.medium,
		borderWidth: token.borderWidth.xxSmall,
	},
	inputForm: {
		spacing: token.spacing.xLarge,
		input: {
			radius: token.spacing.small,
		},
	},
	modal: {
		spacing: token.spacing.medium,
		radius: token.radius.medium,
		borderWidth: token.borderWidth.xxSmall,
		img: {
			radius: token.radius.innerRadius.medium(),
		},
		button: {
			paddingY: token.spacing.small,
			paddingX: token.spacing.medium,
			radius: token.radius.innerRadius.medium(),
		},
	},
} as const;
