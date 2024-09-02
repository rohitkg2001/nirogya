import React, { useEffect } from "react";
import WOW from "wow.js";
import "animate.css";

const HowToUse = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <div className="container-fluid how-to-use bg-primary my-5 py-5">
      <div className="container text-white py-5">
        <div
          className="mx-auto text-center wow fadeIn"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="text-white mb-3">
            <span className="fw-light text-dark">Our</span> Natural & Organic{" "}
            <span className="fw-light text-dark">Products</span>
          </h1>
          <p className="mb-5">
            Experience the purity of nature with our meticulously crafted
            natural and organic products. Designed to enhance your well-being,
            each item is made with sustainably sourced ingredients for a
            healthier lifestyle.
          </p>
        </div>
        <div className="row g-5">
          <div
            className="col-lg-4 text-center wow fadeIn"
            data-wow-delay="0.1s"
          >
            <div
              className="btn-square rounded-circle border mx-auto mb-4"
              style={{ width: "120px", height: "120px" }}
            >
              <i className="fa-solid fa-leaf fa-3x text-dark"></i>
            </div>
            <h5 className="text-white">Himalaya</h5>
            <hr className="w-25 bg-light my-2 mx-auto" />
            <span>
              Premium skincare products made with natural ingredients to
              rejuvenate and nourish your skin.
            </span>
          </div>
          <div
            className="col-lg-4 text-center wow fadeIn"
            data-wow-delay="0.3s"
          >
            <div
              className="btn-square rounded-circle border mx-auto mb-4"
              style={{ width: "120px", height: "120px" }}
            >
              <i className="fa-solid fa-seedling fa-3x text-dark"></i>
            </div>
            <h5 className="text-white">Dabur</h5>
            <hr className="w-25 bg-light my-2 mx-auto" />
            <span>
              Traditional herbal remedies designed to enhance overall wellness
              and vitality naturally.
            </span>
          </div>
          <div
            className="col-lg-4 text-center wow fadeIn"
            data-wow-delay="0.5s"
          >
            <div
              className="btn-square rounded-circle border mx-auto mb-4"
              style={{ width: "120px", height: "120px" }}
            >
              <i class="fa-solid fa-plant-wilt fa-3x text-dark"></i>
            </div>
            <h5 className="text-white">Amla</h5>
            <hr className="w-25 bg-light my-2 mx-auto" />
            <span>
              Potent hair-strengthening oil enriched with amla extract to
              promote healthy and vibrant hair.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
