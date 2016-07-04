import React from 'react';
import TodoCard from './TodoCard.jsx';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class TodoBoard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			todoCards: [
				{
					"text" : "Fare la spesa",
					"completed" : false
				},
				{
					"text" : "Pagare l'affitto",
					"completed" : false
				},
				{
					"text" : "Passare l'aspirapolvere",
					"completed" : false
				}
			]
		};
		this.addTodoCard = this.addTodoCard.bind(this);
		this.renderSingleCard = this.renderSingleCard.bind(this);
		this.removeTodoCard = this.removeTodoCard.bind(this);
		this.updateTodoCardText = this.updateTodoCardText.bind(this);
		this.setTodoCardCompleted = this.setTodoCardCompleted.bind(this);
	}

	addTodoCard() {
		var todoCards = this.state.todoCards;
		todoCards.unshift(
				{
					"text" : "New TODO",
					"completed" : false
				}
			);
		this.setState({todoCards : todoCards});
	}

	updateTodoCardText(newText, i) {
		var todoCards = this.state.todoCards;
		todoCards[i].text = newText;
		this.setState({todoCards : todoCards});
	}

	removeTodoCard(i) {
		var todoCards = this.state.todoCards;
		todoCards.splice(i, 1);
		this.setState({todoCards : todoCards});
	}

	setTodoCardCompleted(i) {
		var todoCards = this.state.todoCards;
		todoCards[i].completed = true;
		this.setState({todoCards : todoCards});
	}

	renderSingleCard(item, i) {
		return (
				<TodoCard 
					key={i} index={i} 
					completed={item.completed} 
					onDeleteCard={this.removeTodoCard} 
					onUpdateCardText={this.updateTodoCardText} 
					onSetCardCompleted={this.setTodoCardCompleted}>
					{item.text}
				</TodoCard>
			);
	}

	render() {
		return (
			<div>
				<AppBar
					title="Todo Board"
					showMenuIconButton={false}
					className="TodoBoardBodyHeader" />

				<div className="TodoBoardBody">
					<FloatingActionButton className="TodoBoardAddButton" onTouchTap={this.addTodoCard} >
						<ContentAdd />
					</FloatingActionButton>
						<div className="TodoCardContainer">
							{
								this.state.todoCards.map(this.renderSingleCard)
							}
						</div>
				</div>
			</div>
		);
	}

}

export default TodoBoard;