import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { Dropdown, DropdownButton } from "react-bootstrap";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";

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

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    handleOnMouseLeave();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnMouseLeave = (e) => {
    setShowEditButton(false);
  };

  const handleDeleteReminder = (e) => {
    handleClose();
    console.log("delete reminder");
  };

  return (
    <Col
      onMouseEnter={(e) => setShowEditButton(true)}
      onMouseLeave={handleOnMouseLeave}
      md={3}
      style={style}
    >
      {props.name}

      <DropdownButton style={styleButton} title="Edit">
        <Dropdown.Item onClick={handleClickOpen}>Delete</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
      </DropdownButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this reminder?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteReminder} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Col>
  );
};

export default Reminder;
