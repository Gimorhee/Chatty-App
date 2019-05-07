import React, {Component} from 'react';

class Chatbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const keyPress = (event) =>  {
    if(event.key === "Enter") {
      const obj = {
        id: Math.floor(Math.random() * 10000),
        username: "Testing",
        content: event.target.value
      }
       this.props.addMessage(obj);
       event.target.value = "";
    }
  }

    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" value={this.props.currentUser.name}/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress = {keyPress} />
      </footer>
    )
  }
}

export default Chatbar;