import { ADD_TO_CART, REMOVE_FROM_CART } from "../constant";



export const addToCart = (id, cart) => async (dispatch) => {
    const productToAdd = [...cart, id] //TODO: Implement logic to check cart and add a new product with id in cart
    await dispatch({ type: ADD_TO_CART, payload: productToAdd })
}

export const removeFromCart = (id) => async (dispatch) => {
    const productToRemove = id //TODO: Implement logic to check cart and remove existing product with id from cart
    await dispatch({ type: REMOVE_FROM_CART, payload: productToRemove })
}