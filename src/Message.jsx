import React, { Component } from "react";

class Message extends Component {
  render() {

    const messageStyle = {
      color: this.props.message.userColor
    }
    
    // console.log(this.props.message)
    return this.props.message.type === "incomingNotification" ? (
      <div className="notification">
        <span className="notification-content">
          {this.props.message.oldName} changed their name to {this.props.message.name}.
        </span>
      </div>
    ) : (
      <div className="message">
        <span style={messageStyle} className="message-username">{this.props.message.username}</span>
        <span className="message-content">{this.props.message.content}</span>
      </div>
    );
  }
}

export default Message;
