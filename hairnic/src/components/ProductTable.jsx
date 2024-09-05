import React from "react";
import { Table, Button, CloseButton } from "react-bootstrap";

const ProductTable = ({
  quantity1,
  quantity2,
  increaseQuantity1,
  decreaseQuantity1,
  increaseQuantity2,
  decreaseQuantity2,
  price1,
  price2,
  removeProduct1,
  removeProduct2,
}) => {
  return (
    <div className="col-12 mb-4 ">
      <Table striped bordered hover className="table-responsive">
        <thead style={{ backgroundColor: "#8BC34A", color: "white" }}>
          <tr>
            <th>Item</th>
            <th>Sale Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <div
                  className="mr-2"
                  style={{
                    border: "1, solid, #ddd",
                  }}
                >
                  <CloseButton onClick={removeProduct1} />
                </div>
                <img
                  src="img/shampoo-1.png"
                  alt="Shampoo"
                  width="50"
                  height="50"
                  className="mr-2"
                />
                <div>
                  <strong>Hairnic Shampoo</strong>
                  <br />
                  <small>
                    Hairnic Shampoo nourishes and revitalizes hair for a
                    healthy, shiny look.
                  </small>
                </div>
              </div>
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
              <div className="d-flex align-items-center">
                <div className="mr-2">
                  <CloseButton onClick={removeProduct2} />
                </div>
                <img
                  src="img/kerala1.png"
                  width="50"
                  height="50"
                  alt="Kerala Ayurveda"
                  className="mr-2"
                />
                <div>
                  <strong>Kerala Ayurveda</strong>
                  <br />
                  <small>
                    Kerala Ayurveda provides authentic Ayurvedic treatments and
                    products.
                  </small>
                </div>
              </div>
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
