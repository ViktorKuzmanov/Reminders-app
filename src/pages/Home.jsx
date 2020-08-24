import React from "react";
import Navbar from "../components/NavBar";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        This is the Homepage
      </div>
    );
  }
}
