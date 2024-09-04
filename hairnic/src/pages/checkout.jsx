import React, { useState } from "react";
import { Card, Form, Button, Col, Row } from "react-bootstrap";

const Checkout = () => {
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    country: "India",
    streetAddress1: "",
    streetAddress2: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
    createAccount: false,
    shipDifferentAddress: false,
    paymentMethod: "",
    termsAndConditions: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};


    if (!formValues.firstName) newErrors.firstName = "First Name is required";
    if (!formValues.lastName) newErrors.lastName = "Last Name is required";
    if (!formValues.zipCode) newErrors.zipCode = "Postcode / ZIP is required";
    if (!formValues.email) newErrors.email = "Email Address is required";
    if (!formValues.termsAndConditions)
      newErrors.termsAndConditions = "You must accept the terms and conditions";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully:", formValues);
    }
  };

  return (
    <div className="container py-5">
      <div className="row">
        {/* Billing Details Section */}
        <div className="col-md-8 mb-4">
          <h4>Billing Details</h4>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formValues.firstName}
                    onChange={handleChange}
                    isInvalid={!!errors.firstName}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formValues.lastName}
                    onChange={handleChange}
                    isInvalid={!!errors.lastName}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                as="select"
                name="country"
                value={formValues.country}
                onChange={handleChange}
              >
                <option>India</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="streetAddress">
              <Form.Label>Street Address</Form.Label>
              <Row>
                <Col md={6}>
                  <Form.Control
                    type="text"
                    placeholder="House number and street name"
                    name="streetAddress1"
                    value={formValues.streetAddress1}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6}>
                  <Form.Control
                    type="text"
                    placeholder="Apartment,Society Name (optional)"
                    name="streetAddress2"
                    value={formValues.streetAddress2}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Type your city"
                    name="city"
                    value={formValues.city}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="zipCode">
                  <Form.Label>Postcode / ZIP *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Postcode / ZIP"
                    name="zipCode"
                    value={formValues.zipCode}
                    onChange={handleChange}
                    isInvalid={!!errors.zipCode}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.zipCode}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="options">
              <Form.Check
                type="radio"
                label="Create an Account?"
                name="createAccount"
                checked={formValues.createAccount}
                onChange={handleChange}
                id="createAccount"
              />
              <Form.Check
                type="radio"
                label="Ship to different address"
                name="shipDifferentAddress"
                checked={formValues.shipDifferentAddress}
                onChange={handleChange}
                id="shipDifferentAddress"
              />
            </Form.Group>

            <Form.Group controlId="termsAndConditions">
              <Form.Check
                type="checkbox"
                label="I have read and accept the terms and conditions"
                name="termsAndConditions"
                checked={formValues.termsAndConditions}
                onChange={handleChange}
                isInvalid={!!errors.termsAndConditions}
              />
              <Form.Control.Feedback type="invalid">
                {errors.termsAndConditions}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>

        {/* Cart Totals and Payment Method Section */}
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <h4>Cart Total</h4>
              <ul className="list-unstyled">
                <li>
                  <strong>Subtotal:</strong> ₹200.60
                </li>
                <li>
                  <strong>Delivery:</strong> ₹0.00
                </li>
                <li>
                  <strong>Discount:</strong> ₹30.00
                </li>
                <li>
                  <strong>Total:</strong> ₹170.00
                </li>
              </ul>

              <hr />

              <h4>Payment Method</h4>
              <Form>
                <Form.Check
                  type="radio"
                  label="Cash on Delivery"
                  name="paymentMethod"
                  id="cashOnDelivery"
                  value="cashOnDelivery"
                  onChange={handleChange}
                />
                <Form.Check
                  type="checkbox"
                  label="I have read and accept the terms and conditions"
                  name="termsAndConditions"
                  id="termsAndConditions"
                  checked={formValues.termsAndConditions}
                  onChange={handleChange}
                  isInvalid={!!errors.termsAndConditions}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.termsAndConditions}
                </Form.Control.Feedback>

                <Button variant="primary" className="mt-3 w-100" type="submit">
                  Place an order
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
