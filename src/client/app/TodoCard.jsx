import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import {green500} from 'material-ui/styles/colors';

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
		this.props.onUpdateCardText(this.refs.textarea.getValue(), this.props.index);
	}

	setCardCompleted() {
		this.props.onSetCardCompleted(this.props.index);
	}

	renderNormal() {
		return (
			<Card className="TodoCard" >
				<CardTitle 
					title={this.props.children} 
				/>
				<CardActions>
					<FlatButton label="Done" onTouchTap={this.setCardCompleted} />
					<FlatButton label="Edit" onTouchTap={this.editCard} />
					<FlatButton label="Delete" onTouchTap={this.deleteCard} />
				</CardActions>
			</Card>
		);
	}

	renderCompleted() {
		return (
			<Card className="TodoCard" style={{ backgroundColor : green500 }} >
				<CardTitle 
					title={this.props.children} 
				/>
				<CardActions>
					<FlatButton label="Done" disabled={true} onTouchTap={this.setCardCompleted} />
					<FlatButton label="Edit" disabled={true} onTouchTap={this.editCard} />
					<FlatButton label="Delete" onTouchTap={this.deleteCard} />
				</CardActions>
			</Card>
		);
	}

	renderEditing() {
		return (
			<Card className="TodoCard">
				<CardText>
					<TextField
						ref="textarea"
						defaultValue={this.props.children}
					/>
				</CardText>
				<CardActions>
					<FlatButton label="Done" onTouchTap={this.setCardCompleted} />
					<FlatButton label="Save" onTouchTap={this.updateCardText} />
					<FlatButton label="Delete" onTouchTap={this.deleteCard} />
				</CardActions>
			</Card>
		);
	}

}

export default TodoCard;