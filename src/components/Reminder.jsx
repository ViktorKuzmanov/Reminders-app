import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Dropdown, DropdownButton } from "react-bootstrap";

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

      <DropdownButton style={styleButton} title="Edit">
        <Dropdown.Item>Delete</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
      </DropdownButton>
    </Col>
  );
};

export default Reminder;
