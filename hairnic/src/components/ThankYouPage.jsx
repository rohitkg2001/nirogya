
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ThankYouPage = () => {
    return (
        <Container className="text-center mt-5 px-2 py-3 thank-you-container">
            <Row>
                <Col>
                    <img src="img/delivery-logo.png" className="logo"style={{width:"100px", height:"100px"}} alt="Nirogya" />
                    <h1 className="display-4 thank-you-title">Thank You!</h1>
                    <i className="bi bi-check-circle-fill thank-you-icon"></i>
                    <p className="lead text-white">Your action has been successfully completed.</p>
                    <div className="mt-4 text-white">
                        <p>We appreciate your engagement. Here’s what happens next:</p>
                        <ul className="list-unstyled">
                            <li>You will receive a confirmation email shortly.</li>
                            <li>Expect a follow-up within the next 24 hours.</li>
                        </ul>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className="box_thank">
                        <form id="stepForm">
                            <div className="form-header d-flex mb-4">
                                <span className="stepIndicator">Order Placed</span>
                                <span className="stepIndicator">Processing</span>
                                <span className="stepIndicator">Shipped</span>
                                <span className="stepIndicator">Delivered</span>
                            </div>
                        </form>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className="paymentDetail">
                        <div className="summary">
                            <p className="dis fw-bold mb-3">Billing address</p>
                            <div className="d-flex flex-column dis">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <p>Subtotal</p>
                                    <p>₹33.00</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <p>VAT (20%)</p>
                                    <p>₹2.80</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <p className="fw-bold">Total</p>
                                    <p className="fw-bold">₹35.80</p>
                                </div>
                                <Link to="/" className="btn btn-primary mt-3">Go to Homepage</Link>
                            </div>
                        </div>
                        <div className="address">
                            <p className="dis fw-bold mb-3">Billing address</p>
                            <div className="d-flex flex-column add">
                                <div className="add">
                                    <p className="fw-bold">Contact:</p>
                                    <p className="fw-bold"><span>nagmani@gmail.com</span></p>
                                </div>
                                <div className="add">
                                    <p className="fw-bold">Address:</p>
                                    <p className="fw-bold"><span>Alipur Bihta</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ThankYouPage;
