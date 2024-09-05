import React from 'react'
import ProductList from './ProductList';


const ProdectItem = () => {
 
    const products = [
        { name: 'Product 1', price: 29.99, rating: 4, image: 'https://via.placeholder.com/150' },
        { name: 'Product 2', price: 19.99, rating: 3, image: 'https://via.placeholder.com/150' },
        { name: 'Product 3', price: 39.99, rating: 5, image: 'https://via.placeholder.com/150' },
        { name: 'Product 4', price: 49.99, rating: 2, image: 'https://via.placeholder.com/150' },
        { name: 'Product 5', price: 59.99, rating: 4, image: 'https://via.placeholder.com/150' },
        { name: 'Product 6', price: 69.99, rating: 5, image: 'https://via.placeholder.com/150' },
        { name: 'Product 7', price: 79.99, rating: 3, image: 'https://via.placeholder.com/150' },
        { name: 'Product 8', price: 89.99, rating: 4, image: 'https://via.placeholder.com/150' },
        { name: 'Product 9', price: 99.99, rating: 5, image: 'https://via.placeholder.com/150' },
        { name: 'Product 10', price: 109.99, rating: 2, image: 'https://via.placeholder.com/150' },
      ];
    
      return (
        <div className="App">
        <ProductList/>
        </div>
      );
    };


export default ProdectItem
