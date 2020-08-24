import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
      </Router>
    );
  }
}
