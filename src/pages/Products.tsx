import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Table, Pagination, Button } from 'react-bootstrap';
import './Products.css'; // Import the CSS file for custom styles

const Products: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchProducts = () => {
    fetch('https://api.baxterpearson.co.uk/api/products')
      .then(response => response.json())
      .then(data => {
        console.log('Products Data:');
        console.log(data);
        setProducts(data);
      })
      .catch(error => console.error('Error fetching products:', error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = (productId: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      fetch(`https://api.baxterpearson.co.uk/api/products/delete/${productId}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (response.ok) {
            // Refresh the products list after successful deletion
            fetchProducts();
          } else {
            throw new Error('Failed to delete product');
          }
        })
        .catch(error => console.error('Error deleting product:', error));
    }
  };

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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((product: any) => (
                <tr key={product.productID}>
                  <td>{product.productID}</td>
                  <td>{product.productName}</td>
                  <td>
                    <Button 
                      variant="danger" 
                      size="sm"
                      onClick={() => handleDelete(product.productID)}
                    >
                      Delete
                    </Button>
                  </td>
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