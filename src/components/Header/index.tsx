import React from 'react';
import { HeaderContainer, HeaderList } from './styles';

const Header: React.FC = () => {
	return (
		<HeaderContainer>
			Todo List
			<HeaderList>
				<li><a href="#">Edit project</a></li>
				<li><a href="#">Add colaborator</a></li>
				<b><li><a href="#">Create new projetct</a></li></b>
			</HeaderList>
		</HeaderContainer>
	);
}

export default Header;