import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import { useEffect } from "react";
import { getProductById } from "../redux/actions/productActions";
// import { useNavigation } from 'react-router-dom'



export default function ProductCard({
  id,
  image,
  name,
  rating,
  reviews,
  regular_price,
  sale_price,
  discount,
}) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);


  const clickAddCart = () => {
    dispatch(addToCart(id, cart));
    handleShow(); // Show the modal after adding to cart
  };

  // const navigation = useNavigation()


  const getProduct = async () => {
    await dispatch(getProductById(id))
    window.location.href = `/product/${id}`
  }


  return (
    <div className="col-md-6 col-lg-3" key={id}>
      <div className="card align-items-center" style={{ borderWidth: 1, height: "55vh", backgroundColor: '#efefef' }}>
        <img
          src={image}
          alt={name}
          className="card-img-top"
          style={{ maxWidth: "150px", height: "30vh", }}
        />
        <div className="card-body bg-white" style={{ width: '100%', height: '25vh' }}>
          <h6 className="card-title text-primary ">
            {name}
          </h6>
          <div>
            <small className="text-muted me-2">
              MRP.:
              <del className="text-muted mb-3">₹{regular_price}</del>
            </small>
            <span className="text-primary ml-3">
              ₹<strong>{sale_price}</strong>
            </span>
          </div>
          <div className="d-flex justify-content-between">
            <small className="text-muted me-2">100 g</small>
            <div>
              {/* {[...Array(Math.ceil(rating))].map((_, i) => (
                <small className="fa fa-star text-primary" style={{ fontSize: 12 }} key={i} />
              ))} */}
            </div>
          </div>
        </div>
        <div className="card-footer w-100 bg-dark">
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-primary cart-btn"
              onClick={clickAddCart}
            >
              Add To Cart
            </button>
            <button className="btn btn-dark detail-btn" onClick={getProduct}>
              View Detail
            </button>
          </div>
        </div>
      </div>

    </div >
  );
}
