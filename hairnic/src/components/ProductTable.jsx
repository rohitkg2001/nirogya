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
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Product Name</th>
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
              alt="Hairnic Shampoo"
              width="50"
              height="50"
              className="mr-2"
            />
            Hairnic Shampoo
            <br />
            <small>
              Nourishes and revitalizes hair for a healthy, shiny look.
            </small>
          </td>
          <td>₹{price1.toFixed(2)}</td>
          <td className="d-flex align-items-center justify-content-center">
            <Button
              onClick={decreaseQuantity1}
              variant="outline-secondary"
              size="sm"
            >
              -
            </Button>
            <span className="mx-2">{quantity1}</span>
            <Button
              onClick={increaseQuantity1}
              variant="outline-secondary"
              size="sm"
            >
              +
            </Button>
          </td>
          <td>₹{(price1 * quantity1).toFixed(2)}</td>
        </tr>
        <tr style={{ backgroundColor: "transparent" }}>
          <td>
            <img
              src="img/kerala1.png"
              alt="Kerala Ayurveda"
              width="50"
              height="50"
              className="mr-2"
            />
            Kerala Ayurveda
            <br />
            <small>Provides authentic Ayurvedic treatments and products.</small>
          </td>
          <td>₹{price2.toFixed(2)}</td>
          <td className="d-flex align-items-center justify-content-center">
            <Button
              onClick={decreaseQuantity2}
              variant="outline-secondary"
              size="sm"
            >
              -
            </Button>
            <span className="mx-2">{quantity2}</span>
            <Button
              onClick={increaseQuantity2}
              variant="outline-secondary"
              size="sm"
            >
              +
            </Button>
          </td>
          <td>₹{(price2 * quantity2).toFixed(2)}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ProductTable;
