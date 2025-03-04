import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Home } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark mb-4">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center me-5">
          <Home className="me-2" size={24} />
          <span>Home</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <NavDropdown title="Account" id="account-dropdown" className="me-3">
              <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="Shop" id="shop-dropdown" className="me-3">
              <NavDropdown.Item href="#products">Products</NavDropdown.Item>
              <NavDropdown.Item href="#categories">Categories</NavDropdown.Item>
              <NavDropdown.Item href="#deals">Special Deals</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="Help" id="help-dropdown">
              <NavDropdown.Item href="#faq">FAQ</NavDropdown.Item>
              <NavDropdown.Item href="#contact">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#support">Support</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;