import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACCENT_COLOR } from "../utils/utils";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const MyNavbar = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);
  const [cartItems, setCartItems] = useState(0);
  const [baseURL, setBaseURL] = useState("");
  const [showPopover, setShowPopover] = useState(false);

  useEffect(() => {
    setCartItems(cart.length);
  }, [cart]);

  useEffect(() => {
    const { origin } = window.location;
    setBaseURL(origin);
  }, []);

  const goToSignin = () => {
    navigate("/sign-in");
  };

  const popoverStyle = {
    // width: "400px",
    // height: "auto",
    border: "1px solid #efefef",
    // cursor: "default",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  };

  const hrStyle = {
    height: "1px",
    border: "none",
    color: "#cdcdcd",
    backgroundColor: "#cdcdcd",
    margin: "10px 0",
  };

  const cartPopover = (
    <Popover id="cart-popover" style={popoverStyle}>
      <Popover.Header as="h3" className="fw-bold text-center">
        My Cart
      </Popover.Header>
      <Popover.Body>
        {/* Price Details Section */}
        <div className="price-details">
          <h6 className="fw-bold mb-3" style={{ fontSize: "1.3rem" }}>
            PRICE DETAILS
          </h6>
          <hr style={hrStyle} />
          <div
            className="d-flex justify-content-between mb-3"
            style={{ fontSize: "1.1rem" }}
          >
            <span>{cartItems} Items</span>
            <span>{}₹00.00</span>
          </div>
          <div
            className="d-flex justify-content-between mb-3 text-success"
            style={{ fontSize: "1.1rem" }}
          >
            <span>Discount</span>
            <span>– ₹00.0</span>
          </div>
          <div
            className="d-flex justify-content-between mb-3"
            style={{ fontSize: "1.1rem" }}
          >
            <span>Delivery Charges</span>
            <span>
              <s>₹0</s> <span className="text-success">Free</span>
            </span>
          </div>
          <hr style={hrStyle} />
          <div
            className="d-flex justify-content-between mb-3 fw-bold text-black"
            style={{ fontSize: "1.3rem" }}
          >
            <span>Total Amount</span>
            <span>₹0,000</span>
          </div>
          <hr style={hrStyle} />
          <div className="text-success" style={{ fontSize: "1.1rem" }}>
            You will save ₹0,000 on this order
          </div>
        </div>

        <div className="d-flex justify-content-end mt-4">
          <Button
            variant="primary"
            style={{ fontSize: "1.2rem", padding: "10px 20px" }}
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </Button>
        </div>
      </Popover.Body>
    </Popover>
  );

  // Styles for the cart icon
  const cartIconStyle = {
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(45, 45, 45, 0.1)",
    position: "relative",
    cursor: "pointer",
  };

  return (
    <div
      className="container-fluid sticky-top shadow-sm"
      style={{ top: 0, backgroundColor: ACCENT_COLOR }}
    >
      <nav className="navbar navbar-expand-lg navbar-light p-0">
        <a href="/" className="navbar-brand">
          <img
            src={`${baseURL}/img/Nirogya_logo.jpg`}
            alt="Nirogya"
            className="logo"
          />
        </a>

        <button
          type="button"
          className="navbar-toggler ms-auto me-0"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <form className="d-flex ms-3">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                  <i className="fa fa-search" />
                </span>
                <input
                  className="form-control border-start-0 search-input"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </form>
            <div
              onMouseEnter={() => setShowPopover(true)}
              onMouseLeave={() => setShowPopover(false)}
              className="nav-item nav-link ms-3"
            >
              <OverlayTrigger
                show={showPopover}
                trigger="manual"
                placement="bottom"
                overlay={cartPopover}
              >
                <div style={cartIconStyle}>
                  <i className="fa fa-cart-shopping position-relative">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartItems}
                    </span>
                  </i>
                </div>
              </OverlayTrigger>
            </div>
          </div>
          <button
            className="btn btn-dark py-2 px-4 d-none d-lg-inline-block ms-3"
            onClick={goToSignin}
          >
            Login/Signup
          </button>
        </div>
      </nav>
    </div>
  );
};

export default MyNavbar;
