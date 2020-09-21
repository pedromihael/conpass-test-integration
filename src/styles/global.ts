import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background: #121212;
		color: #dbdbdb;
		font-size: 1rem;
		font-family: sans-serif;
	}
`;