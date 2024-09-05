import { ADD_TO_CART, REMOVE_FROM_CART } from "../constant";

// const calculateRegular_price = (cart) => {
//   return cart.reduce((total, product) => total + product.price, 0);
// };

export const addToCart = (id, cart) => async (dispatch) => {
  const productToAdd = [...cart, id]; //TODO: Implement logic to check cart and add a new product with id in cart
  // Calculate regular_price
  //   const regular_price = calculateRegular_price(updatedCart);

  await dispatch({ type: ADD_TO_CART, payload: productToAdd });
};

export const removeFromCart = (id) => async (dispatch) => {
  const productToRemove = id; //TODO: Implement logic to check cart and remove existing product with id from cart
  await dispatch({ type: REMOVE_FROM_CART, payload: productToRemove });
};
