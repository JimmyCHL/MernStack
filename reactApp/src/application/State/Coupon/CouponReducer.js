import * as actionTypes from '../ActionTypes'

export const initialState = ''

// coupon reducer
export const couponReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COUPON:
      return action.payload
    case actionTypes.EMPTY_COUPON:
      return initialState
    default:
      return state
  }
}
