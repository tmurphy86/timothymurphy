import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import {HomeNavbar, Hamburger, Layout } from ".././components";
import Button from 'react-bootstrap/Button';


class Home extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
        <Container>
        <Hamburger></Hamburger>

           <Button color="danger">Danger!</Button>
           </Container>
        </header>
      </div>
    );
  }
}

export default Home;
