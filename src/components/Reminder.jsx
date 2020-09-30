import React, { useState } from "react";
import { Col } from "react-bootstrap";

const Reminder = (props) => {
  const [showEditButton, setShowEditButton] = useState(false);

  const style = {
    backgroundColor: "#fca652",
    border: "1px solid",
    height: "50px",
    width: "100px",
  };

  const styleButton = {
    display: showEditButton ? "inline-block" : "none",
  };

  return (
    <Col
      onMouseEnter={(e) => setShowEditButton(true)}
      onMouseLeave={(e) => setShowEditButton(false)}
      md={3}
      style={style}
    >
      {props.name}
      <button style={styleButton}>Edit</button>
    </Col>
  );
};

export default Reminder;
