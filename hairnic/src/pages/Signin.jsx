import React, { useState } from "react";
import Form from "../components/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons"; // Importing icons

export default function Signin() {
  return (
    <div className="container-fluid bg-primary hero-header">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 text-lg-start">
            <h3 className="fw-light text-white animated slideInRight">
              Hairnic
            </h3>
            <h1 className="display-4 text-white animated slideInRight">
              Welcome <span className="fw-light text-dark">Back!</span>
              <span className="fw-light text-dark"> Sign-in </span>
              to start your journey
            </h1>
            <Form />

            {/* Horizontal Line with Text */}
            <div className="d-flex align-items-center my-4">
              <div className="flex-grow-1 border-bottom border-dark"></div>
              <span className="mx-3 text-white">or sign in using</span>
              <div className="flex-grow-1 border-bottom border-dark"></div>
            </div>

            {/* Social Icons for Facebook and Google */}
            <div className="d-flex justify-content-center my-3">
              <a href="#" className="text-white mx-2">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#" className="text-white mx-2">
                <FontAwesomeIcon icon={faGoogle} size="2x" />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              className="img-fluid animated pulse infinite"
              src="/img/shampoo.png"
              alt="Shampoo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
