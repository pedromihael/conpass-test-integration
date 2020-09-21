import styled from 'styled-components';

const HeaderContainer = styled.div`
	height: 12vh;
	background: #1F1F1F;
	color: #FFF;
	font-family: sans-serif;
	font-size: 1.4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30px;
`;

const HeaderList = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	li {
		padding: 15px;
		margin: 5px;
		font-size: 1rem;

		a {
			text-decoration: none;
			color: inherit;
		}
	}
`;

export { HeaderContainer, HeaderList };