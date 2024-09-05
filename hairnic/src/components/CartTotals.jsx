
import React from "react";
import { Card, Table } from "react-bootstrap";

const CartTotals = ({ price1, price2, quantity1, quantity2 }) => {
  const subtotal = price1 * quantity1 + price2 * quantity2;

  const hrStyle = {
    height: "1px",
    border: "none",
    color: "#cdcdcd",
    backgroundColor: "#cdcdcd",
    margin: "10px 0",
  };

  return (
    <Card className="border-1 shadow-sm">
      {}
      
      <Card.Body>
        <Card.Title>Cart Totals</Card.Title>
        <Table borderless>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>₹{subtotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td colSpan="2">
                <hr style={hrStyle} />
              </td>
            </tr>
            <tr>
              <td>
                <h5>Total</h5>
              </td>
              <td>
                <h6>₹{subtotal.toFixed(2)}</h6>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default CartTotals;
