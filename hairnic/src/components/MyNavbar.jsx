import React from "react";
import { useNavigate } from "react-router-dom";

const MyNavbar = () => {
  const navigate = useNavigate();

  const goToSignin = () =>{
    navigate('/sign-in')
  }
  return (
    <div
      className="container-fluid sticky-top bg-primary shadow-sm"
      style={{ top: 0 }}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <a href="index.html" className="navbar-brand">
            {/* <h2 className="text-white">Hairnic</h2> */}
            <img
              
              src="img/Nirogya_logo.jpg"
              alt="Hairnic"
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
              <a href="index.html" className="nav-item nav-link active">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link">
                About
              </a>
              <a href="product.html" className="nav-item nav-link">
                Products
              </a>
             
              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>
            </div>
            <button
              href=""
              className="btn btn-dark py-2 px-4 d-none d-lg-inline-block"
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