import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import {HomeNavbar, Hamburger, Layout, Rotating, Jumbo } from ".././components";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import Jumbotron from 'react-bootstrap/Jumbotron'
import ReactTextRotator from 'react-text-rotator';
import './main.css'



class Home extends Component {
  render() {
    return (

      <div className="Navbar">
        <header className="Nav-header">
          <Hamburger></Hamburger>
          <Container></Container>
          <Button className= "Contact-button" >Contact me!</Button>
        </header>
        <Container>
          <Jumbo>
            <Rotating></Rotating>
          </Jumbo>
        </Container>


      </div>
    );
  }
}

export default Home;
