import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const CouponCode = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <Card className="border-1 shadow-sm">
      <Card.Body>
        <Card.Title>Coupon Code</Card.Title>
        <Form>
          <Form.Group controlId="couponCode">
            <Form.Control
              type="text"
              placeholder="Enter your coupon code"
              className="border-1"
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{
                backgroundColor: isFocused ? "#f7f7f7" : "#fff",
                borderColor: isFocused ? "#8BC34A" : "#ced4da",
                boxShadow: isFocused
                  ? "0 0 5px rgba(139, 195, 74, 0.5)"
                  : "none",
                transition: "all 0.3s ease-in-out",
              }}
            />
          </Form.Group>
          <div className="text-center mt-3">
            <Button
              variant="success"
              type="submit"
              style={{
                backgroundColor: "#8BC34A",
                borderColor: "#8BC34A",
                height: "40px",
                borderRadius: "3px",
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
