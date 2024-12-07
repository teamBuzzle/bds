import React from 'react';
import { BDSProvider } from '../lib/components/Provider';
import type { Preview } from '@storybook/react';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [(Story) => React.createElement(BDSProvider, null, React.createElement(Story))],
};

export default preview;
