import React, { useState } from "react";
import productData from "./productData";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartProduct = () => {
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h1 className="text-primary mb-3">
              <span className="fw-light text-dark">Our Natural</span>
              Products
            </h1>
            <p className="mb-5">
              The broadest definition of natural product is anything that is
              produced by life, and includes the likes of biotic materials.
            </p>
          </div>
          <div className="row g-4">
            {productData.map((product, index) => (
              <div
                className="col-md-6 col-lg-3 wow fadeIn"
                data-wow-delay={`${0.1 + index * 0.2}s`}
                key={product.id}
              >
                <div className="product-item text-center border h-100 p-4">
                  <img
                    className="img-fluid mb-4"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="mb-2">
                    {[...Array(product.rating)].map((_, i) => (
                      <small className="fa fa-star text-primary" key={i} />
                    ))}
                    <small>({product.reviews})</small>
                  </div>
                  <a href="#" className="h6 d-inline-block mb-2">
                    {product.name}
                  </a>
                  <h5 className="text-primary mb-3">{product.price}</h5>
                  <div className="d-flex justify-content-center">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="px-3 me-2"
                    >
                      Add To Cart
                    </Button>
                    <Link to={`/product/${product.id}`}>
                      <Button variant="primary" size="sm" className="px-3">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
