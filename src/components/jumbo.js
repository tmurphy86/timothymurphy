import React from "react";
import Rotating from "./rotatingtext.js";

export default class Jumbo extends React.Component {
  render() {
    return (
      <div
        className="ui inverted vertical masthead center aligned segment"
        height="100vh"
        width="50vh"
      >
        <div className="ui container">
          <div className="ui large secondary inverted pointing menu">
            <a className="active item">Home</a>
            <div className="right item">
              <a className="ui inverted button">Log in</a>
              <a className="ui inverted button">Sign Up</a>
            </div>
          </div>
        </div>

        <div className="ui text container">
          <h1 className="ui inverted header">
            <Rotating />
          </h1>
          <div className="ui huge primary button">
            Contact Me
            <i className="right arrow icon" />
          </div>
        </div>
      </div>
    );
  }
}
