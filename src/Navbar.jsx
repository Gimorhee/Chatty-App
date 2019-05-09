import React, {Component} from 'react';

class Navbar extends Component {
  render() {
    let userCount = this.props.clientNumber > 1 ? "users" : "user";
    return (
      <nav className="navbar">
      <a className="navbar-brand" href="/"><i className="far fa-comments"></i>Chatty</a> <span className="client-count">{this.props.clientNumber} {userCount} online</span>
      </nav>
    )
  }
}

export default Navbar;