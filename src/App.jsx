import React, {Component} from 'react';
import Navbar from './Navbar.jsx';
import Message from './Message.jsx';
import Chatbar from './Chatbar.jsx';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <Navbar />
      <Message />
      <Chatbar />
      </div>
    );
  }
}

export default App;


