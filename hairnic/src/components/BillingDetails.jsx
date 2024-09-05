import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const BillingDetails = ({ formValues, handleChange, errors }) => {
  return (
    <div className="col-md-6 mb-4">
      <h4>Billing Details</h4>
      <Form>
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
            {/* You can add more options here */}
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
                placeholder="Apartment, Society Name (optional)"
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
                placeholder="Phone number"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
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
      </Form>
    </div>
  );
};

export default BillingDetails;
