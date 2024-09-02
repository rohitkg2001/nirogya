import React from "react";
import "../css/bootstrap.min.css";
import "../css/style.css";
import "../lib/animate/animate.min.css";
const Product = () => {
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{
              maxWidth: 600,
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeIn",
            }}
          >
            <h1 className="text-primary mb-3">
              <span className="fw-light text-dark">Best Benefits Of Our</span>{" "}
              Neem Face Wash
            </h1>
            <p className="mb-5">
              Neem Face Wash cleanses and purifies the skin, helping to fight
              acne and control excess oil. Enriched with neem, it soothes and
              refreshes for a clear, healthy complexion.
            </p>
          </div>
          <div className="row g-4 align-items-center">
            <div
              className="col-lg-4 wow fadeIn"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeIn",
              }}
            >
              <div className="row g-5">
                <div className="col-12 d-flex">
                  <div
                    className="btn-square rounded-circle border flex-shrink-0 d-flex justify-content-center align-items-center"
                    style={{ width: 80, height: 80 }}
                  >
                    <i className="fa fa-check fa-2x text-primary" />
                  </div>
                  <div className="ps-3">
                    <h5>Cleanses Deeply </h5>
                    <hr className="w-25 bg-primary my-2" />
                    <span>
                      Removes dirt, oil, and impurities from the skin.
                    </span>
                  </div>
                </div>
                <div className="col-12 d-flex">
                  <div
                    className="btn-square rounded-circle border flex-shrink-0 d-flex justify-content-center align-items-center"
                    style={{ width: 80, height: 80 }}
                  >
                    <i className="fa fa-check fa-2x text-primary" />
                  </div>
                  <div className="ps-3">
                    <h5>Prevents Acne</h5>
                    <hr className="w-25 bg-primary my-2" />
                    <span>
                      Helps to reduce and prevent breakouts by unclogging pores.
                    </span>
                  </div>
                </div>
                <div className="col-12 d-flex">
                  <div
                    className="btn-square rounded-circle border flex-shrink-0 d-flex justify-content-center align-items-center"
                    style={{ width: 80, height: 80 }}
                  >
                    <i className="fa fa-check fa-2x text-primary" />
                  </div>
                  <div className="ps-3">
                    <h5>Balances Oil</h5>
                    <hr className="w-25 bg-primary my-2" />
                    <span>
                      Controls excess oil production for a shine-free
                      complexion.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 wow fadeIn text-center"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeIn",
              }}
            >
              <img
                className="img-fluid animated pulse infinite"
                src="./img/facewash.webp"
                alt="Natural Hair Shampoo"
              />
            </div>
            <div
              className="col-lg-4 wow fadeIn"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeIn",
              }}
            >
              <div className="row g-5">
                <div className="col-12 d-flex">
                  <div
                    className="btn-square rounded-circle border flex-shrink-0 d-flex justify-content-center align-items-center"
                    style={{ width: 80, height: 80 }}
                  >
                    <i className="fa fa-check fa-2x text-primary" />
                  </div>
                  <div className="ps-3">
                    <h5>Hydrates Skin</h5>
                    <hr className="w-25 bg-primary my-2" />
                    <span>
                      Keeps the skin hydrated, preventing dryness and
                      irritation.
                    </span>
                  </div>
                </div>
                <div className="col-12 d-flex">
                  <div
                    className="btn-square rounded-circle border flex-shrink-0 d-flex justify-content-center align-items-center"
                    style={{ width: 80, height: 80 }}
                  >
                    <i className="fa fa-check fa-2x text-primary" />
                  </div>
                  <div className="ps-3">
                    <h5>Gentle Formula</h5>
                    <hr className="w-25 bg-primary my-2" />
                    <span>
                      Suitable for daily use and all skin types, including
                      sensitive skin.
                    </span>
                  </div>
                </div>
                <div className="col-12 d-flex">
                  <div
                    className="btn-square rounded-circle border flex-shrink-0 d-flex justify-content-center align-items-center"
                    style={{ width: 80, height: 80 }}
                  >
                    <i className="fa fa-check fa-2x text-primary" />
                  </div>
                  <div className="ps-3">
                    <h5>Refreshes Skin</h5>
                    <hr className="w-25 bg-primary my-2" />
                    <span>
                      Leaves the skin feeling refreshed and rejuvenated after
                      every wash.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
