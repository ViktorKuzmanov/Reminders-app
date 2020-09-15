import React from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Reminders from "./pages/Reminders";
import { UserProvider } from "./context/UserContext";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <UserProvider>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/reminders" exact component={Reminders}></Route>
        </UserProvider>
      </Router>
    );
  }
}
