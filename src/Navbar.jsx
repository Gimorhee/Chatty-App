import React, {Component} from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
      <a className="navbar-brand" href="/">Chatty + {this.props.clientNumber}</a>
      </nav>
    )
  }
}

export default Navbar;