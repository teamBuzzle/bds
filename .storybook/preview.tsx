import React, { createElement } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { themes } from '@storybook/theming';
import { bdsTheme, bds } from '../lib/constants';
import type { Preview } from '@storybook/react';

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: 'dark',
			values: [
				{
					name: 'dark',
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
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<ThemeProvider theme={bdsTheme}>
				<CssBaseline />
				{createElement(Story)}
			</ThemeProvider>
		),
	],
};

export default preview;
