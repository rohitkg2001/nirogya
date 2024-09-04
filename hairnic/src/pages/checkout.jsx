import React, { useState } from "react";
import { Card, Form, Button, Table } from "react-bootstrap";

const Checkout = () => {
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);

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

  // List of all Indian states
  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  return (
    <div className="container-fluid container-md px-2 px-sm-3 px-md-4 py-3 py-md-5">
      {/* Product Table */}
      <Table striped bordered hover className="mb-4">
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
                Hairnic Shampoo nourishes and revitalizes hair for a healthy,
                shiny look.
              </small>
            </td>
            <td>₹{price1.toFixed(2)}</td>
            <td className="d-flex align-items-center justify-content-center">
              <Button onClick={decreaseQuantity1} variant="outline-secondary">
                -
              </Button>
              <span className="mx-2">{quantity1}</span>
              <Button onClick={increaseQuantity1} variant="outline-secondary">
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
              kerala ayurveda
              <br />
              <small>
                Kerala Ayurveda provides authentic Ayurvedic treatments and
                products.
              </small>
            </td>
            <td>₹{price2.toFixed(2)}</td>
            <td className="d-flex align-items-center justify-content-center">
              <Button onClick={decreaseQuantity2} variant="outline-secondary">
                -
              </Button>
              <span className="mx-2">{quantity2}</span>
              <Button onClick={increaseQuantity2} variant="outline-secondary">
                +
              </Button>
            </td>
            <td>₹{(price2 * quantity2).toFixed(2)}</td>
          </tr>
        </tbody>
      </Table>

      <div className="row">
        {/* Coupon Code Section */}
        <div className="col-md-4 mb-4">
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
                  style={{ backgroundColor: "#8BC34A", borderColor: "#8BC34A" }}
                  className="mt-2"
                >
                  Apply Coupon
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
              <Form>
                <Form.Group controlId="country">
                  <Form.Label>Country</Form.Label>
                  <Form.Control as="select">
                    <option>India</option>
                    {/* Add more countries if needed */}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="state">
                  <Form.Label>State/Province</Form.Label>
                  <Form.Control as="select">
                    {indianStates.map((state, index) => (
                      <option key={index}>{state}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="zipCode">
                  <Form.Label>Zip/Postal Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter your zip code" />
                </Form.Group>
                <Button
                  variant="success"
                  style={{ backgroundColor: "#8BC34A", borderColor: "#8BC34A" }}
                  className="mt-2"
                >
                  Estimate
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
                  <strong>Subtotal:</strong> ₹
                  {(price1 * quantity1 + price2 * quantity2).toFixed(2)}
                </li>
                <li>
                  <strong>Delivery:</strong> ₹0.00
                </li>
                <li>
                  <strong>Discount:</strong> ₹3.00
                </li>
                <li>
                  <strong>Total:</strong> ₹
                  {(price1 * quantity1 + price2 * quantity2 - 3).toFixed(2)}
                </li>
              </ul>
              <Button
                variant="success"
                style={{ backgroundColor: "#8BC34A", borderColor: "#8BC34A" }}
                className="mt-2"
              >
                Proceed to Checkout
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
