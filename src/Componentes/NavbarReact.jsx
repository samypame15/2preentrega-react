import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FaCartArrowDown } from "react-icons/fa";
import CartWidgetReactIcons from "./CartWidgetReactIcons";

const NavbarReact = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">Emicake</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#tortas">Tortas</NavDropdown.Item>
              <NavDropdown.Item href="#Postres">Postres</NavDropdown.Item>
              <NavDropdown.Item href="#Ancheas">Anchetas</NavDropdown.Item>
              <NavDropdown.Item href="#Desayunos">Desayunos</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <CartWidgetReactIcons />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarReact;


