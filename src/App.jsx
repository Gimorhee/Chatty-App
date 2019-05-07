import React, {Component} from 'react';
import Navbar from './Navbar.jsx';
import MessageList from './MessageList.jsx';
import Chatbar from './Chatbar.jsx';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
    currentUser: {name: "Bob"},
    messages: [
    {
      id: 1,
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      id: 2,
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
    ]

  }
  this.addMessage = this.addMessage.bind(this);
}

componentDidMount() {
  console.log("componentDidMount <App />");
  setTimeout(() => {
    console.log("Simulating incoming message");
    // Add a new message to the list of messages in the data store
    const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    const messages = this.state.messages.concat(newMessage)
    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.
    this.setState({messages: messages})
  }, 3000);
}

addMessage(message) {
  const oldMessage = this.state.messages;
  const newMessage = [...oldMessage, message];
  this.setState({messages: newMessage});
}

  render() {
    return (
      <div>
        <Navbar />
        <MessageList messages={this.state.messages}/>
        <Chatbar currentUser={this.state.currentUser} addMessage={this.addMessage} />
      </div>
    );
  }
}

export default App;


