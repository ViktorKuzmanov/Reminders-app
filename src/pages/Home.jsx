import React from "react";
import Navbar from "../components/NavBar";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    // Get the parametar isLoggedIn value when components mounts
    const query = new URLSearchParams(this.props.location.search);
    const isLoggedIn = query.get("isLoggedIn");
    this.setState({ isLoggedIn: isLoggedIn });
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
