import styled from 'styled-components';

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 60vh;
	width: 24vw;
	border-radius: 12px;
	background: #1F1F1F;
	color: inherit;
	font-family: inherit;
	font-size: 0.8rem;
	padding: 30px;
	margin: 24px;
`;

const CardHeader = styled.div`
	font-size: 1.2rem;
	padding-bottom: 10px;
	border-bottom: 2px solid;
	margin-bottom: 25px;
`;

const CardBody = styled.div`
	ol, ul {
		padding: 15px;

		li {
			padding: 10px;
		}
	}
`;

export { CardContainer, CardHeader, CardBody };
