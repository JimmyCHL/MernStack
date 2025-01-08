import * as actionTypes from '../ActionTypes'

export const initialState = []

// cart reducer
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_TO_CART:
      return [...state, action.payload.product]
    case actionTypes.UPDATE_ITEM_IN_CART:
      return action.payload.updatedCartList
    case actionTypes.REMOVE_ITEM_FROM_CART:
      return state.filter((item) => item._id != action.payload.productId)
    case actionTypes.EMPTY_CART:
      return initialState
    default:
      return state
  }
}
