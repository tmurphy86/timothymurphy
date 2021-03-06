import React, { Component } from "react";
import { Timeline } from ".././components";

class History extends Component {
  render() {
    return (
      <div>
        <h2 class="ui icon center aligned header">
          <img
            src="./img/bwprofile.jpg"
            alt="avatar"
            className="ui large circular image"
            style={{ width: 200 }}
          />
          <div class="content">Timothy J. Murphy</div>
        </h2>
        <Timeline />
      </div>
    );
  }
}

export default History;
