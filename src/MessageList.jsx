import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    //Mapping through the array of messages and sending the data to the message componenet as prop
    const messageItems = this.props.messages.map(message => (
      <Message key={message.id} message ={message}/>
    ));
    return (
      <main className="messages">
        {messageItems}
      </main>
    )
  }
}

export default MessageList;