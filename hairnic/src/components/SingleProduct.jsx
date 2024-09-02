import React, { useEffect } from "react";

export default function SingleProduct({
  review_average,
  image_url,
  name,
  regular_price,
}) {
  useEffect(() => {
    console.log(image_url);
  }, []);
  return (
    <div
      className="col-md-6 col-lg-3 wow fadeIn"
      data-wow-delay="0.1s"
      style={{
        visibility: "visible",
        animationDelay: "0.1s",
        animationName: "fadeIn",
      }}
    >
      <div className="product-item text-center border h-100 p-4">
        <img className="img-fluid mb-4" src={image_url} alt={name} />
        <div className="mb-2">
          {[0, 1, 2, 3, 4].map((rating, key) => (
            <small className="fa fa-star text-primary" key={key} />
          ))}
          <small>({review_average})</small>
        </div>
        <a href="" className="h6 d-inline-block mb-2">
          {name}
        </a>
        <h5 className="text-primary mb-3">
          ₹{parseFloat(regular_price).toFixed(2)}
        </h5>
        <a href="" className="btn btn-outline-primary px-3">
          Add To Cart
        </a>
      </div>
    </div>
  );
}
