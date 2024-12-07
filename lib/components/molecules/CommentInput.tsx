import { Stack } from '@mui/material';
import { FC, useState } from 'react';
import { TextArea } from '../atoms/TextArea';
import { Button } from '../atoms/Button';
import { Text } from '../atoms/Text';

interface Props {
	onSubmit?: (content: string) => void;
}

export const CommentInput: FC<Props> = ({ onSubmit }) => {
	const [value, setValue] = useState('');

	const handleSubmit = () => {
		if (value.trim() && onSubmit) {
			onSubmit(value);
			setValue('');
		}
	};

	return (
		<Stack spacing={1}>
			<TextArea
				placeholder="문의가 해결되지 않았나요? 댓글을 통해 고객센터와 상담해보세요"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				maxLength={1000}
				rows={5}
			/>
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<Text color="text.disabled">{value.length}/1000</Text>
				<Button variant="outlined" onClick={handleSubmit} sx={{ width: '68px', height: '34px' }}>
					등록
				</Button>
			</Stack>
		</Stack>
	);
};
