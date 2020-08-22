import React from "react";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("componentDidMount");
    // Get the parametar isLoggedIn value when components mounts
    const query = new URLSearchParams(this.props.location.search);
    const isLoggedIn = query.get("isLoggedIn");
    console.log(isLoggedIn);
  }
  render() {
    return <div>This is the Homepage</div>;
  }
}
