import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./";
import routes from ".././routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <div className="App">{routes}</div>
        </Layout>
      </Router>
    );
  }
}

export default App;
