import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./redux/reducers/productReducer";
import { cartReducer } from "./redux/reducers/cartReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer
})

export const store = configureStore({
    reducer: rootReducer,
})