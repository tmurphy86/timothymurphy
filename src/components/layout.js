import React from "react";
import { push as Menu } from "react-burger-menu";
// import "./layout.css";

var styles = {
  bmBurgerBars: {
    background: "white"
  },
  bmBurgerBarsHover: {
    background: "#a90000"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenu: {
    background: "light gray",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};
export default class Layout extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="outer-container">
        <Menu
          width={"30%"}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          isOpen={false}
          styles={styles}
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
          <div
            class="LI-profile-badge"
            data-version="v1"
            data-size="medium"
            data-locale="en_US"
            data-type="vertical"
            data-theme="dark"
            data-vanity="techmurphy"
          >
            <a
              className="LI-simple-link"
              href="https://www.linkedin.com/in/techmurphy?trk=profile-badge"
            >
              Timothy Murphy
            </a>
          </div>
        </Menu>
        <main id="page-wrap">
          <div>{this.props.children}</div>
        </main>
      </div>
    );
  }
}
