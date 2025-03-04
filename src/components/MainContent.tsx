import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const MainContent: React.FC = () => {
  return (
    <Container>
      <Row className="mb-4 mt-3">
        <Col>
          <div className="p-3 mb-4 bg-dark rounded-3 border border-secondary">
            <Container fluid className="py-3">
              <h1 className="display-5 fw-bold">Welcome to Our Website</h1>
              <p className="col-md-8 fs-4">
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
              </p>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainContent;