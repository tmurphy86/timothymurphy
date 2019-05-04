import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { push as Menu } from "react-burger-menu";
import {
  HomeNavbar,
  Hamburger,
  // Layout,
  Jumbo,
  CommentDetails,
  ApprovalCard,
  Timeline,
  Position,
  MenuExt,
  SearchBar,
  ContactMe
} from ".././components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
// import Jumbotron from "react-bootstrap/Jumbotron";
import ReactTextRotator from "react-text-rotator";
import faker from "faker";
import "./main.css";

class Home extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <Jumbo className="jumbotron" />
        <SearchBar />
        <Container>
          <div className="ui placeholder segment">
            <img src="./img/profilepic.jpg" class="ui large centered image" />
          </div>
          <div className="ui placeholder segment">
            <ApprovalCard>
              <CommentDetails
                avatar={faker.image.avatar()}
                author="NameProp"
                timestamp={(Date.now() / 1000) | 0}
                posttext="Another hard hitting piece"
              />
            </ApprovalCard>
            <ApprovalCard>
              <Position />
            </ApprovalCard>
            <ApprovalCard>
              <ContactMe />
            </ApprovalCard>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
