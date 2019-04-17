import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router} from "react-router-dom";
import {HomeNavbar, Hamburger, Layout } from "./components";
import logo from './logo.svg';
import routes from './routes';
import './App.css';
// import routes from './routes';

class App extends Component {
  render() {
    return (
      <Router>
    <div className="App">
        {routes}

    </div>
    </Router>
      // <div className="App">
      //   <header className="App-header">
      //   <Layout></Layout>
      //   <Hamburger></Hamburger>
      //   <HomeNavbar> </HomeNavbar>
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //      <Button color="danger">Danger!</Button>
      //   </header>
      // </div>
    );
  }
}

export default App;
