import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import productData from "./productData";
import { Button, Card } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null)
  const [base_url, setBaseURL] = useState("")

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  const clickAddCart = () => {
    dispatch(addToCart(id, cart))
  }

  useEffect(() => {
    const thisProduct = productData.find((item) => item.id === parseInt(id))
    setProduct(thisProduct)
    const { origin } = window.location
    setBaseURL(origin)
  }, [id])


  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product) return <div><h5>Not Found</h5></div>

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src={`${base_url}/${product.image}`}
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
            <Button variant="outline-primary" className="me-2" onClick={clickAddCart}>
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
