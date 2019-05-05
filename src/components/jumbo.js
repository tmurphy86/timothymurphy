import React from "react";
import Rotating from "./rotatingtext.js";

export default class Jumbo extends React.Component {
  render() {
    return (
      <div
        className="ui inverted vertical center aligned segment"
        style={{
          minHeight: window.screen.height,
          minWidth: window.screen.width,
          backgroundImage: "url(" + "./img/profilepic.jpg" + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
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
