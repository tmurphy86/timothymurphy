import React from "react";
import ReactTextRotator from "react-text-rotator";

const content = [
  {
    text: "Software Engineer",
    className: "classA",
    animation: "fade"
  },
  {
    text: "Data Scientist",
    className: "classB",
    animation: "fade"
  },
  {
    text: "Infrastructure Engineer",
    className: "classC",
    animation: "fade"
  },
  {
    text: "Leader",
    className: "classD",
    animation: "fade"
  },
  {
    text: "Life long learner",
    className: "classE",
    animation: "fade"
  }
];

export default class Rotating extends React.Component {
  render() {
    return (
      <div>
        <h3>Tim Murphy</h3>
        <h1>
          <ReactTextRotator content={content} time={5000} startDelay={2000} />
        </h1>
      </div>
    );
  }
}
