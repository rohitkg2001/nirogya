import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const CartProduct = () => {
  const { products } = useSelector(state => state.products)
  const [cartProducts, setCartProducts] = React.useState([]);

  useEffect(() => {
    setCartProducts(products)
  }, [products])


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
          {cartProducts.map(
            (
              { id, thumbnail, title, rating, reviews, price, discountPercentage },
              index
            ) => (
              <ProductCard
                key={index}
                id={id}
                image={thumbnail}
                name={title}
                rating={rating}
                reviews={reviews}
                regular_price={price}
                sale_price={parseFloat(price * ((100 - discountPercentage) / 100)).toFixed(2)}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
