import React, { Component } from "react";
import { Card } from "semantic-ui-react";

const items = [
  {
    header: "Project Report - April",
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
    meta: "ROI: 30%"
  },
  {
    header: "Project Report - May",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination.",
    meta: "ROI: 34%"
  }
];

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
            <h3 className="ui header">Code</h3>
          </div>
          <Card.Group centered items={items} />
          <div className="ui horizontal divider">
            <h3 className="ui header">Data</h3>
          </div>
          <Card.Group centered items={items} />
          <div className="ui horizontal divider">
            <h3 className="ui header">Photography</h3>
          </div>
          <Card.Group centered items={items} />
        </div>
      </div>
    );
  }
}

export default Portfolio;
