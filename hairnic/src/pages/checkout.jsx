import React from "react";
import { Card, Form, Button } from "react-bootstrap";

const states = [
  { name: "Maharashtra", zipCodes: ["400001", "400002", "400003"] },
  { name: "Karnataka", zipCodes: ["560001", "560002", "560003"] },
  { name: "Delhi", zipCodes: ["110001", "110002", "110003"] },
  // Add more states and zip codes here
];

const Checkout = () => {
  return (
    <div className="container py-5">
      <div className="row">
        {/* Coupon Code Section */}
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Coupon Code</Card.Title>
              <p>Enter your coupon code if you have one</p>
              <Form>
                <Form.Group controlId="couponCode">
                  <Form.Control type="text" placeholder="Enter coupon code" />
                </Form.Group>
                <Button variant="primary" className="mt-2">
                  Apply
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>

        {/* Estimate Shipping and Tax Section */}
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Estimate Shipping and Tax</Card.Title>
              <p>Enter your destination to get a shipping estimate</p>
              <Form>
                <Form.Group controlId="country">
                  <Form.Label>Country</Form.Label>
                  <Form.Control as="select">
                    <option>India</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="state">
                  <Form.Label>State/Province</Form.Label>
                  <Form.Control as="select">
                    <option>Andhra Pradesh</option>
                    <option>Arunachal Pradesh</option>
                    <option>Assam</option>
                    {/* Add more states as needed */}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="zipCode">
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter zip code" />
                </Form.Group>
                <Button variant="primary" className="mt-2">
                  Get Estimate
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>

        {/* Cart Totals Section */}
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <Card.Title>Cart Totals</Card.Title>
              <ul className="list-unstyled">
                <li>
                  <strong>Subtotal:</strong> $100.00
                </li>
                <li>
                  <strong>Delivery:</strong> $10.00
                </li>
                <li>
                  <strong>Discount:</strong> $5.00
                </li>
                <li>
                  <strong>Total:</strong> $115.00
                </li>
              </ul>
              <Button variant="primary" className="mt-2">
                Proceed to Payment 
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
