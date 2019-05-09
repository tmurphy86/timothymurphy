import React from "react";
import Rotating from "./rotatingtext.js";
import ModalScroll from "./ModalScroll.js";

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
        </div>
        <div
          className="ui text container"
          style={{ position: "absolute", bottom: "10px" }}
        >
          <div class="ui buttons">
            <ModalScroll />
            <div class="or" />
            <button class="ui huge positive button">
              <i aria-hidden="true" class="download icon" />
              <a
                download
                href="/files/Timothy_Murphy_Resume.pdf"
                style={{ color: "white" }}
              >
                Download
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
