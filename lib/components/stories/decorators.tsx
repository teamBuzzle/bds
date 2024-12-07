import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from '@/theme';
import React from 'react';
import type { StoryFn } from '@storybook/react';

export const withTheme = (Story: StoryFn) => (
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<Story />
	</ThemeProvider>
);
