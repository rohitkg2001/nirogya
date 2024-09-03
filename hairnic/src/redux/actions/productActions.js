import axios from "axios";
import { GET_PRODUCTS, baseURL } from "../constant";


export const getProducts = () => async (dispatch) => {
    const response = await axios.get(`${baseURL}api/products/get-products`);
    const { data, message, count } = response.data
    await dispatch({ type: GET_PRODUCTS, payload: data })
}