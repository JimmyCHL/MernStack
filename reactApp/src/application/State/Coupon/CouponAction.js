import * as actionTypes from '../ActionTypes'

// Add generated Coupon to the store
export const ADD_COUPON = (couponDigits) => {
  return {
    type: actionTypes.ADD_COUPON,
    payload: couponDigits,
  }
}

// Empty the coupon from the store
export const EMPTY_COUPON = () => {
  return {
    type: actionTypes.EMPTY_COUPON,
  }
}
