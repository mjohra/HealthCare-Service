import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import './Header.css';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container fluid className="nav-detail">
                    <Navbar.Brand href="#home"><h1 className="title"><i className="icon fas fa-stethoscope fa-2x"></i>  HealthCare</h1></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about">About Us</Nav.Link>
                        <Nav.Link as={HashLink}to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#blog">Blog</Nav.Link>
                        <Nav.Link as={HashLink} to="/team">Team</Nav.Link>
                        <Nav.Link as={HashLink} to="/doctors">Doctors</Nav.Link>
                        
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                          <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </>
  );
};

export default Header;
