import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Rotating from "./rotatingtext.js";

export default class Jumbo extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron className="jumbotron">
          <Container>
            <Rotating />
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
