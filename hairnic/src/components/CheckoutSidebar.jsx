
import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const CheckoutSidebar = () => {
    return (
        <div className="container py-5  ">
            <div className="row ">
                <div className="box2">
                    <div className="col-md-12 ">
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Coupon Code</Card.Title>
                                <p>Enter you coupon code if you have one</p>
                                <Form>
                                    <Form.Group controlId="couponCode">
                                        <Form.Control type="text" placeholder="Enter coupon code" />
                                    </Form.Group>
                                    <Button variant="primary" className="mt-2">Apply</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="box3">
                    <div className="col-md-12 ">
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Estimate Shipping and Tax</Card.Title>
                                <p>Enter your destination to geta a shopping estimate</p>
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
                                            <option>Bihar</option>
                                            <option>Chandigarh</option>
                                            <option>Chhattisgarh</option>
                                            <option>Dadra and Nagar Haveli and Daman and Diu</option>
                                            <option>Delhi</option>
                                            <option>Goa</option>
                                            <option>Gujarat</option>
                                            <option>Haryana</option>
                                            <option>Himachal Pradesh</option>
                                            <option>Jharkhand</option>
                                            <option>Karnataka</option>
                                            <option>Kerala</option>
                                            <option>Ladakh</option>
                                            <option>Lakshadweep</option>
                                            <option>Madhya Pradesh</option>
                                            <option>Maharashtra</option>
                                            <option>Manipur</option>
                                            <option>Meghalaya</option>
                                            <option>Mizoram</option>
                                            <option>Nagaland</option>
                                            <option>Odisha</option>
                                            <option>Puducherry</option>
                                            <option>Punjab</option>
                                            <option>Rajasthan</option>
                                            <option>Sikkim</option>
                                            <option>Tamil Nadu</option>
                                            <option>Telangana</option>
                                            <option>Tripura</option>
                                            <option>Uttar Pradesh</option>
                                            <option>Uttarakhand</option>
                                            <option>West Bengal</option>
                                        </Form.Control>

                                    </Form.Group>
                                    <Form.Group controlId="zipCode">
                                        <Form.Label>Zip Code</Form.Label>
                                        <Form.Control type="text" placeholder="Enter zip code" />
                                    </Form.Group>
                                    <Button variant="primary" className="mt-2">Get Estimate</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="box4">
                    <div className="col-md-12 fist">
                        <Card>
                            <Card.Body>
                                <Card.Title>Cart Totals</Card.Title>
                                <ul className="list-unstyled g-10">
                                    <li><strong>Subtotal:</strong> $100.00</li>
                                    <li><strong>Delivery:</strong> $10.00</li>
                                    <li><strong>Discont:</strong> $5.00</li>
                                    <li><strong>Total:</strong> $115.00</li>
                                </ul>
                                <Button variant="primary" className="mt-2">Proceed to checkout</Button>
                            </Card.Body>

                        </Card>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CheckoutSidebar;
