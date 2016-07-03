import React from 'react';

class TodoCard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			editing: false
		};
		
		this.updateCardText = this.updateCardText.bind(this);
		this.setCardCompleted = this.setCardCompleted.bind(this);
		this.editCard = this.editCard.bind(this);
		this.deleteCard = this.deleteCard.bind(this);
	}

	render() {
		if(this.props.completed) {
			return this.renderCompleted();
		} else if(this.state.editing) {
			return this.renderEditing();
		} else {
			return this.renderNormal();
		}
	}


	deleteCard() {
		this.props.onDeleteCard(this.props.index);
	}

	editCard() {
		this.setState({editing : true});
	}

	updateCardText() {
		this.setState({editing : false});
		this.props.onUpdateCardText(this.refs.textarea.value, this.props.index);
	}

	setCardCompleted() {
		this.props.onSetCardCompleted(this.props.index);
	}

	renderNormal() {
		return (
			<div>
				<h2>{this.props.children}</h2>
				<button onClick={this.setCardCompleted}>Completed</button><button onClick={this.editCard}>Edit</button><button onClick={this.deleteCard}>Delete</button>
			</div>

		);
	}

	renderCompleted() {
		return (
			<div>
				<h2>{this.props.children} - COMPLETED</h2>
				<button onClick={this.deleteCard}>Delete</button>
			</div>
		);
	}

	renderEditing() {
		return (
			<div>
				<br/>
				<textarea ref="textarea" defaultValue={this.props.children}></textarea><br/>
				<button onClick={this.updateCardText}>Save</button>
			</div>

		);
	}

}

export default TodoCard;