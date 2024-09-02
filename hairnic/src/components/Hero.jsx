import React from "react";
import "../lib/animate/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Hero() {
  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="container-fluid bg-primary hero-header mb-5">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                  <h3 className="fw-light text-white animated slideInRight">
                    Natural & Organic
                  </h3>
                  <h1 className="display-4 text-white animated slideInRight">
                    Hair <span className="fw-light text-dark">Shampoo</span> For
                    Healthy Hair
                  </h1>
                  <p className="text-white mb-4 animated slideInRight">
                    Shampoo is typically in the form of a viscous liquid with
                    some exception of waterless solid form such as a bar
                  </p>
                  <a
                    href="#"
                    className="btn btn-dark py-2 px-4 me-3 animated slideInRight"
                  >
                    Shop Now
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-dark py-2 px-4 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="col-lg-6">
                  <img
                    className="img-fluid animated pulse infinite"
                    src="../img/shampoo.png"
                    alt="Shampoo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="container-fluid bg-primary hero-header mb-5">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                  <h3 className="fw-light text-white animated slideInRight">
                    100% Natural
                  </h3>
                  <h1 className="display-4 text-white animated slideInRight">
                    Organic <span className="fw-light text-dark"> Amypure</span>{" "}
                    For appetite and digestion:
                  </h1>
                  <p className="text-white mb-4 animated slideInRight">
                    Regular consumption may help in enhancing the secretion of
                    digestive enzymes and shows potential choleretic activity.
                  </p>
                  <a
                    href="#"
                    className="btn btn-dark py-2 px-4 me-3 animated slideInRight"
                  >
                    Shop Now
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-dark py-2 px-4 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>

                <div className="col-lg-6">
                  <img
                    className="img-fluid animated pulse infinite"
                    src="/img/aimilp01.png"
                    alt="Conditioner"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div className="container-fluid bg-primary hero-header mb-5">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                  <h3 className="fw-light text-white animated slideInRight">
                    kerala ayurveda
                  </h3>
                  <h1 className="display-4 text-white animated slideInRight">
                    Rejuvenating{" "}
                    <span className="fw-light text-dark">
                      Ayurvedic medicine
                    </span>{" "}
                    For Glowing Skin
                  </h1>
                  <p className="text-white mb-4 animated slideInRight">
                    it is believed that the state's natural resources, including
                    the abundance of medicinal plants and herbs, have
                    contributed to the development of Ayurveda in the region.
                  </p>
                  <a
                    href="#"
                    className="btn btn-dark py-2 px-4 me-3 animated slideInRight"
                  >
                    Shop Now
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-dark py-2 px-4 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="col-lg-6">
                  <img
                    className="img-fluid animated pulse infinite"
                    src="/img/kerala1.png"
                    alt="Face Mask"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="carousel-item">
          <div className="container-fluid bg-primary hero-header mb-5">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                  <h3 className="fw-light text-white animated slideInRight">
                    Purifying Neem Face
                  </h3>
                  <h1 className="display-4 text-white animated slideInRight">
                    Nourishing{" "}
                    <span className="fw-light text-dark">Body Lotions</span> For
                    Soft Face
                  </h1>
                  <p className="text-white mb-4 animated slideInRight">
                    It produces health care products containing Ayurvedic
                    ingredients
                  </p>
                  <a
                    href="#"
                    className="btn btn-dark py-2 px-4 me-3 animated slideInRight"
                  >
                    Shop Now
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-dark py-2 px-4 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="col-lg-6">
                  <img
                    className="img-fluid animated pulse infinite"
                    src="/img/him1.png"
                    alt="Body Lotion"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 5 */}
        <div className="carousel-item">
          <div className="container-fluid bg-primary hero-header mb-5">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                  <h3 className="fw-light text-white animated slideInRight">
                    Original Baidyanath
                  </h3>
                  <h1 className="display-4 text-white animated slideInRight">
                    Natural{" "}
                    <span className="fw-light text-dark">confidence </span> For
                    and trust in our products
                  </h1>
                  <p className="text-white mb-4 animated slideInRight">
                    Baidyanath Brahmi Bati with Gold is an ayurvedic tablet
                    recommended to reduce mental fatigue, stress, depression,
                    and anxiety
                  </p>
                  <a
                    href="#"
                    className="btn btn-dark py-2 px-4 me-3 animated slideInRight"
                  >
                    Shop Now
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-dark py-2 px-4 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="col-lg-6">
                  <img
                    className="img-fluid animated pulse infinite"
                    src="/img/baidyanath1.png"
                    alt="Herbal Tea"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
