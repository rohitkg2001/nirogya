import { GET_PRODUCT_BY_ID, GET_PRODUCTS, GET_REVIEWS } from "../constant"
import { initialState } from "./initialstate"


export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state, products: action.payload
            }
        case GET_PRODUCT_BY_ID:
            return {
                ...state, productDetail: action.payload
            }
        case GET_REVIEWS:
            return { ...state, testimonial: action.payload }

        default:
            return state
    }
}


// TODO:for user activities
// CHECK_FOR_LOGIN
// SIGNUP
// LOGIN
// LOGOUT
// ADD_ADDRESS
// REMOVE_ADDRESS
// UPDATE_ADDRESS
// GET_ADDRESS
