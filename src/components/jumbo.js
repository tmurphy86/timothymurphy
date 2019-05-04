import React from "react";
import Rotating from "./rotatingtext.js";

export default class Jumbo extends React.Component {
  render() {
    return (
      <div className="ui inverted vertical center aligned segment">
        <div className="ui fluid container">
          <div className="ui large secondary inverted pointing menu">
            <div className="right item" />
          </div>
        </div>

        <div className="ui text container">
          <h1 className="ui inverted header">
            <Rotating />
          </h1>
          <div className="ui huge gray button">
            Contact Me
            <i className="right arrow icon" />
          </div>
        </div>
      </div>
    );
  }
}
