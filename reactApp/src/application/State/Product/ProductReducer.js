import * as actionTypes from '../ActionTypes'

export const initialState = {
  product: {
    name: '',
    price: 0,
    desc: '',
    rate: 0,
    category: '',
  },
}

// product reducer
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return { ...state, product: action.payload }
    default:
      return state
  }
}
