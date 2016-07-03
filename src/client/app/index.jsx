import React from 'react';
import {render} from 'react-dom';
import TodoBoard from './TodoBoard.jsx';

require('./style.css');

class App extends React.Component {
	render () {
		return (
			<div>
				<h1>React TODO Board</h1>
				<TodoBoard />
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));