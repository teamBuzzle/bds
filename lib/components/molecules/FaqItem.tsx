import { Box, Collapse } from '@mui/material';
import { FC, useState } from 'react';
import { Text } from '../atoms/Text';

interface Props {
	title: string;
	subtitle: string;
	content: string;
	selected?: boolean;
	onClick?: () => void;
}

export const FaqItem: FC<Props> = ({ title, subtitle, content, selected, onClick }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
		onClick?.();
	};

	return (
		<Box>
			<Box
				onClick={handleClick}
				sx={{
					p: 2.5,
					borderRadius: (theme) => theme.buzzle.borderRadius.card,
					border: (theme) => (selected ? `1px solid ${theme.palette.buzzle.main}` : '1px solid #b0b0b0'),
					bgcolor: (theme) => (selected ? theme.palette.buzzle.main : 'background.paper'),
					cursor: 'pointer',
					transition: (theme) => theme.buzzle.transitions.hover,
					'&:hover': {
						borderColor: (theme) => theme.palette.buzzle.main,
					},
				}}
			>
				<Text
					sx={{
						color: selected ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
					}}
				>
					{subtitle}
				</Text>
				<Text
					variant="h6"
					sx={{
						mt: 1,
						color: selected ? '#f9f9f9' : 'text.primary',
					}}
				>
					{title}
				</Text>
			</Box>
			<Collapse in={isOpen}>
				<Box
					sx={{
						p: 2,
						borderTop: '1px solid',
						borderColor: 'divider',
					}}
				>
					<Text>{content}</Text>
				</Box>
			</Collapse>
		</Box>
	);
};
