import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-3 mt-5 border-top border-secondary">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="mb-0">© {new Date().getFullYear()} Baxter Pearson</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;