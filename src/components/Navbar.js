import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAngleLeft, FaCog, FaMicrophone } from 'react-icons/fa';

// const style = {
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   width: '100%',
//   padding: '5px',
// };

const NavbarComponent = () => (
  <Navbar>
    <Nav>
      <Nav.Item><FaAngleLeft /></Nav.Item>
      <Nav.Item>Most viewed</Nav.Item>
      <Nav.Item><FaMicrophone /></Nav.Item>
      <Nav.Item><FaCog /></Nav.Item>
    </Nav>
  </Navbar>
);

export default NavbarComponent;
