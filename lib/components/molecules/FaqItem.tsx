import { type ComponentType, type MouseEventHandler, type MouseEvent, useState } from 'react';
import { Box, Collapse } from '@mui/material';
import { Text } from '@/components/atoms/Text';

export interface BDSFaqItemProps {
	title: string;
	subtitle: string;
	content: string;
	selected?: boolean;
	onClick?: MouseEventHandler<HTMLDivElement>;
}

type FaqItemComponent = ComponentType<BDSFaqItemProps>;

/**
 * FAQ 항목 컴포넌트
 *
 * @param {string} title - 질문 제목
 * @param {string} subtitle - 질문 부제목
 * @param {string} content - 질문 내용
 * @param {boolean} [selected] - 선택된 상태 여부
 * @param {MouseEventHandler<HTMLDivElement>} [onClick] - 클릭 시 실행될 이벤트 핸들러
 *
 * @link https://teambuzzle.github.io/bds/?path=/docs/bds-buzzle-design-system-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-molecules-faqitem--docs BDS FaqItem 문서
 * @link https://mui.com/material-ui/api/box/ MUI Box API
 */
export const FaqItem: FaqItemComponent = ({ title, subtitle, content, selected, onClick }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = (event: MouseEvent<HTMLDivElement>) => {
		setIsOpen(!isOpen);
		onClick?.(event);
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
