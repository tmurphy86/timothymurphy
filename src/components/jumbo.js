import React from 'react';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Rotating from './rotatingtext.js'

export default class Jumbo extends React.Component {

render() {
  return (
    <div>
    <Jumbotron fluid>
      <Container>
      <Rotating></Rotating>
      </Container>
    </Jumbotron>

    </div>
    );
  }
}
