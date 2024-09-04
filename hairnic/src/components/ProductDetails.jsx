import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productData from "./productData";
import { Button, Card } from "react-bootstrap";
// import MyNavbar from "../components/MyNavbar";
import MyNavbar from "../components/MyNavbar";
import Footer from "../components/Footer";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaShoppingCart,
  FaBolt,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [base_url, setBaseURL] = useState("");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const clickAddCart = () => {
    dispatch(addToCart(id, cart));
  };

  useEffect(() => {
    const thisProduct = productData.find((item) => item.id === parseInt(id));
    setProduct(thisProduct);
    const { origin } = window.location;
    setBaseURL(origin);
  }, [id]);

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const similarProducts = productData.filter(
    (item) => item.id !== parseInt(id)
  );

  if (!product)
    return (
      <div>
        <h5>Not Found</h5>
      </div>
    );

  return (
    <div>
      {/* Include the Navbar at the top */}
      <MyNavbar />
      <div className="container py-5">
        <div className="row">
          {/* Product Image */}
          <div className="col-md-6 d-flex justify-content-center align-items-center bg-light p-3 position-relative">
            {/* Featured Label */}
            <div
              className="position-absolute top-0 start-0 bg-warning text-dark px-3 py-1"
              style={{ zIndex: 1, borderBottomRightRadius: "5px" }}
            >
              Featured
            </div>

            <img
              src={`${base_url}/${product.image}`}
              alt={product.name}
              className="img-fluid"
              style={{
                maxWidth: "100%",
                maxHeight: "450px",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Product Details */}
          <div className="col-md-6">
            <h4>{product.name}</h4>
            <div className="my-3">
              <h6 className="text-muted">
                M.R.P: <s>{product.mrp}</s>
              </h6>
              <h5 className="text-success">Price: {product.price} </h5>
              <small className="text-muted">Inclusive of all taxes</small>
            </div>

            <h6 className="text-muted">Weight: {product.weight} Ml</h6>

            {/* Product Description */}
            <div className="my-3">
              <p>{product.description}</p>
            </div>
            <hr />
            {/* Quantity Adjustment */}
            <div className="d-flex align-items-center mb-3">
              <span className="me-2">Quantity:</span> {}
              <Button
                style={{
                  backgroundColor: "orange",
                  borderColor: "orange",
                  color: "white",
                }}
                onClick={decreaseQuantity}
                className="me-2"
              >
                -
              </Button>
              <span className="me-2">{quantity}</span>
              <Button
                style={{
                  backgroundColor: "orange",
                  borderColor: "orange",
                  color: "white",
                }}
                onClick={increaseQuantity}
              >
                +
              </Button>
            </div>

            {/* Add to Cart and Buy Now Buttons */}
            <div className="d-flex mb-3">
              <Button
                variant="outline-primary"
                className="me-2"
                onClick={clickAddCart}
              >
                <FaShoppingCart className="me-2" /> Add To Cart
              </Button>
              <Button className="bg-warning text-white">
                <FaBolt className="me-2" /> Buy Now
              </Button>
            </div>

            {/* Reviews Section */}
            <div className="my-4">
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

            {/* Share Section */}
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

        {/* Similar Products Section */}
        <hr className="my-5" />
        <h4 className="mb-4">Customers who viewed this item also viewed</h4>
        <div className="row">
          {similarProducts.slice(0, 4).map((item) => (
            <div key={item.id} className="col-md-3 mb-4">
              <Card className="h-100 position-relative">
                {/* Offer Label */}
                <div
                  className="position-absolute top-0 start-0 bg-warning text-dark px-2 py-1"
                  style={{ zIndex: 1, borderBottomRightRadius: "5px" }}
                >
                  Offer
                </div>

                <Card.Img
                  variant="top"
                  src={`${base_url}/${item.image}`}
                  alt={item.name}
                  style={{
                    height: "150px",
                    width: "100%",
                    objectFit: "contain",
                    padding: "10px",
                  }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text className="text-muted">
                    Price: {item.price}
                  </Card.Text>
                  <Button
                    variant="primary"
                    className="mt-auto"
                    onClick={() => {
                      window.location.href = `/product/${item.id}`;
                    }}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default ProductDetails;
