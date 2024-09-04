import React from "react";
import productData from "./productData";
import ProductCard from "./ProductCard";

const CartProduct = () => {
  return (
    <div>
      <div className="container-fluid py-5">
        <div
          className="mx-auto text-center wow fadeIn"
          data-wow-delay="0.1s"
          style={{ maxWidth: 600 }}
        >
          <h1 className="text-primary mb-3">
            <span className="fw-light text-dark">Our Natural</span> Products
          </h1>
          <p className="mb-5">
            The broadest definition of natural product is anything that is
            produced by life, and includes the likes of biotic materials.
          </p>
        </div>
        <div className="row g-4">
          {productData.map(
            (
              { id, image, name, rating, reviews, regular_price, sale_price },
              index
            ) => (
              <ProductCard
                key={index}
                id={id}
                image={image}
                name={name}
                rating={rating}
                reviews={reviews}
                regular_price={regular_price}
                sale_price={sale_price}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
