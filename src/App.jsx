import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
import MessageList from "./MessageList.jsx";
import Chatbar from "./Chatbar.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.socket = undefined
    this.state = {
      currentUser: { name: "Danny" },
      messages: []
    };
    this.addMessage = this.addMessage.bind(this);
  }

  componentDidMount() {
    this.socket = new WebSocket("ws://localhost:3001");

    this.socket.onopen = (event) => {
      console.log("Connected to server");
    }

    this.socket.onmessage = (message) => {
      messages = JSON.parse(message)
      console.log(messages.data)
      
      // this.addMessage(messages)
    }
  }

  addMessage(message) {
    // const oldMessage = this.state.messages;
    // const newMessage = [...oldMessage, message];
    // this.setState({ messages: newMessage });

    this.socket.send(JSON.stringify(message))
  }

  render() {
    return (
      <div>
        <Navbar />
        <MessageList messages={this.state.messages} />
        <Chatbar
          currentUser={this.state.currentUser}
          addMessage={this.addMessage}
        />
      </div>
    );
  }
}


export default App;
