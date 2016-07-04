import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TodoBoard from './TodoBoard.jsx';

require('./style.css');

class App extends React.Component {
	render () {
		return (
			<MuiThemeProvider>
				<TodoBoard />
			</MuiThemeProvider>
		);
	}
}

injectTapEventPlugin();
render(<App/>, document.getElementById('app'));