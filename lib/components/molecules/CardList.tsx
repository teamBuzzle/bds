import type { FC } from 'react';
import { Card } from './Card';

interface CardItem {
	id: string;
	title: string;
	content: string;
}

interface Props {
	items: CardItem[];
}

export const CardList: FC<Props> = ({ items }) => {
	return (
		<div>
			{items.map((item) => (
				<Card key={item.id} selected>
					<h2>{item.title}</h2>
					<p>{item.content}</p>
				</Card>
			))}
		</div>
	);
};
