import React, { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";
import { useSelector } from "react-redux";


const CartProduct = () => {
  const [products, setProducts] = useState([]);
  const state = useSelector((state) => state.products)
  useEffect(() => {
    if (state.length > 1) {
      setProducts(state);
    }
  }, [state])

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
              <span className="fw-light text-dark">Our Natural</span> Hair
              Products
            </h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              aliquet, erat non malesuada consequat, nibh erat tempus risus.
            </p>
          </div>
          <div className="row g-4">
            {
              products.map((product, index) => (
                <SingleProduct key={index}
                  name={product.name}
                  regular_price={product.regular_price}
                  image_url={product.image_url}
                  review_average={product.review_average}
                />

              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;