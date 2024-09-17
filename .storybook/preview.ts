import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { bds } from '../lib/constants';

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: 'dark',
			values: [
				{
					name: 'dark',
					value: bds.color.background.elevated,
				},
				{
					name: 'light',
					value: bds.color.background.elevated,
				},
			],
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
			disableSaveFromUI: true,
		},
		docs: {
			theme: themes.dark,
		},
	},
};

export default preview;
