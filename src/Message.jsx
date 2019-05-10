import React, { Component } from "react";

class Message extends Component {
  render() {
    const messageStyle = {
      color: this.props.message.userColor
    };

    const regex = /\.(jpg|png|gif|jpeg)\b/;

    let isThereImage = regex.test(this.props.message.content) ? (
      <div className="image-div"><img className="image" src={this.props.message.content} /></div>
    ) : (
      <span className="message-content">{this.props.message.content}</span>
    );

    return this.props.message.type === "incomingNotification" ? (
      <div className="notification">
        <span className="notification-content">
          {this.props.message.oldName} changed their name to{" "}
          {this.props.message.name}.
        </span>
      </div>
    ) : (
      <div className="message">
        <span style={messageStyle} className="message-username">
          {this.props.message.username}
        </span>
        {isThereImage}
      </div>
    );
  }
}

export default Message;
