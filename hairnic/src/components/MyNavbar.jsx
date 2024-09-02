import React from "react";
import { useNavigate } from "react-router-dom";
import { ACCENT_COLOR } from "../utils/utils";

const MyNavbar = () => {
  const navigate = useNavigate();

  const goToSignin = () => {
    navigate("/sign-in");
  };

  return (
    <div
      className="container-fluid sticky-top shadow-sm"
      style={{ top: 0, backgroundColor: ACCENT_COLOR }}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <a href="/" className="navbar-brand">
            <img src="img/Nirogya_logo.jpg" alt="Hairnic" className="logo" />
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
              <a href="/" className="nav-item nav-link ms-3">
                <i className="fa fa-cart-shopping position-relative"></i>
              </a>
            </div>
            <button
              className="btn btn-dark py-2 px-4 d-none d-lg-inline-block ms-3"
              onClick={goToSignin}
            >
              Sign in
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MyNavbar;
