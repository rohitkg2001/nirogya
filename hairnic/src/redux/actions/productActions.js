import axios from "axios";
import { GET_PRODUCTS, GET_PRODUCT_BY_ID, baseURL } from "../constant";


export const getProducts = () => async (dispatch) => {
    const response = await axios.get(`${baseURL}products?limit=12`);
    const { products } = response.data
    await dispatch({ type: GET_PRODUCTS, payload: products })
}

export const getProductById = (id) => async (dispatch) => {
    const response = await axios.get(`${baseURL}product/${id}`);
    const data = response.data
    await dispatch({ type: GET_PRODUCT_BY_ID, payload: data })
}