import { token } from './token';

export const semantic = {
	background: {
		base: token.gray.gray080,
		elevated: token.gray.gray070,
	},
	button: {
		base: token.tint.service.buzzleLanding,
		hover: token.tint.main.indigo050,
		active: token.tint.main.indigo060,
		disabled: token.gray.gray060,
		selected: token.tint.main.indigo060,
	},
	text: {
		title: token.gray.gray005,
		base: token.gray.gray010,
		summary: token.gray.gray020,
		subtitle: token.black,
		subBase: token.gray.gray080,
		subSummary: token.gray.gray060,
		placeholder: token.gray.gray040,
		disabled: token.gray.gray060,
		link: token.tint.main.indigo050,
		linkHover: token.tint.main.indigo060,
		linkActive: token.tint.main.indigo070,
		linkDisabled: token.gray.gray060,
		linkSelected: token.tint.main.indigo060,
		linkSub: token.gray.gray005,
		linkSubHover: token.gray.gray010,
		linkSubActive: token.gray.gray020,
		linkSubDisabled: token.gray.gray060,
		linkSubSelected: token.gray.gray005,
	},
	border: {
		base: token.gray.gray060,
		hover: token.gray.gray050,
		active: token.gray.gray040,
		disabled: token.gray.gray060,
		selected: token.gray.gray060,
	},
	icon: {
		base: token.gray.gray005,
		hover: token.gray.gray010,
		active: token.gray.gray020,
		disabled: token.gray.gray060,
		selected: token.gray.gray005,
	},
	shadow: {
		base: token.black,
	},
	line: {
		base: token.gray.gray060,
		hover: token.gray.gray050,
		active: token.gray.gray040,
		disabled: token.gray.gray060,
		selected: token.gray.gray060,
	},
} as const;
