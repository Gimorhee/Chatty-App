import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
import MessageList from "./MessageList.jsx";
import Chatbar from "./Chatbar.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    
    //Initial state settings.
    this.socket = undefined;
    this.state = {
      currentUser: { name: "" },
      messages: [],
      clientNumber: 0,
      userColor: ""
    };

    //Binding all the methods with "this"
    this.addMessage = this.addMessage.bind(this);
    this.addToPage = this.addToPage.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
  }

  
  componentDidMount() {
    //Connecting to websocket server
    this.socket = new WebSocket("ws://localhost:3001");

    //When connected, log connected message
    this.socket.onopen = event => {
      console.log("Connected to server");
    };

    //Handling data(message) from the websocket server
    this.socket.onmessage = message => {
      //Parsing the received data
      let clientData = JSON.parse(message.data);

      //Checking if received data has clientNumber key, if so, setting a this.state
      if(clientData.clientNumber) {
        this.setState({clientNumber: clientData.clientNumber});
        return;
      } 
      
      //Checking if received data has randomColor key, if so, setting a this.state
      if(this.state.userColor === "" && clientData.randomColor) {
        this.setState({userColor: clientData.randomColor});
        return;
      }

      const messages = JSON.parse(message.data);
      //Using addToPage method to send data to the websocket server
      this.addToPage(messages);
    };
  }

  //addToPage method: updating the messages
  addToPage(message) {
    const oldMessage = this.state.messages;
    const newMessage = [...oldMessage, message];
    this.setState({ messages: newMessage });
  }

  //addMessage method: sending the data to the server
  addMessage(message) {
    message.userColor = this.state.userColor;
    this.socket.send(JSON.stringify(message));
  }

  //updateUsername method: updating username 
  updateUsername(username) {
    this.setState({ currentUser: username });
  }

  //Passing state(props) to other components
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
