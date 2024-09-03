import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../redux/actions/cartActions"

export default function ProductCard({ id, image, name, rating, reviews, regular_price, sale_price }) {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    const clickAddCart = () => {
        dispatch(addToCart(id, cart))
    }

    return (
      <div className="col-md-6 col-lg-3 wow fadeIn" key={id}>
        <div className="product-item text-center border h-100 p-4">
          <img
            className="img-fluid mb-4"
            src={image}
            alt={name}
            style={{ maxWidth: "150px", height: "200px" }}
          />
          <div className="mb-2">
            {[...Array(rating)].map((_, i) => (
              <small className="fa fa-star text-primary" key={i} />
            ))}
            <small>({reviews})</small>
          </div>
          <a href="#" className="h6 d-inline-block mb-2">
            {name}
          </a>
          <span>
            <del className="text-muted mb-3">{regular_price}</del>
          </span>
          <h5 className="text-primary mb-3">
            <strong>{sale_price}</strong>
          </h5>
          <div className="d-flex justify-content-center">
            <Button
              variant="outline-primary"
              size="sm"
              className="px-3 me-2"
              onClick={clickAddCart}
            >
              Add To Cart
            </Button>
            <Link to={`/product/${id}`}>
              <Button variant="primary" size="sm" className="px-3">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
}
