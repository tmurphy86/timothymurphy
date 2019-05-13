import React from "react";
import { slide as Menu } from "react-burger-menu";

var styles = {
  bmBurgerBars: {
    background: "Gray"
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
    background: "Gray",
    padding: "0.5em 0.3em 0",
    fontSize: "1.5em",
    opacity: "0.85"
  },
  bmItemList: {
    color: "black",
    padding: "0.8em"
  },
  bmItem: {
    padding: ".5em",
    color: "black",
    fontFamily: "Raleway",
    textAlign: "center"
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
          width={"25%"}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          isOpen={false}
          styles={styles}
        >
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="history" className="menu-item" href="/history">
            About Me
          </a>
          <a id="portfolio" className="menu-item" href="/portfolio">
            Portfolio
          </a>
          <a onClick={this.showSettings} className="menu-item--small" href="">
            Settings
          </a>
          <div
            className="LI-profile-badge"
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
