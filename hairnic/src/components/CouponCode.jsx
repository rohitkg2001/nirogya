import React from "react";
import { Card, Form, Button } from "react-bootstrap";

const CouponCode = () => {
  return (
    <div className="col-md-3 mb-4">
      <Card>
        <Card.Body>
          <Card.Title>Coupon Code</Card.Title>
          <Form>
            <Form.Group controlId="couponCode">
              <Form.Control type="text" placeholder="Enter your coupon code" />
            </Form.Group>
            <Button
              variant="success"
              style={{ backgroundColor: "#8BC34A", borderColor: "#8BC34A", borderRadius: "20px"}}
              className="mt-2"
            >
              Apply Coupon
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CouponCode;
