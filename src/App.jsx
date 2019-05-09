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
      messages: [],
      clientNumber: 0,
      userColor: ""
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

    console.log(this.state)

    this.socket.onmessage = message => {
      let clientData = JSON.parse(message.data);
      if(clientData.clientNumber) {
        this.setState({clientNumber: clientData.clientNumber});
        return;
      } 
      
      if(this.state.userColor === "" && clientData.randomColor) {
        console.log(`this is clientdata.randomcolor`,clientData.randomColor)
        this.setState({userColor: clientData.randomColor});
        return;
      }

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
    message.userColor = this.state.userColor;
    this.socket.send(JSON.stringify(message));
  }

  updateUsername(username) {
    this.setState({ currentUser: username });
  }

  render() {
    return (
      <div>
        <Navbar clientNumber={this.state.clientNumber}/>
        <MessageList messages={this.state.messages}/>
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
