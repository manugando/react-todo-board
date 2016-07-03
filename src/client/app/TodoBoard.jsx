import React from 'react';
import TodoCard from './TodoCard.jsx';

class TodoBoard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			todoCards: [
				'Fare la spesa',
				'Pagare l\'affitto',
				'Passare l\'aspirapolvere',
				'Stirare'
			]
		}
		this.addTodoCard = this.addTodoCard.bind(this);
		this.renderSingleCard = this.renderSingleCard.bind(this);
		this.removeTodoCard = this.removeTodoCard.bind(this);
	}

	addTodoCard() {
		var todoCards = this.state.todoCards;
		todoCards.push('New TODO');
		this.setState({todoCards : todoCards});
	}

	removeTodoCard(i) {
		var todoCards = this.state.todoCards;
		todoCards.splice(i, 1);
		this.setState({todoCards : todoCards});
	}

	renderSingleCard(item, i) {
		return (<TodoCard onDeleteCard={this.removeTodoCard} key={i} index={i}>{item}</TodoCard>);
	}

	render() {
		return (
			<div>
				<button onClick={this.addTodoCard}>New Todo</button>
				{
					this.state.todoCards.map(this.renderSingleCard)
				}
			</div>
		);
	}

}

export default TodoBoard;