import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./redux/reducers/userReducer";
import { cartReducer } from "./redux/reducers/cartReducer";

export const store = configureStore({ reducer: cartReducer, })