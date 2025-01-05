import { createTheme } from '@mui/material/styles';
import { buzzle } from './buzzle';
import { components } from './components';
import { palette } from './palette';

export const bdsTheme = createTheme({
	palette,
	buzzle,
	components,
	typography: {
		fontFamily: 'Pretendard, sans-serif',
	},
});

declare module '@mui/material/styles' {
	interface Theme {
		palette: typeof palette;
		buzzle: typeof buzzle;
	}
	interface ThemeOptions {
		buzzle?: typeof buzzle;
	}
}
