import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import {HomeNavbar, Hamburger, Layout } from ".././components";
import Button from 'react-bootstrap/Button';
import './main.css';


class Home extends Component {
  render() {
    return (

      <div className="Navbar">
        <header className="App-header">
      <Hamburger></Hamburger>
        <Container>


           <Button color="danger">Danger!</Button>
           </Container>
        </header>
      </div>
    );
  }
}

export default Home;
