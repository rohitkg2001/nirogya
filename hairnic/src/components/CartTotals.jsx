import React from "react";
import { Card, Table } from "react-bootstrap";

const CartTotals = ({ price1, price2, quantity1, quantity2 }) => {
  const subtotal = price1 * quantity1 + price2 * quantity2;
  return (
    <div className="col-md-3 mb-4">
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
                <td>Total</td>
                <td>₹{subtotal.toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CartTotals;
