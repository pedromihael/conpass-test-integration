import React from 'react';
import { HeaderContainer, HeaderList } from './styles';

const Header: React.FC = () => {
	return (
		<HeaderContainer>
			Todo List
			<HeaderList>
				<li>Edit project</li>
				<li>Add colaborator</li>
				<b><li>Create new projetct</li></b>
			</HeaderList>
		</HeaderContainer>
	);
}

export default Header;