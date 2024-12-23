import * as actionTypes from '../ActionTypes'

export const initialState = {
  product: {
    name: '',
    price: 0,
    desc: '',
    rate: 0,
    category: '',
  },
  products: [],
}

// product reducer
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return { ...state, product: action.payload }
    case actionTypes.fetchProducts:
      return { ...state, products: action.payload }
    default:
      return state
  }
}
