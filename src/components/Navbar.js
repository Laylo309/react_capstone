import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAngleLeft, FaCog, FaMicrophone } from 'react-icons/fa';

const NavbarComponent = () => (

  <Navbar className="justify-content-center">
    <Nav>
      <Nav.Item><FaAngleLeft /></Nav.Item>
      <Nav.Item>Most viewed</Nav.Item>
      <Nav.Item><FaMicrophone /></Nav.Item>
      <Nav.Item><FaCog /></Nav.Item>
    </Nav>
  </Navbar>

);

export default NavbarComponent;
