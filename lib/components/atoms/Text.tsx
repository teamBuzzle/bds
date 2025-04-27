import { Typography, type TypographyProps } from '@mui/material';
import { bds } from '@/constants';

export interface Props extends TypographyProps {
	gradient?: boolean;
	fontWeight?: keyof typeof bds.token.typography.weight;
	fontSize?: keyof typeof bds.token.typography.size;
	color?: keyof typeof bds.color.text;
}

export const Text = ({ gradient, fontWeight = 'regular', fontSize = 'body', color = 'base', ...props }: Props) => {
	return (
		<Typography
			className={gradient ? 'gradient-text' : undefined}
			sx={{
				fontFamily: bds.token.typography.family.pretendard,
				fontWeight: bds.token.typography.weight[fontWeight],
				fontSize: bds.token.typography.size[fontSize],
				color: bds.color.text[color],
				...(gradient && {
					background: 'linear-gradient(180deg, #6778ff 0%, #4cc8ff 42.38%, #9f45ef 100%)',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
					backgroundClip: 'text',
				}),
				...props.sx,
			}}
			{...props}
		/>
	);
};
