import React from "react";
import Navbar from "../components/NavBar";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

const Reminders = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const [reminderText, setReminderText] = useState("");

  const reminderTextChanged = (e) => {
    setReminderText(e.target.value);
  };

  return (
    <div>
      <Navbar />
      This is reminders component
      <br />
      <Button variant="primary" onClick={handleShow}>
        Add reminder
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add reminder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="reminder text"
            onChange={reminderTextChanged}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Reminders;
