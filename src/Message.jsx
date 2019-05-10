import React, { Component } from "react";

class Message extends Component {
  render() {

    //Setting user color
    const messageStyle = {
      color: this.props.message.userColor
    };

    //Setting regular expression for image URLs
    const regex = /\.(jpg|png|gif|jpeg)\b/;

    //Checking if there is URLs (as an input) and handling differently
    let isThereImage = regex.test(this.props.message.content) ? (
      <div className="image-div"><img className="image" src={this.props.message.content} /></div>
    ) : (
      <span className="message-content">{this.props.message.content}</span>
    );
    
    //Checking the type of the data and handling differently accordingly
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
