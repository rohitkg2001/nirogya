import React from 'react'
import OrderSummary from './OrderSummary';


const Oder = () => {
    const order = {
        orderNumber: '123456',
        date: 'September 1, 2024',
        products: [
          { name: 'Product 1', quantity: 2, price: 29.99 },
          { name: 'Product 2', quantity: 1, price: 49.99 }
        ],
        total: 109.97,
        paymentMethod: 'Online'
      };
    
      return (
        <div className="App">
          <OrderSummary
            orderNumber={order.orderNumber}
            date={order.date}
            products={order.products}
            total={order.total}
            paymentMethod={order.paymentMethod}
          />
        </div>
      );
    };
export default Oder
