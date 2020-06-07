import React, { Component } from "react";
import { Jumbo } from "../components";
import "./main.css";

class Home extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <Jumbo className="jumbotron" />
      </div>
    );
  }
}

export default Home;
