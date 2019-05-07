import React, {Component} from 'react';

class Message extends Component {
  render() {
    return (
      <div className="message">
        <span className="message-username">{this.props.message.username}</span>
        <span className="message-content">{this.props.message.content}</span>
      </div>
    )
  }
}

// const Message = ({message}) => {
//   return message.type === "incomingMessage" ? (
//     <div className="message">
//       <span className="message-username"> {message.username} </span>
//       <span className="message-content"> {message.content} </span>
//     </div>
//   ) : (
//     <div className="message system">
//       {message.content}
//     </div>
//   )
// }

export default Message;


