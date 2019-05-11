import React from "react";
import Rotating from "./RotatingText.js";
import ModalScroll from "./ModalScroll.js";

export default class Jumbo extends React.Component {
  state = {
    windowHeight: undefined,
    windowWidth: undefined
  };

  handleResize = () =>
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <div
        className="ui inverted vertical center aligned segment"
        style={{
          minHeight: this.state.windowHeight,
          minWidth: this.state.windowWidth,
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

          <div
            className="ui vertical center aligned container"
            style={{
              position: "fixed",
              bottom: "30px",
              left: "50%",
              transform: "translate(-50%, -50%)",
              margin: "0 auto"
            }}
          >
            <h1 className="ui center">Timothy J. Murphy</h1>
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
      </div>
    );
  }
}
