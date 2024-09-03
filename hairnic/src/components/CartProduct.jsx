// import React, { useState } from "react";
// import productData from "./productData";
// import { Button, Modal, Form } from "react-bootstrap";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaWhatsapp,
// } from "react-icons/fa";

// const CartProduct = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [show, setShow] = useState(false);
//   const [quantity, setQuantity] = useState(1);

//   const handleClose = () => setShow(false);
//   const handleShow = (product) => {
//     setSelectedProduct(product);
//     setQuantity(1);
//     setShow(true);
//   };

//   const increaseQuantity = () => setQuantity(quantity + 1);
//   const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

//   return (
//     <div>
//       <div className="container-fluid py-5">
//         <div className="container">
//           <div
//             className="mx-auto text-center wow fadeIn"
//             data-wow-delay="0.1s"
//             style={{ maxWidth: 600 }}
//           >
//             <h1 className="text-primary mb-3">
//               <span className="fw-light text-dark">Our Natural</span>
//               Products
//             </h1>
//             <p className="mb-5">
//               The broadest definition of natural product is anything that is
//               produced by life, and includes the likes of biotic materials.
//             </p>
//           </div>
//           <div className="row g-4">
//             {productData.map((product, index) => (
//               <div
//                 className="col-md-6 col-lg-3 wow fadeIn"
//                 data-wow-delay={`${0.1 + index * 0.2}s`}
//                 key={product.id}
//               >
//                 <div className="product-item text-center border h-100 p-4">
//                   <img
//                     className="img-fluid mb-4"
//                     src={product.image}
//                     alt={product.name}
//                   />
//                   <div className="mb-2">
//                     {[...Array(product.rating)].map((_, i) => (
//                       <small className="fa fa-star text-primary" key={i} />
//                     ))}
//                     <small>({product.reviews})</small>
//                   </div>
//                   <a href="#" className="h6 d-inline-block mb-2">
//                     {product.name}
//                   </a>
//                   <h5 className="text-primary mb-3">{product.price}</h5>
//                   <div className="d-flex justify-content-center">
//                     <Button
//                       variant="outline-primary"
//                       size="sm"
//                       className="px-3 me-2"
//                     >
//                       Add To Cart
//                     </Button>
//                     <Button
//                       variant="primary"
//                       size="sm"
//                       className="px-3"
//                       onClick={() => handleShow(product)}
//                     >
//                       View Details
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <Modal show={show} onHide={handleClose} size="xl" centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Product Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedProduct && (
//             <div className="row">
//               <div className="col-md-6 d-flex justify-content-center align-items-center">
//                 <img
//                   src={selectedProduct.image}
//                   alt={selectedProduct.name}
//                   className="img-fluid"
//                   style={{
//                     maxWidth: "100%",
//                     maxHeight: "300px",
//                     objectFit: "contain",
//                   }}
//                 />
//               </div>
//               <div className="col-md-6">
//                 <h5>{selectedProduct.name}</h5>

//                 {/* Display M.R.P. */}
//                 <h6 className="text-muted">M.R.P: {selectedProduct.mrp}</h6>

//                 {/* Display Price */}
//                 <h5 className="text-primary">
//                   Price: {selectedProduct.price} <br />
//                   <small className="text-muted">Inclusive of all taxes</small>
//                 </h5>

//                 <p className="text-muted">{selectedProduct.description}</p>
//                 <p className="text-muted">Weight: {selectedProduct.weight}</p>

//                 {/* Quantity Controls */}
//                 <div className="d-flex align-items-center mb-3">
//                   <span className="me-3">Quantity:</span>
//                   <Button
//                     variant="outline-secondary"
//                     onClick={decreaseQuantity}
//                   >
//                     -
//                   </Button>
//                   <Form.Control
//                     type="text"
//                     value={quantity}
//                     readOnly
//                     className="text-center mx-2"
//                     style={{ width: "50px" }}
//                   />
//                   <Button
//                     variant="outline-secondary"
//                     onClick={increaseQuantity}
//                   >
//                     +
//                   </Button>
//                 </div>

//                 {/* Add to Cart and Buy Now Buttons */}
//                 <div className="d-flex mb-3">
//                   <Button variant="outline-primary" className="me-2">
//                     Add To Cart
//                   </Button>
//                   <Button variant="primary">Buy Now</Button>
//                 </div>

//                 {/* Social Media Share Icons */}
//                 <div className="d-flex align-items-center">
//                   <span className="me-2">Share:</span>
//                   <a href="#" className="text-primary me-2">
//                     <FaFacebookF />
//                   </a>
//                   <a href="#" className="text-primary me-2">
//                     <FaTwitter />
//                   </a>
//                   <a href="#" className="text-primary me-2">
//                     <FaInstagram />
//                   </a>
//                   <a href="#" className="text-primary">
//                     <FaWhatsapp />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           )}
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default CartProduct;

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
