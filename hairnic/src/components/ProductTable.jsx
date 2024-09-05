import React from "react";
import { Table, Button } from "react-bootstrap";

const ProductTable = ({
  quantity1,
  quantity2,
  increaseQuantity1,
  decreaseQuantity1,
  increaseQuantity2,
  decreaseQuantity2,
  price1,
  price2,
}) => {
  return (
    <div className="col-12 mb-4">
      <Table striped bordered hover>
        <thead style={{ backgroundColor: "#8BC34A", color: "white" }}>
          <tr>
            <th>Product name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="img/shampoo-1.png"
                alt="Shampoo"
                width="50"
                height="50"
                className="mr-2"
              />
              Hairnic Shampoo
              <br />
              <small>
                Hairnic Shampoo nourishes and revitalizes hair for a healthy,
                shiny look.
              </small>
            </td>
            <td>₹{price1.toFixed(2)}</td>
            <td className="d-flex align-items-center justify-content-center">
              <Button onClick={decreaseQuantity1} variant="outline-secondary">
                -
              </Button>
              <span className="mx-2">{quantity1}</span>
              <Button onClick={increaseQuantity1} variant="outline-secondary">
                +
              </Button>
            </td>
            <td>₹{(price1 * quantity1).toFixed(2)}</td>
          </tr>
          <tr>
            <td>
              <img
                src="img/kerala1.png"
                width="50"
                height="50"
                alt="Bell Pepper"
                className="mr-2"
              />
              Kerala Ayurveda
              <br />
              <small>
                Kerala Ayurveda provides authentic Ayurvedic treatments and
                products.
              </small>
            </td>
            <td>₹{price2.toFixed(2)}</td>
            <td className="d-flex align-items-center justify-content-center">
              <Button onClick={decreaseQuantity2} variant="outline-secondary">
                -
              </Button>
              <span className="mx-2">{quantity2}</span>
              <Button onClick={increaseQuantity2} variant="outline-secondary">
                +
              </Button>
            </td>
            <td>₹{(price2 * quantity2).toFixed(2)}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTable;
