import React, { useEffect } from "react";
import WOW from "wow.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faTintSlash,
  faTimes,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
            <div className="feature-item position-relative bg-primary text-center p-3">
              <div className="border py-5 px-3">
                <FontAwesomeIcon
                  icon={faLeaf}
                  className="fa-3x text-dark mb-4"
                />
                <h5 className="text-white mb-0">100% Natural</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
            <div className="feature-item position-relative bg-primary text-center p-3">
              <div className="border py-5 px-3">
                <FontAwesomeIcon
                  icon={faTintSlash}
                  className="fa-3x text-dark mb-4"
                />
                <h5 className="text-white mb-0">Supports Overall Wellness</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
            <div className="feature-item position-relative bg-primary text-center p-3">
              <div className="border py-5 px-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="fa-3x text-dark mb-4"
                />
                <h5 className="text-white mb-0">24/7 Customer Support</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
