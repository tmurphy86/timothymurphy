import React from "react";
import { push as Menu } from "react-burger-menu";

export default class Layout extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div id="outer-container">
        <Menu pageWrapId={"push"} outerContainerId={"push"} isOpen={false}>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <a onClick={this.showSettings} className="menu-item--small" href="">
            Settings
          </a>
        </Menu>
        <main id="page-wrap" />
      </div>
    );
  }
}
