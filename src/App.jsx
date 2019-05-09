import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
import MessageList from "./MessageList.jsx";
import Chatbar from "./Chatbar.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.socket = undefined;
    this.state = {
      currentUser: { name: "" },
      messages: []
    };
    this.addMessage = this.addMessage.bind(this);
    this.addToPage = this.addToPage.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
  }

  componentDidMount() {
    this.socket = new WebSocket("ws://localhost:3001");

    this.socket.onopen = event => {
      console.log("Connected to server");
    };

    this.socket.onmessage = message => {
      const messages = JSON.parse(message.data);
      this.addToPage(messages);
    };
  }

  addToPage(message) {
    const oldMessage = this.state.messages;
    const newMessage = [...oldMessage, message];
    this.setState({ messages: newMessage });
  }

  addMessage(message) {
    this.socket.send(JSON.stringify(message));
  }

  updateUsername(username) {
    this.setState({ currentUser: username });
  }

  render() {
    return (
      <div>
        <Navbar />
        <MessageList messages={this.state.messages} />
        <Chatbar
          currentUser={this.state.currentUser}
          addMessage={this.addMessage}
          updateUsername={this.updateUsername}
        />
      </div>
    );
  }
}

export default App;
