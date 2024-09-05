import React from 'react';
import { Container, Row, Col, Table, Card } from 'react-bootstrap';

const OrderSummary = ({ orderNumber, date, products, total, paymentMethod }) => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
         <h2>Order received</h2>
         <p>Thank you. Your has been received.</p>

          <Card>
            
            <Card.Body>
              <Card.Text>
                <strong>Order Number:<br/></strong> {orderNumber}
              </Card.Text>
              <hr/>
              <Card.Text>
                <strong>Date:<br/></strong> {date}
              </Card.Text>
              <hr/>
              <Card.Text>
                <strong>Total:<br/></strong> ₹{total.toFixed(2)}
              </Card.Text>
              <hr/>
              <Card.Text>
                <strong>Payment Method:<br/></strong> {paymentMethod}
              </Card.Text>
            </Card.Body>
          </Card>
          
         <Card className="mt-4">
            <Card.Header as="h5">Order Details</Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index}>
                      <td>{product.name}</td>
                      <td>{product.quantity}</td>
                      <td>₹{product.price.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderSummary;
