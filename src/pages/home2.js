import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { slide as Menu } from "react-burger-menu";
import {
  HomeNavbar,
  Hamburger,
  Layout,
  Rotating,
  Jumbo,
  CommentDetails,
  ApprovalCard,
  Timeline
} from ".././components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Jumbotron from "react-bootstrap/Jumbotron";
import ReactTextRotator from "react-text-rotator";
import faker from "faker";
import "./main.css";

class Home extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );

    return (
      <div id="outer-container">
        <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
        <main id="page-wrap">
          <Menu>
            <a id="home" className="menu-item" href="/">
              Home
            </a>
            <a id="about" className="menu-item" href="/about">
              About
            </a>
            <a id="contact" className="menu-item" href="/contact">
              Contact
            </a>
            <a onClick={this.showSettings} className="menu-item--small" href="">
              Settings
            </a>
          </Menu>
          <Menu pageWrapId={"page-wrap"} />
          <main id="page-wrap">
            <div className="Navbar">
              <header className="Nav-header">
                <Hamburger> </Hamburger> <Container> </Container>
                <Button className="Contact-button"> Contact me! </Button>
              </header>
              <Container>
                <Jumbo className="jumbotron">
                  <Rotating> </Rotating>
                </Jumbo>
                <div className="ui placeholder segment">
                  <Timeline />
                </div>
                <div className="ui placeholder segment" />
                <ApprovalCard>
                  <CommentDetails
                    avatar={faker.image.avatar()}
                    author="NameProp"
                    timestamp={(Date.now() / 1000) | 0}
                    posttext="Another hard hitting piece"
                  />
                </ApprovalCard>
                <ApprovalCard>
                  <CommentDetails />
                </ApprovalCard>
                <CommentDetails />
              </Container>
            </div>
          </main>
        </main>
      </div>
    );
  }
}

export default Home;
