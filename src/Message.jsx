import React, {Component} from 'react';

// class Message extends Component {
//   render() {
//     return (
//       <main className="messages">
//         <div className="message">
//           <span className="message-username">Anonymous1</span>
//           <span className="message-content">I won't be impressed with technology until I can download food.</span>
//         </div>
//         <div className="message system">
//           Anonymous1 changed their name to nomnom.
//         </div>
//       </main>
//     )
//   }
// }

const Message = ({message}) => {
  return message.type === "incomingMessage" ? (
    <div className="message">
      <span className="message-username"> {message.username} </span>
      <span className="message-content"> {message.content} </span>
    </div>
  ) : (
    <div className="message system">
      {message.content}
    </div>
  )
}

export default Message;