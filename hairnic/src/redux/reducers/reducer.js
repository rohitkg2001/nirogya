import { GET_PRODUCTS } from "../constant"
const initialState = {
    user: {},
    products: [
        {
            name: "",
            regular_price: "",
            review_average: "",
            image_url: ""
        }
    ],
    testimonial: {},
    loading: true,
    error: null,
    blogs: {}
}


export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state, products: action.payload
            }
        case 'GET_TESTIMONIAL':
            return { ...state, testimonial: action.payload }

        default:
            return state
    }
}