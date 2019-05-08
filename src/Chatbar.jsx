import React, {Component} from 'react';

class Chatbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let userName = this.props.currentUser.name.length !== 0 ? this.props.currentUser.name : 'Anonymous';

    const keyPress = (event) =>  {
    if(event.key === "Enter") {
      const obj = {
        type: "posting message",
        username: userName,
        content: event.target.value
      }
       this.props.addMessage(obj);
       event.target.value = "";
    }
  }

    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" value={userName}/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress = {keyPress} />
      </footer>
    )
  }
}

export default Chatbar;