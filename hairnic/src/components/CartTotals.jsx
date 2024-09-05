import React from "react";
import { Card, Table } from "react-bootstrap";

const CartTotals = ({ price1, price2, quantity1, quantity2 }) => {
  const subtotal = price1 * quantity1 + price2 * quantity2;
  return (
    <Card>
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
                <hr
                  style={{
                    width: "100%",
                    border: "1px solid black",
                    margin: "10px 0",
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <h5>Total</h5>
              </td>
              <h6>₹{subtotal.toFixed(2)}</h6>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default CartTotals;
