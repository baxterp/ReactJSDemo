import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Home, ShoppingBag } from 'lucide-react';

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
            
            <NavDropdown title="Data Demo" id="shop-dropdown" className="me-3">
              <NavDropdown.Item href="/products">
                <ShoppingBag className="me-2" size={20} />
                Products
              </NavDropdown.Item>
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