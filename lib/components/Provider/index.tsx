import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import type { FC, PropsWithChildren } from 'react';

declare module '@mui/material/styles' {
	interface Theme {
		buzzle: {
			borderRadius: {
				card: string | number;
			};
			transitions: {
				hover: string;
			};
		};
	}
	interface ThemeOptions {
		buzzle?: {
			borderRadius?: {
				card?: string | number;
			};
			transitions?: {
				hover?: string;
			};
		};
	}
	interface Palette {
		buzzle: {
			main: string;
		};
		background: {
			comment: {
				admin: string;
				customer: string;
			};
		};
	}
	interface PaletteOptions {
		buzzle?: {
			main?: string;
		};
		background?: {
			comment?: {
				admin?: string;
				customer?: string;
			};
		};
	}
	interface TypeBackground {
		comment: {
			admin: string;
			customer: string;
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
		buzzle: {
			main: '#6174fb',
		},
		background: {
			comment: {
				admin: '#F5F6FF',
				customer: '#F9F9F9',
			},
		},
	},
	buzzle: {
		borderRadius: {
			card: 8,
		},
		transitions: {
			hover: 'all 0.2s ease-in-out',
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					fontFamily: 'Pretendard, sans-serif',
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					width: '100%',
					height: 'auto',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					gap: '7px',
					'& .MuiOutlinedInput-root': {
						width: '547px',
						height: '52px',
						display: 'flex',
						alignItems: 'center',
						gap: '10px',
						padding: '0 20px',
						flexShrink: 0,
						borderRadius: '30px',
						backgroundColor: 'rgba(85, 85, 85, 0.13)',
						fontFamily: 'Pretendard, sans-serif',
						fontSize: '16px',
						lineHeight: '36px',
						color: 'rgba(255, 255, 255, 1)',
						'& fieldset': {
							border: 'none',
						},
						'&:hover fieldset': {
							border: 'none',
						},
						'&.Mui-focused fieldset': {
							border: 'none',
						},
					},
					'& .MuiInputLabel-root': {
						fontFamily: 'Pretendard, sans-serif',
						fontSize: '16px',
						fontWeight: 700,
						lineHeight: '36px',
						color: 'rgba(255, 255, 255, 1)',
						'&.Mui-focused': {
							color: 'rgba(255, 255, 255, 1)',
						},
					},
					'& .MuiInputBase-input': {
						padding: 0,
						height: 'auto',
						flexGrow: 1,
						'&::placeholder': {
							color: 'rgba(255, 255, 255, 1)',
							opacity: 1,
							fontFamily: 'Pretendard, sans-serif',
							fontSize: '16px',
							fontWeight: 700,
							lineHeight: '36px',
						},
					},
					'& .MuiInputAdornment-root': {
						width: '24px',
						height: '24px',
						display: 'flex',
						alignItems: 'flex-start',
						flexShrink: 0,
						position: 'relative',
						overflow: 'hidden',
					},
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					minWidth: '120px',
					width: 'auto',
					height: 'auto',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '10px',
					padding: '15px 24px',
					borderRadius: '111px',
					fontFamily: 'Pretendard, sans-serif',
					fontWeight: 700,
					fontSize: '16px',
					lineHeight: '24px',
					textTransform: 'none',
					outline: 'none',
					boxShadow: 'none',
					flexShrink: 0,
					transition: 'opacity 0.2s ease-in-out',
					'&:hover': {
						opacity: 0.5,
						cursor: 'pointer',
						boxShadow: 'none',
					},
					'@media (max-width: 768px)': {
						fontSize: '14px',
						padding: '12px 20px',
						minWidth: '100px',
					},
				},
				contained: {
					background: 'rgba(97, 116, 251, 1)',
					color: 'rgba(242, 242, 242, 1)',
					border: 'none',
					'&:hover': {
						background: 'rgba(97, 116, 251, 1)',
					},
				},
				outlined: {
					background: 'transparent',
					border: '1px solid rgba(97, 116, 251, 1)',
					color: 'rgba(97, 116, 251, 1)',
					'&:hover': {
						background: 'transparent',
						border: '1px solid rgba(97, 116, 251, 1)',
					},
				},
				sizeLarge: {
					minWidth: '160px',
					padding: '18px 32px',
					fontSize: '18px',
					'@media (max-width: 768px)': {
						padding: '15px 24px',
						fontSize: '16px',
					},
				},
				sizeSmall: {
					width: '68px',
					height: '34px',
					minWidth: 'unset',
					padding: '0',
					fontSize: '14px',
					border: '2px solid rgba(97, 116, 251, 1)',
				},
			},
		},
	},
	typography: {
		fontFamily: 'Pretendard, sans-serif',
	},
});

export const BDSProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
