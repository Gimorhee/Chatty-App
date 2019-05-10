import React, { Component } from "react";

class Chatbar extends Component {
  render() {
    //Checking if the user entered the username, if so, change the username with input. "Anonymous" if not
    let userName =
      this.props.currentUser.name.length !== 0
        ? this.props.currentUser.name
        : "Anonymous";

    //If user input some message and press enter, the data (obj) is handled with addMessage method
    const keyPress = event => {
      if (event.key === "Enter") {
        const obj = {
          type: "postMessage",
          username: userName,
          content: event.target.value
        };
        this.props.addMessage(obj);
        event.target.value = "";
      }
    };

    //If user input nickname and press enter, the data (obj) is handled with updateUsername and addMessage methods
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

    //Returning data
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
