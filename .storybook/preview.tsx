import React from 'react';
import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createElement } from 'react';
import { bdsTheme } from '../lib/constants';
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
