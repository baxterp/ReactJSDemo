import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Table } from 'react-bootstrap';

const Products: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <Container>
      <Row className="mb-4 mt-3">
        <Col>
          <Container fluid className="py-3">
            Products page
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: any) => (
                <tr key={product.id}>
                  <td>{product.productNameID}</td>
                  <td>{product.productName}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;