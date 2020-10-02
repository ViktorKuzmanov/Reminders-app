import React from "react";
import Navbar from "../components/NavBar";
import { Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Reminder from "../components/Reminder";
import { Row } from "react-bootstrap";

const Reminders = () => {
  const [show, setShow] = useState(false);
  const [reminders, setReminders] = useState([]);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const handleSaveReminder = () => {
    axios.post("addReminder", { reminderText }).then((res) => {
      setReminders(res.data.reminders);
    });
    setShow(false);
  };

  useEffect(() => {
    axios.get("allReminders").then((res) => {
      setReminders(res.data.reminders);
    });
  }, []);

  const [reminderText, setReminderText] = useState("");

  const reminderTextChanged = (e) => {
    setReminderText(e.target.value);
  };

  // This is function that the Reminders component calls
  //and passes new updated reminder when a reminder gets deleted
  const updateReminders = (reminders) => {
    console.log("updateReminders =  " + JSON.stringify(reminders));
    setReminders(reminders);
  };

  return (
    <div>
      <Navbar />
      This is reminders component
      <br />
      <Button variant="primary" onClick={handleShow}>
        Add reminder
      </Button>
      {/* // ! Display all reminders */}
      <Row>
        {reminders.map((reminderText) => {
          return (
            <Reminder
              uniqueId={reminderText._id}
              updateReminders={updateReminders}
              name={reminderText.text}
            />
          );
        })}
      </Row>
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
          <Button variant="primary" onClick={handleSaveReminder}>
            Save Reminder
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Reminders;
