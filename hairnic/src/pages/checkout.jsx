import React, { useState } from "react";
import { Card, Form, Button, Table, Row, Col } from "react-bootstrap";
import MyNavbar from "../components/MyNavbar";
import Footer from "../components/Footer";

const Checkout = () => {
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);

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
    termsAndConditions: false,
  });

  const [errors, setErrors] = useState({});

  const increaseQuantity1 = () => {
    setQuantity1(quantity1 + 1);
  };

  const decreaseQuantity1 = () => {
    if (quantity1 > 1) {
      setQuantity1(quantity1 - 1);
    }
  };

  const increaseQuantity2 = () => {
    setQuantity2(quantity2 + 1);
  };

  const decreaseQuantity2 = () => {
    if (quantity2 > 1) {
      setQuantity2(quantity2 - 1);
    }
  };

  // Prices for the products
  const price1 = 129.9;
  const price2 = 115.7;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formValues.firstName) newErrors.firstName = "First name is required";
    if (!formValues.lastName) newErrors.lastName = "Last name is required";
    if (!formValues.zipCode) newErrors.zipCode = "ZIP code is required";
    if (!formValues.email) newErrors.email = "Email is required";
    if (!formValues.termsAndConditions)
      newErrors.termsAndConditions = "You must accept the terms and conditions";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Handle form submission
      console.log("Form Submitted", formValues);
    }
  };

  return (
    <div>
      <MyNavbar />
      <div className="container-fluid container-md px-2 px-sm-3 px-md-4 py-3 py-md-5">
        <div className="row">
          {/* Product Table */}
          <div className="col-12 mb-4">
            <Table striped bordered hover>
              <thead style={{ backgroundColor: "#8BC34A", color: "white" }}>
                <tr>
                  <th>Product name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="img/shampoo-1.png"
                      alt="Shampoo"
                      width="50"
                      height="50"
                      className="mr-2"
                    />
                    Hairnic Shampoo
                    <br />
                    <small>
                      Hairnic Shampoo nourishes and revitalizes hair for a
                      healthy, shiny look.
                    </small>
                  </td>
                  <td>₹{price1.toFixed(2)}</td>
                  <td className="d-flex align-items-center justify-content-center">
                    <Button
                      onClick={decreaseQuantity1}
                      variant="outline-secondary"
                    >
                      -
                    </Button>
                    <span className="mx-2">{quantity1}</span>
                    <Button
                      onClick={increaseQuantity1}
                      variant="outline-secondary"
                    >
                      +
                    </Button>
                  </td>
                  <td>₹{(price1 * quantity1).toFixed(2)}</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="img/kerala1.png"
                      width="50"
                      height="50"
                      alt="Bell Pepper"
                      className="mr-2"
                    />
                    Kerala Ayurveda
                    <br />
                    <small>
                      Kerala Ayurveda provides authentic Ayurvedic treatments
                      and products.
                    </small>
                  </td>
                  <td>₹{price2.toFixed(2)}</td>
                  <td className="d-flex align-items-center justify-content-center">
                    <Button
                      onClick={decreaseQuantity2}
                      variant="outline-secondary"
                    >
                      -
                    </Button>
                    <span className="mx-2">{quantity2}</span>
                    <Button
                      onClick={increaseQuantity2}
                      variant="outline-secondary"
                    >
                      +
                    </Button>
                  </td>
                  <td>₹{(price2 * quantity2).toFixed(2)}</td>
                </tr>
              </tbody>
            </Table>
          </div>

          {/* Coupon Code Section */}
          <div className="col-md-3 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Coupon Code</Card.Title>
                <Form>
                  <Form.Group controlId="couponCode">
                    <Form.Control
                      type="text"
                      placeholder="Enter your coupon code"
                    />
                  </Form.Group>
                  <Button
                    variant="success"
                    style={{
                      backgroundColor: "#8BC34A",
                      borderColor: "#8BC34A",
                    }}
                    className="mt-2"
                  >
                    Apply Coupon
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>

          {/* Billing Details Section */}
          <div className="col-md-6 mb-4">
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

          {/* Cart Totals Section */}
          <div className="col-md-3 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Cart Totals</Card.Title>
                <Table borderless>
                  <tbody>
                    <tr>
                      <td>Subtotal</td>
                      <td>
                        ₹{(price1 * quantity1 + price2 * quantity2).toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td>Shipping</td>
                      <td>Free</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>
                        ₹{(price1 * quantity1 + price2 * quantity2).toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>

            {/* Payment Method Section */}
            <Card className="mt-4">
              <Card.Body>
                <Card.Title>Payment Method</Card.Title>
                <Form>
                  <Form.Check
                    type="checkbox"
                    name="paymentMethod"
                    label="Pay on Delivery"
                  />
                </Form>
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

                    }} 
                  >
                    Place Order
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
