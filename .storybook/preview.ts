import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

const preview: Preview = {
	parameters: {
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
