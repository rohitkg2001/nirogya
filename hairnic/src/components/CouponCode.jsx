import React from "react";
import { Card, Form, Button } from "react-bootstrap";

const CouponCode = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Coupon Code</Card.Title>
        <Form>
          <Form.Group controlId="couponCode">
            <Form.Control type="text" placeholder="Enter your coupon code" />
          </Form.Group>
          <div className="text-center mt-3">
            <Button
              variant="success"
              type="submit"
              style={{
                backgroundColor: "#8BC34A",
                borderColor: "#8BC34A",
                height: "40px",
                borderRadius: "20px",
              }}
            >
              Apply Coupon
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CouponCode;
