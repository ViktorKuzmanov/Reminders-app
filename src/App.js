import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { UserProvider } from "./context/UserContext";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <UserProvider>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
        </UserProvider>
      </Router>
    );
  }
}
