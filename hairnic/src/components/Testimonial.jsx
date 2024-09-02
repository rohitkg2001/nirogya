import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px 0",
        }}
      >
        <ul style={{ margin: "0", padding: "0", display: "flex" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "20px",
          color: "white",
          border: "1px solid white",
          borderRadius: "50%",
          textAlign: "center",
          cursor: "pointer",
        }}
        className="custom-dot"
      >
        {i + 1}
      </div>
    ),
    beforeChange: (current, next) => {
      const dots = document.querySelectorAll(".custom-dot");
      dots.forEach((dot, index) => {
        dot.style.color = index === next ? "black" : "white";
      });
    },
  };

  return (
    <div>
      <div className="container-fluid testimonial bg-primary my-5 py-5">
        <div className="container text-white py-5">
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
            <h1 className="text-white mb-3">
              Our Customer Said{" "}
              <span className="fw-light text-dark">
                talking about our authentic products
              </span>
            </h1>
            <p className="mb-5">
              Nirogya Ayurveda emphasizes a holistic approach to health,
              focusing on balancing the mind, body, and spirit. It integrates
              diet, lifestyle changes, herbal remedies, yoga, and meditation to
              promote overall well-being.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Slider {...settings}>
                <div
                  className="testimonial-item text-center d-flex flex-column align-items-center"
                  style={{ minHeight: "400px" }} // Adjust height as needed
                >
                  <img
                    className="img-fluid border p-2 mb-4"
                    src="img/testimonial-1.jpg"
                    alt=""
                    style={{ maxWidth: "150px", borderRadius: "50%" }} // adjust maxWidth as needed
                  />
                  <h5 className="fw-light lh-base text-white">
                    "Nirogya Ayurveda" could refer to a brand, clinic, or
                    concept related to Ayurvedic practices and health. Ayurveda
                    is a traditional system of medicine that originated in India
                    over 3,000 years ago. It focuses on balancing the body,
                    mind, and spirit through diet, herbal treatments, yoga, and
                    lifestyle changes.
                  </h5>
                  <h5 className="mb-1">Arushi</h5>
                  <h6 className="fw-light text-white fst-italic mb-0">
                    Profession
                  </h6>
                </div>

                <div
                  className="testimonial-item text-center d-flex flex-column align-items-center"
                  style={{ minHeight: "400px" }} // Adjust height as needed
                >
                  <img
                    className="img-fluid border p-2 mb-4"
                    src="img/testimonial-2.jpg"
                    alt=""
                    style={{ maxWidth: "150px", borderRadius: "50%" }} // adjust maxWidth as needed
                  />
                  <h5 className="fw-light lh-base text-white">
                    "Dabur": Dabur has a strong global presence, with products
                    available in over 100 countries. The company has
                    manufacturing facilities in India, the Middle East, Africa,
                    and other regions, catering to a diverse range of consumers.
                    Dabur’s international strategy focuses on adapting its
                    Ayurvedic and natural products to suit the tastes and
                    preferences of different markets..
                  </h5>
                  <h5 className="mb-1">Siddharth</h5>
                  <h6 className="fw-light text-white fst-italic mb-0">
                    Profession
                  </h6>
                </div>

                <div
                  className="testimonial-item text-center d-flex flex-column align-items-center"
                  style={{ minHeight: "400px" }} // Adjust height as needed
                >
                  <img
                    className="img-fluid border p-2 mb-4"
                    src="img/testimonial-3.jpg"
                    alt=""
                    style={{ maxWidth: "150px", borderRadius: "50%" }} // adjust maxWidth as needed
                  />
                  <h5 className="fw-light lh-base text-white">
                    "Himalaya": Research and development are central to
                    Himalaya's operations. The company has a dedicated R&D team
                    that works on developing new products and improving existing
                    formulations using modern scientific methods combined with
                    traditional Ayurvedic knowledge. Himalaya’s R&D efforts are
                    aimed at ensuring the efficacy, safety, and quality of its
                    products, and it invests in clinical trials and other
                    research to support this.
                  </h5>
                  <h5 className="mb-1">Vivaan</h5>
                  <h6 className="fw-light text-white fst-italic mb-0">
                    Profession
                  </h6>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
