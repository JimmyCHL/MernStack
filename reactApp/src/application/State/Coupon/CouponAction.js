import * as actionTypes from '../ActionTypes'

// Add generated Coupon to the store
export const ADD_COUPON = (couponDigits) => {
  return {
    type: actionTypes.ADD_COUPON,
    payload: couponDigits,
  }
}
