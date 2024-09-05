import React from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

const PaymentMethod = ({ formValues, handleChange, errors, handleSubmit }) => {
  return (
    <Card className="my-4 border-1 shadow-sm">
      <Card.Body>
        <Card.Title>Payment Method</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Check
            type="checkbox"
            name="paymentMethod"
            label="Pay on Delivery"
          />
          <Form.Group controlId="termsAndConditions">
            <Form.Check
              type="checkbox"
              label="I agree to the terms and conditions"
              name="termsAndConditions"
              checked={formValues.termsAndConditions}
              onChange={handleChange}
              isInvalid={!!errors.termsAndConditions}
            />
            <Form.Control.Feedback type="invalid">
              {errors.termsAndConditions}
            </Form.Control.Feedback>
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
              Place Order
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default PaymentMethod;
