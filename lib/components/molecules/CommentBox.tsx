import { Box, BoxProps } from '@mui/material';
import { FC } from 'react';
import { Text } from '../atoms/Text';

interface Props extends BoxProps {
	type: 'admin' | 'customer';
	author?: string;
	content: string;
	date: string;
}

export const CommentBox: FC<Props> = ({ type, author, content, date, ...props }) => {
	return (
		<Box
			sx={{
				p: 2,
				minHeight: '105px',
				display: 'flex',
				flexDirection: 'column',
				gap: '10px',
				bgcolor: () => (type === 'admin' ? 'rgba(13, 121, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'),
				borderRadius: '8px',
				fontFamily: 'Pretendard, sans-serif',
				...props.sx,
			}}
			{...props}
		>
			{author && (
				<Text
					sx={{
						fontWeight: 700,
						fontSize: '16px',
						color: type === 'admin' ? '#4c65e9' : '#4b4b4b',
					}}
				>
					{author}
				</Text>
			)}
			<Text sx={{ fontSize: '14px', lineHeight: '22px' }}>{content}</Text>
			<Text sx={{ color: '#727272', fontSize: '14px' }}>{date}</Text>
		</Box>
	);
};
