export const components = {
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
				'& .MuiOutlinedInput-root': {
					display: 'flex',
					alignItems: 'center',
					padding: '0 20px',
					flexShrink: 0,
					borderRadius: '30px',
					backgroundColor: 'rgba(85, 85, 85, 0.13)',
					fontFamily: 'Pretendard, sans-serif',
					fontSize: '16px',
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

					'&.Mui-error': {
						border: '1px solid #F34541 !important',
					},
				},
				'& .MuiFormHelperText-root': {
					marginLeft: 0,
					fontSize: '14px',
					fontFamily: 'Pretendard, sans-serif',
					color: 'rgba(255, 255, 255, 1)',
					'&.Mui-error': {
						color: '#F34541 !important',
					},
					'&.Mui-success': {
						color: '#4CAF50 !important',
					},
				},
				'& .MuiInputLabel-root': {
					fontFamily: 'Pretendard, sans-serif',
					fontSize: '16px',
					fontWeight: 700,
					color: 'rgba(255, 255, 255, 1)',
					padding: '0 7px',
					'&.Mui-focused': {
						color: '#6174fb',
						transform: 'translate(14px, -9px) scale(0.75)',
						backgroundColor: '#1A1A1A',
						border: '1px solid #6174fb',
						borderRadius: '10px',
						padding: '0 10px',
					},
					'&:not(.Mui-focused).MuiFormLabel-filled': {
						color: 'rgba(255, 255, 255, 0.5)',
						transform: 'translate(14px, -9px) scale(0.75)',
						backgroundColor: '#1A1A1A',
						border: '1px solid rgba(255, 255, 255, 0.5)',
						borderRadius: '10px',
						padding: '0 10px',
					},
				},
				'& .MuiInputBase-input': {
					'&::placeholder': {
						color: 'rgba(255, 255, 255, 0.5)',
						opacity: 1,
						fontFamily: 'Pretendard, sans-serif',
						fontSize: '16px',
						fontWeight: 700,
						lineHeight: '36px',
					},
				},
				'& .MuiInputAdornment-root': {
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
		defaultProps: {
			disableElevation: true,
		},
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
				outline: 'none',
				boxShadow: 'none',
				flexShrink: 0,
				transition: 'opacity 0.2s ease-in-out',
				'&:hover': {
					opacity: 0.5,
					cursor: 'pointer',
					boxShadow: 'none',
				},
				variants: [
					{
						props: { variant: 'contained' },
						style: {
							background: 'rgba(97, 116, 251, 1)',
							color: 'rgba(242, 242, 242, 1)',
							border: 'none',
							'&:hover': {
								background: 'rgba(97, 116, 251, 1)',
							},
						},
					},
					{
						props: { variant: 'outlined' },
						style: {
							background: 'transparent',
							border: '1px solid rgba(97, 116, 251, 1)',
							color: 'rgba(97, 116, 251, 1)',
							'&:hover': {
								background: 'transparent',
								border: '1px solid rgba(97, 116, 251, 1)',
							},
						},
					},
					{
						props: { size: 'large' },
						style: {
							minWidth: '160px',
							padding: '18px 32px',
							fontSize: '18px',
						},
					},
					{
						props: { size: 'small' },
						style: {
							width: '68px',
							height: '34px',
							minWidth: 'unset',
							padding: '0',
							fontSize: '14px',
							border: '2px solid rgba(97, 116, 251, 1)',
						},
					},
				],
			},
		},
	},
};
