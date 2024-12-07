import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface TypeBackground {
		comment: {
			customer: string;
			admin: string;
		};
	}
}

const theme = createTheme({
	palette: {
		primary: {
			main: '#6174fb',
		},
		secondary: {
			main: '#f9f9f9',
		},
		error: {
			main: '#F34541',
		},
		success: {
			main: '#4CAF50',
		},
		text: {
			primary: '#000000',
			secondary: '#666666',
		},
		background: {
			default: '#FFFFFF',
			paper: '#F5F5F5',
			comment: {
				customer: 'rgba(0, 0, 0, 0.05)',
				admin: 'rgba(13, 121, 255, 0.1)',
			},
		},
	},
	shape: {
		borderRadius: 8,
	},
});

export default theme;
