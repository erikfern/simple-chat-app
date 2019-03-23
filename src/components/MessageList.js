import React, { Component } from 'react';
import Message from './Message';
import _ from 'lodash';

class MessageList extends Component {

	//no idea what this does yet
	constructor(props){
		super(props);

    	this.state  = {
      		messages: []
    	};

    	let app = this.props.db.database().ref('messages'); //calls services from 'firebase'
    	app.on('value', snapshot => {
    		this.getData(snapshot.val());
    	});
	}

	getData(values){
		let messagesVal = values;
		let messages = _(messagesVal)
			.keys()
			.map(messageKey => {
				let cloned = _.clone(messagesVal[messageKey]);
				cloned.key = messageKey;
				return cloned;
			})
			.value();

		this.setState({
			messages: messages
		});
	}

	render(){
		let messageNodes = this.state.messages.map((message) => {
			return (
				<div className="card">
					<div className="card-content">
						<Message message = {message.message} />
					</div>
				</div>
			);
		});
		return (
			<div>
				{messageNodes} 
			</div>
		);
	}
}

export default MessageList;