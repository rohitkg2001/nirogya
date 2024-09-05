<<<<<<< HEAD
=======
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
>>>>>>> f7999a5fafdc76bb8724b6b6aba8303241d93ad0
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import { useEffect } from "react";
import { getProductById } from "../redux/actions/productActions";
import { useNavigation } from 'react-router-dom'

const navigation = useNavigation()

export default function ProductCard({
  id,
  image,
  name,
  rating,
  reviews,
  regular_price,
  sale_price,
  discount,
}) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

<<<<<<< HEAD
  const dispatch = useDispatch()
  const { cart } = useSelector(state => state.cart)

=======
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
>>>>>>> f7999a5fafdc76bb8724b6b6aba8303241d93ad0

  const clickAddCart = () => {
    dispatch(addToCart(id, cart));
    handleShow(); // Show the modal after adding to cart
  };

<<<<<<< HEAD

  const getProduct = async () => {
    await dispatch(getProductById(id))
    navigation.navigate(`/product/${id}`)
  }


  return (
    <div className="col-md-6 col-lg-3" key={id}>
      <div className="card align-items-center" style={{ borderWidth: 1, height: "55vh", backgroundColor: '#efefef' }}>
        <img
          src={image}
          alt={name}
          className="card-img-top"
          style={{ maxWidth: "150px", height: "30vh", }}
        />
        <div className="card-body bg-white" style={{ width: '100%', height: '25vh' }}>
          <h6 className="card-title text-primary ">
            {name}
          </h6>
          <div>
            <small className="text-muted me-2">
              MRP.:
              <del className="text-muted mb-3">₹{regular_price}</del>
            </small>
            <span className="text-primary ml-3">
              ₹<strong>{sale_price}</strong>
            </span>
          </div>
          <div className="d-flex justify-content-between">
            <small className="text-muted me-2">100 g</small>
            <div>
              {/* {[...Array(Math.ceil(rating))].map((_, i) => (
                <small className="fa fa-star text-primary" style={{ fontSize: 12 }} key={i} />
              ))} */}
            </div>
          </div>
        </div>
        <div className="card-footer w-100 bg-dark">
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-primary cart-btn"
              onClick={clickAddCart}
            >
              Add To Cart
            </button>
            <button className="btn btn-dark detail-btn" onClick={getProduct}>
              View Detail
            </button>
=======
  return (
    <>
      <div className="col-md-6 col-lg-3 wow fadeIn" key={id}>
        <div className="product-item text-center border h-100 p-0 position-relative">
          {/* Left-side discount label */}
          <div
            className="position-absolute top-0 start-0 bg-warning text-dark px-2 py-1"
            style={{
              zIndex: 1,
              borderBottomRightRadius: "10px",
              borderTopLeftRadius: "10px",
            }}
          >
            {discount}% Off
          </div>

          {/* Right-side rating label */}
          <div
            className="position-absolute top-0 end-0 bg-light text-dark px-2 py-1"
            style={{
              borderBottomLeftRadius: "10px",
              color: "black",
            }}
          >
            {rating}/5
          </div>

          {/* Product Image */}
          <img
            className="img-fluid mb-4"
            src={image}
            alt={name}
            style={{ maxWidth: "200px", height: "200px", marginTop: "30px" }}
          />

          {/* Product Name and Review Stars */}
          <div className="d-flex justify-content-between align-items-center mb-2 ps-2 pe-2">
            <a href="#" className="h6 mb-0 text-left">
              {name}
            </a>
            <div>
              {[...Array(Math.floor(rating))].map((_, i) => (
                <small
                  key={i}
                  className="fa fa-star"
                  style={{ color: "black" }}
                />
              ))}
              <small>({reviews})</small>
            </div>
          </div>

          {/* Price Section */}
          <div className="d-flex justify-content-between align-items-center mb-3 ps-2 pe-2">
            <h5 className="text-primary mb-0">
              <strong>{sale_price}</strong>
            </h5>
            <span>
              <del className="text-muted small">{regular_price}</del>
            </span>
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-between">
            <Button
              variant="outline-primary"
              size="sm"
              className="px-3 me-2 button-left"
              onClick={clickAddCart}
            >
              Add To Cart
            </Button>
            <Link to={`/product/${id}`}>
              <Button variant="primary" size="sm" className="px-3 button-right">
                View Details
              </Button>
            </Link>
>>>>>>> f7999a5fafdc76bb8724b6b6aba8303241d93ad0
          </div>
        </div>
      </div>

<<<<<<< HEAD
    </div>
=======
      {/* Modal for displaying product details after adding to cart */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Added to Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ padding: "30px" }}>
          <div className="row align-items-center">
            <div className="col-4 d-flex justify-content-center">
              <img
                src={image}
                alt={name}
                className="img-fluid"
                style={{
                  width: "70px",
                  height: "120px",
                  marginBottom: "15px",
                }}
              />
            </div>

            <div className="col-8">
              <h5 className="text-left">{name}</h5>
              <h6 className="text-left text-primary">{sale_price}</h6>
              <del className="text-muted">{regular_price}</del>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Continue Shopping
          </Button>
        </Modal.Footer>
      </Modal>
    </>
>>>>>>> f7999a5fafdc76bb8724b6b6aba8303241d93ad0
  );
}
