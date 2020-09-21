import React from 'react';
import { CardContainer, CardHeader, CardBody } from './styles';

interface Props {
	title: string,
	items: string[]
}

const Card: React.FC<Props> = ({ title, items }) => {
	return (
		<CardContainer>
			<CardHeader >
				{title}
			</CardHeader>
			<CardBody>
				<ul>
					{items.map(item => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</CardBody>
		</CardContainer>
	);
}

export default Card;