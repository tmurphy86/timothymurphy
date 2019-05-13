import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <h2 className="ui icon center aligned header">
          <img
            src="./img/bwprofile.jpg"
            alt="avatar"
            className="ui large circular image"
            style={{ width: 200 }}
          />
          <div className="content">Timothy J. Murphy</div>
        </h2>
        <div className="ui basic center aligned segment">
          <div className="ui horizontal divider">
            <div
              className="github-card"
              data-github="tmurphy86"
              data-width="400"
              data-height="150"
              data-theme="default"
            />
            <h3 className="ui header">Code</h3>
          </div>
          <div className="ui horizontal divider">
            <h3 className="ui header">Data</h3>
          </div>
          <div className="ui horizontal divider">
            <h3 className="ui header">Photography</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
