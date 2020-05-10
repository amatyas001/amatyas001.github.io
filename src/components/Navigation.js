import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import "./Navigation.sass";

const Navigation = () => (
  <Navbar fixed="top" className="navbar-dark" expand="md">
    <Navbar.Toggle aria-controls="collapse" />
    <Navbar.Collapse id="collapse">
      <Nav className="ml-auto align-items-center">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/projects">
          Projects
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
