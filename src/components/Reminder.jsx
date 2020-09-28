import React from "react";
import { Col } from "react-bootstrap";

const Reminder = (props) => {
  const style = {
    backgroundColor: "#fca652",
    border: "1px solid",
    height: "50px",
    width: "100px",
  };
  return (
    <Col md={3} style={style}>
      {props.name}
    </Col>
  );
};

export default Reminder;
