// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import productData from "./productData";
// import { Button, Card } from "react-bootstrap";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaWhatsapp,
// } from "react-icons/fa";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const product = productData.find((item) => item.id === parseInt(id));

//   // Debugging: Print product data
//   console.log("Product Data:", product);

//   const [quantity, setQuantity] = useState(1);

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   return (
//     <div className="container py-5">
//       <div className="row">
//         <div className="col-md-6 d-flex justify-content-center align-items-center">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="img-fluid"
//             style={{
//               maxWidth: "100%",
//               maxHeight: "300px",
//               objectFit: "contain",
//             }}
//           />
//         </div>
//         <div className="col-md-6">
//           <h5>{product.name}</h5>
//           <h6 className="text-muted">M.R.P: {product.mrp}</h6>
//           <h5 className="text-primary">
//             Price: {product.price} <br />
//             <small className="text-muted">Inclusive of all taxes</small>
//           </h5>
//           <h6 className="text-muted">Weight: {product.weight} ml</h6>
//           <h6 className="text-muted">Brand: {product.brand}</h6>{" "}
//           {/* Added Brand */}
//           <h6 className="text-muted">Flavor: {product.flavor || "N/A"}</h6>{" "}
//           {/* Added Flavor */}
//           <h6 className="text-muted">
//             Item Form: {product.itemform || "N/A"}
//           </h6>{" "}
//           {/* Added Item Form */}
//           {/* Product Description */}
//           <div className="my-3">
//             <p className="text-muted">{product.description}</p>
//           </div>
//           {/* Quantity Adjustment */}
//           <div className="d-flex align-items-center mb-3">
//             <Button
//               variant="outline-secondary"
//               onClick={decreaseQuantity}
//               className="me-2"
//             >
//               -
//             </Button>
//             <span className="me-2">{quantity}</span>
//             <Button variant="outline-secondary" onClick={increaseQuantity}>
//               +
//             </Button>
//           </div>
//           <div className="my-5">
//             <h4>Reviews</h4>
//             {product.reviews.length > 0 ? (
//               product.reviews.map((review, index) => (
//                 <Card key={index} className="mb-3">
//                   <Card.Body>
//                     <Card.Title>{review.reviewer}</Card.Title>
//                     <Card.Subtitle className="mb-2 text-muted">
//                       Rating: {review.rating}
//                     </Card.Subtitle>
//                     <Card.Text>{review.comment}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               ))
//             ) : (
//               <p>No reviews yet.</p>
//             )}
//           </div>
//           <div className="d-flex mb-3">
//             <Button variant="outline-primary" className="me-2">
//               Add To Cart
//             </Button>
//             <Button variant="primary">Buy Now</Button>
//           </div>
//           <div className="d-flex align-items-center mt-5">
//             <span className="me-2">Share:</span>
//             <a href="#" className="text-primary me-2">
//               <FaFacebookF />
//             </a>
//             <a href="#" className="text-primary me-2">
//               <FaTwitter />
//             </a>
//             <a href="#" className="text-primary me-2">
//               <FaInstagram />
//             </a>
//             <a href="#" className="text-primary">
//               <FaWhatsapp />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productData from "./productData";
import { Button, Card } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const product = productData.find((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-5">
          <div className="product-image-container">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid"
              style={{
                maxWidth: "100%",
                maxHeight: "500px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <div className="col-md-7">
          <h3>{product.name}</h3>
          {/* <div className="text-muted mb-2">
            <small>15,273 Ratings & 826 Reviews</small>
          </div> */}
          {/* <h4 className="text-success">Extra ₹5000 off</h4> */}
          <h3 className="text-danger">
            ₹{product.price}
            <span
              className="text-muted"
              style={{ textDecoration: "line-through", marginLeft: "10px" }}
            >
              ₹{product.mrp}
            </span>
            {/* <span className="text-success" style={{ marginLeft: "10px" }}>
              22% off
            </span> */}
          </h3>
          <p className="text-muted">Inclusive of all taxes</p>
          <h6>Available offers:</h6>
          <ul className="text-muted">
            <li>
              Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card
            </li>
            <li>
              Bank Offer ₹1500 Off On All Banks Credit and Debit Card
              Transactions
            </li>
            <li>Bank Offer ₹1500 Off On HDFC Bank Debit Card Transactions</li>
            <li>
              Special Price Get extra ₹5000 off (price inclusive of
              cashback/coupon)
            </li>
          </ul>
          <div className="my-5">
            <h4>Reviews</h4>
            {product.reviews.length > 0 ? (
              product.reviews.map((review, index) => (
                <Card key={index} className="mb-3">
                  <Card.Body>
                    <Card.Title>{review.reviewer}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Rating: {review.rating}
                    </Card.Subtitle>
                    <Card.Text>{review.comment}</Card.Text>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
          <div className="d-flex align-items-center mb-3">
            <Button
              variant="outline-secondary"
              onClick={decreaseQuantity}
              className="me-2"
            >
              -
            </Button>
            <span className="me-2">{quantity}</span>
            <Button variant="outline-secondary" onClick={increaseQuantity}>
              +
            </Button>
          </div>

          <div className="d-flex mb-3">
            <Button variant="warning" className="me-2">
              Add To Cart
            </Button>
            <Button variant="danger">Buy Now</Button>
          </div>
          <div className="d-flex align-items-center mt-5">
            <span className="me-2">Share:</span>
            <a href="#" className="text-primary me-2">
              <FaFacebookF />
            </a>
            <a href="#" className="text-primary me-2">
              <FaTwitter />
            </a>
            <a href="#" className="text-primary me-2">
              <FaInstagram />
            </a>
            <a href="#" className="text-primary">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
