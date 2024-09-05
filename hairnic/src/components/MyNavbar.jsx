import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACCENT_COLOR } from "../utils/utils";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const MyNavbar = () => {
  const navigate = useNavigate();
  const [showPopover, setShowPopover] = useState(false);
  const { cart } = useSelector(state => state.cart)

  const [cartItems, setCartItems] = useState(0);
  const [baseURL, setBaseURL] = useState("");

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

  // Adjusted popover size
  const popoverStyle = {
    width: "300px",
    maxHeight: "400px",
    overflowY: "auto",
    cursor: "default",
  };

  const cartPopover = (
    <Popover id="cart-popover" style={popoverStyle}>
      <Popover.Header as="h3">Cart</Popover.Header>
      <Popover.Body>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between mb-2">
            <span>{cartItems} Items</span>
          </div>
          <hr />
          <div className="d-flex justify-content-between mb-2">
            <span>Total: ₹ 0.00</span>
          </div>
          <hr />
          <div className="d-flex justify-content-end">
            <Button variant="primary" onClick={() => navigate("/checkout")}>
              Checkout
            </Button>
          </div>
        </div>
      </Popover.Body>
    </Popover>
  );

  // Styles for the cart icon
  const cartIconStyle = {
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    backgroundColor: "#fff", // Background color of the circle
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Optional shadow for a 3D effect
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
