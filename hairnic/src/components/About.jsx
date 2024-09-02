import React from "react";

const About = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <img
              className="img-fluid animated pulse infinite"
              src="img/dabur.webp"
              alt="Shampoo"
              style={{ height: "450px" }}
            />
          </div>

          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h1 className="text-primary mb-4">
              Dabur offers{" "}
              <span className="fw-light text-dark">
                products in healthcare, including medicines.
              </span>
            </h1>
            <p className="mb-4">
              Dabur has expanded its reach beyond India, with a significant
              presence in over 120 countries. Its global footprint is supported
              by a robust distribution network, ensuring that its natural and
              herbal products are accessible to consumers worldwide.
            </p>
            <p className="mb-4">
              Dabur is committed to sustainability, focusing on eco-friendly
              packaging and ethical sourcing.
            </p>
            <a className="btn btn-primary py-2 px-4" href="">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
