import React from "react";
import Navbar from "../components/NavBar";
import { Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const Reminders = () => {
  const [show, setShow] = useState(false);
  const [reminders, setReminders] = useState([]);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  // TODO: when i add the new reminder the state(reminders) doesn;t get update with the new remidners
  // TODO: ne se update UI - user-ot ne moze da vide nov reminder
  const handleSaveReminder = () => {
    axios
      .post("addReminder", { reminderText })
      .then((res) => console.log("REMINDERS RES = " + res.data.reminders));
    setShow(false);
  };

  useEffect(() => {
    console.log("useEffect is called in Reminders.jsx");
    axios.get("allReminders").then((res) => {
      setReminders(res.data.reminders);
    });
  }, []);

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
      {reminders.map((reminder) => {
        return <p>{reminder}</p>;
      })}
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
