import React from 'react';
import { Header, Card } from './components';
import GlobalStyle from './styles/global';

const itemsToDo = ['task 1', 'task 2', 'task 3'];
const itemsDoing = ['task 4', 'task 5'];
const itemsDone = ['task 6'];

function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<div style={{
				height: '88vh',
				overflow: 'auto',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '30px',
			}}>
				<Card title="To Do" items={itemsToDo} />
				<Card title="Doing" items={itemsDoing} />
				<Card title="Done" items={itemsDone} />
			</div>
		</>
	);
}

export default App;