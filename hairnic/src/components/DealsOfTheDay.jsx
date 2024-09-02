import React from "react";
import "../lib/animate/animate.min.css";

const DealsOfTheDay = () => {
  return (
    <div>
      <div className="container-fluid deal bg-primary my-5 py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <img
                className="img-fluid animated pulse infinite"
                src="../img/amla-sale.png"
                alt="Oil"
                style={{ height: "400px", width: "auto" }}
              />
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="bg-white text-center p-4">
                <div className="border p-4">
                  <p className="mb-2">Natural & Ayurvedic Oil</p>
                  <h2 className="fw-bold text-uppercase mb-4">
                    Deals of the Day
                  </h2>
                  <h1 className="display-4 text-primary mb-4">₹99.99</h1>
                  <h5>Fresh Ayurvedic Oil</h5>
                  <p className="mb-4">
                    Unlock the ancient secrets of wellness with our Ayurvedic
                    oil, crafted to rejuvenate your body and calm your mind.
                  </p>
                  <div className="row g-0 cdt mb-4">
                    <div className="col-3">
                      <h1 className="display-6" id="cdt-days">
                        0
                      </h1>{" "}
                      {/* Default value for countdown */}
                    </div>
                    <div className="col-3">
                      <h1 className="display-6" id="cdt-hours">
                        0
                      </h1>{" "}
                      {/* Default value for countdown */}
                    </div>
                    <div className="col-3">
                      <h1 className="display-6" id="cdt-minutes">
                        0
                      </h1>{" "}
                      {/* Default value for countdown */}
                    </div>
                    <div className="col-3">
                      <h1 className="display-6" id="cdt-seconds">
                        0
                      </h1>{" "}
                      {/* Default value for countdown */}
                    </div>
                  </div>
                  <a className="btn btn-primary py-2 px-4" href="#">
                    Shop Now
                  </a>{" "}
                  {/* Placeholder href */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsOfTheDay;
