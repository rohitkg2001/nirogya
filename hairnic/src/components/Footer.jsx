import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid  footer">
        <div className="container py-5">
          <div className="row g-5">
            <div
              className="col-md-6 col-lg-3 wow fadeIn"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeIn",
              }}
            >
              <a href="index.html" className="d-inline-block mb-3">
                <img src="img/Nirogya_logo.jpg" alt="logo" className="logo" />
              </a>

              <p className="mb-0">
                Nirogya Ayurveda offers holistic health solutions rooted in
                ancient practices, promoting balance and well-being through
                natural remedies.
              </p>
            </div>
            <div
              className="col-md-6 col-lg-3 wow fadeIn"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeIn",
              }}
            >
              <h5 className="mb-4">Get In Touch</h5>
              <p>
                <i className="fa fa-map-marker-alt me-1" />
                Delhi
              </p>
              <p>
                <i className="fa fa-phone-alt me-1" />
                +91 9649240944
              </p>
              <p>
                <i className="fa fa-envelope me-10" />
                nirogyaayurveda24@gmail.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-square btn-outline-primary me-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square btn-outline-primary me-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square btn-outline-primary me-1" href="">
                  <i className="fab fa-instagram" />
                </a>
                <a className="btn btn-square btn-outline-primary me-1" href="">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 wow fadeIn"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeIn",
              }}
            >
              <h5 className="mb-4">Our Products</h5>
              <a
                className="btn btn-link"
                href="https://www.daburinternational.com"
              >
                Dabur
              </a>
              <a className="btn btn-link" href="https://www.baidyanath.co.in">
                Baidyanath
              </a>
              <a className="btn btn-link" href="https://www.vyaspharma.com">
                Vyas
              </a>
              <a className="btn btn-link" href="https://www.keralaayurveda.biz">
                Kerala Ayurveda
              </a>
              <a className="btn btn-link" href="https://himalayawellness.in">
                Himalaya
              </a>
              <a className="btn btn-link" href="https://www.aimilpharma.life">
                AIMIL
              </a>
            </div>
            <div
              className="col-md-6 col-lg-3 wow fadeIn"
              data-wow-delay="0.7s"
              style={{
                visibility: "visible",
                animationDelay: "0.7s",
                animationName: "fadeIn",
              }}
            >
              <h5 className="mb-4">Popular Link</h5>
              <a className="btn btn-link" href="">
                About Us
              </a>
              <a className="btn btn-link" href="">
                Contact Us
              </a>
              <a className="btn btn-link" href="">
                Privacy Policy
              </a>
              <a className="btn btn-link" href="">
                Terms &amp; Condition
              </a>
              <a className="btn btn-link" href="">
                Career
              </a>
            </div>
          </div>
        </div>
        <div
          className="container wow fadeIn"
          data-wow-delay="0.1s"
          style={{
            visibility: "visible",
            animationDelay: "0.1s",
            animationName: "fadeIn",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Footer;
