import React, { Component } from "react";

class Navbar extends Component {
  render() {
    //Checking how many users are logged in.
    let userCount = this.props.clientNumber > 1 ? "users" : "user";
    return (
      <nav className="navbar">
        <a className="navbar-brand" href="/">
          <i className="far fa-comments" />Chatty
        </a>{" "}
        <span className="client-count">
          {this.props.clientNumber} {userCount} online
        </span>
      </nav>
    );
  }
}

export default Navbar;
