import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Table, Pagination } from 'react-bootstrap';
import './Products.css'; // Import the CSS file for custom styles

const Products: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => 
        {
          console.log('Products Data:');
          console.log(data);
          setProducts(data);
        })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

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
          <Table striped bordered hover className="table-dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((product: any) => (
                <tr key={product.productID}>
                  <td>{product.productID}</td>
                  <td>{product.productName}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="pagination-container">
            <Pagination className="pagination-dark">
              <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
              <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
              {[...Array(totalPages)].map((_, index) => (
                <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
              <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
            </Pagination>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;