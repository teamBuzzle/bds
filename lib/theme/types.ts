import '@mui/material/styles';

declare module '@mui/material/styles' {
	interface TypeBackground {
		comment: {
			admin: string;
			customer: string;
		};
	}

	interface Theme {
		buzzle: {
			borderRadius: {
				card: number;
			};
		};
	}

	interface ThemeOptions {
		buzzle?: {
			borderRadius?: {
				card?: number;
			};
		};
	}
}
