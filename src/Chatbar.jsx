import React, { Component } from "react";

class Chatbar extends Component {
  render() {
    let userName =
      this.props.currentUser.name.length !== 0
        ? this.props.currentUser.name
        : "Anonymous";

    const keyPress = event => {
      if (event.key === "Enter") {
        const obj = {
          type: "incomingMessage",
          username: userName,
          content: event.target.value
        };
        this.props.addMessage(obj);
        event.target.value = "";
      }
    };

    const enterKey = event => {
      if (event.key === "Enter") {
        let clientName = {
          type: "postNotification",
          oldName: userName,
          name: event.target.value
        };
        this.props.updateUsername(clientName);
        event.target.value = "";
        this.props.addMessage(clientName);
      }
    };

    return (
      <footer className="chatbar">
        <input
          className="chatbar-username"
          placeholder={userName}
          onKeyPress={enterKey}
        />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onKeyPress={keyPress}
        />
      </footer>
    );
  }
}

export default Chatbar;
