import React from 'react';

class TodoCard extends React.Component {

	constructor(props) {
		super(props);
		this.deleteCard = this.deleteCard.bind(this);
	}

	deleteCard() {
		this.props.onDeleteCard(this.props.index);
	}

	render() {
		return (
			<div>
				<h2>{this.props.children}</h2>
				<button>Edit</button><button onClick={this.deleteCard}>Delete</button>
			</div>

		);
	}

}

export default TodoCard;