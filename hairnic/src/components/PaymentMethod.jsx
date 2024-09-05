import React from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

const PaymentMethod = ({ formValues, handleChange, errors, handleSubmit }) => {
  return (
    <Row className="justify-content-end">
      {" "}
      <Col md={4} sm={12}>
        {" "}
        <Card className="mb-4">
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
      </Col>
    </Row>
  );
};

export default PaymentMethod;
