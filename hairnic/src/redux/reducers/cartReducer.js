import { initialState } from "./initialstate";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../constant";

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, cart: action.payload };
        case REMOVE_FROM_CART:
            return { ...state, cart: action.payload };
        default:
            return state;
    }
}


//TODO: for cart activities
// ADD_TO_CART
// REMOVE_FROM_CART
// Update quantity