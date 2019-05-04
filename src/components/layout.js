import React from "react";
import { push as Menu } from "react-burger-menu";
import "./layout.css";

export default class Layout extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div id="outer-container">
        <Menu
          width={"20%"}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          isOpen={false}
        >
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="portfolio" className="menu-item" href="/portfolio">
            Portfolio
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <a onClick={this.showSettings} className="menu-item--small" href="">
            Settings
          </a>
        </Menu>
        <main id="page-wrap">
          <div className="container fluid">{this.props.children}</div>
        </main>
      </div>
    );
  }
}
