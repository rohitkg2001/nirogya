import React, { useState, useEffect } from "react";

const Footer = () => {
  const [baseURL, setBaseURL] = useState("");

  useEffect(() => {
    const { origin } = window.location;
    setBaseURL(origin);
  }, []);

  return (
    <div className="container-fluid footer py-4">
      <div className="row g-5 px-4">
        <div className="col-sm-6 col-md-6 col-lg-3">
          <a href="/" className="d-inline-block mb-3">
            <img
              src={`${baseURL}/img/nirogya_logo_brand.png`}
              alt="Nirogya Ayurveda Logo"
              aria-label="Nirogya Ayurveda Logo"
              className="logo"
            />
          </a>
          <p className="mb-0">
            Nirogya Ayurveda offers holistic health solutions rooted in ancient
            practices, promoting balance and well-being through natural
            remedies.
          </p>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-3">
          <h5 className="mb-4">Get In Touch</h5>
          <p>
            <i className="fa fa-map-marker-alt" /> Delhi
          </p>
          <p>
            <i className="fa fa-phone" /> +91 9649240944
          </p>
          <p>
            <i className="fa fa-envelope" /> nirogyaayurveda24@gmail.com
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
        <div className="col-sm-6 col-md-6 col-lg-3">
          <h5 className="mb-4">Our Partners</h5>
          <a className="btn btn-link" href="https://www.daburinternational.com">
            Dabur
          </a>
          <a className="btn btn-link" href="https://www.baidyanath.co.in">
            Baidyanath
          </a>
          <a className="btn btn-link" href="https://www.vyaspharma.com">
            Himalaya
          </a>
          <a className="btn btn-link" href="https://www.keralaayurveda.biz">
            And more...
          </a>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3">
          <div className="mb-3">
            <h5 className="mb-4">Popular Links</h5>
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
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      <div className="d-flex mt-2 mb-0 bg-primary">
        <span className="text-light px-2">&copy; Nirogya Ayurveda</span>
        <span className="text-light px-2">
          Powered with &hearts; by{" "}
          <a href="https://dashandots.com" className="text-light">
            Dashandots Technology Private Limited
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
