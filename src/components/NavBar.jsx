import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link, withRouter, Redirect } from "react-router-dom";
import { Dropdown, DropdownButton, Modal } from "react-bootstrap";
import { Tab, Tabs } from "react-bootstrap";
import { UserContext } from "../context/UserContext";

const NavBar = (props) => {
  const [activetab, setActivetab] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useContext(UserContext);

  const handleClick = (event) => {
    const { name } = event.target;
    setActivetab(name);
    setShowModal(true);
  };

  const onHide = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    axios.get("/auth/logout").then((res) => {
      setIsLoggedIn(res.data.isLoggedIn);
      setRediretToHome(true);
    });
  };

  const [rediretToHome, setRediretToHome] = useState(false);

  return (
    <div>
      {rediretToHome && <Redirect to="/" />}
      <Navbar bg="light" variant="light" expand="md">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </Nav>
        {props.location.pathname === "/" && (
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        )}
        <DropdownButton
          alignRight
          title="Account"
          id="dropdown-menu-align-right"
        >
          <div className="container">
            {isLoggedIn ? (
              <div>
                <button onClick={handleLogout}>Logout</button>
                <Link to="/reminders">Reminders</Link>
              </div>
            ) : (
              <div>
                <Button variant="light" name="singIn" onClick={handleClick}>
                  Sign in
                </Button>{" "}
                <Button variant="dark" name="register" onClick={handleClick}>
                  Join
                </Button>{" "}
              </div>
            )}
          </div>
        </DropdownButton>
      </Navbar>
      <Modal
        show={showModal}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Studentko</h4>
          <Tabs defaultActiveKey={activetab} id="uncontrolled-tab-example">
            <Tab eventKey="register" title="Register">
              <a href="/auth/google">Sign Up with Google</a>
            </Tab>
            <Tab eventKey="singIn" title="Sing in">
              <a href="/auth/google">Sign In with Google</a>
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default withRouter(NavBar);
