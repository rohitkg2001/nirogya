import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productData from "./productData";
import { Button, Card } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const product = productData.find((item) => item.id === parseInt(id));

  // Debugging: Print product data
  console.log("Product Data:", product);

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid"
            style={{
              maxWidth: "100%",
              maxHeight: "300px",
              objectFit: "contain",
            }}
          />
        </div>
        <div className="col-md-6">
          <h5>{product.name}</h5>
          <h6 className="text-muted">M.R.P: {product.mrp}</h6>
          <h5 className="text-primary">
            Price: {product.price} <br />
            <small className="text-muted">Inclusive of all taxes</small>
          </h5>
          <h6 className="text-muted">Weight: {product.weight} Ml</h6>{" "}
          {/* Product Description */}
          <div className="my-3">
            <p className="text-muted">{product.description}</p>
          </div>
          {/* Quantity Adjustment */}
          <div className="d-flex align-items-center mb-3">
            <Button
              variant="outline-secondary"
              onClick={decreaseQuantity}
              className="me-2"
            >
              -
            </Button>
            <span className="me-2">{quantity}</span>
            <Button variant="outline-secondary" onClick={increaseQuantity}>
              +
            </Button>
          </div>
          <div className="my-5">
            <h4>Reviews</h4>
            {product.reviews.length > 0 ? (
              product.reviews.map((review, index) => (
                <Card key={index} className="mb-3">
                  <Card.Body>
                    <Card.Title>{review.reviewer}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Rating: {review.rating}
                    </Card.Subtitle>
                    <Card.Text>{review.comment}</Card.Text>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
          <div className="d-flex mb-3">
            <Button variant="outline-primary" className="me-2">
              Add To Cart
            </Button>
            <Button variant="primary">Buy Now</Button>
          </div>
          <div className="d-flex align-items-center mt-5">
            <span className="me-2">Share:</span>
            <a href="#" className="text-primary me-2">
              <FaFacebookF />
            </a>
            <a href="#" className="text-primary me-2">
              <FaTwitter />
            </a>
            <a href="#" className="text-primary me-2">
              <FaInstagram />
            </a>
            <a href="#" className="text-primary">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
