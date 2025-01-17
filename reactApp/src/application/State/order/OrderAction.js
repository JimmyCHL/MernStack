import axios from 'axios'
import * as actionTypes from '../ActionTypes'
import { EMPTY_CART, removeCartAfterCheckout } from '../Cart/CartAction'
import { EMPTY_COUPON } from '../Coupon/CouponAction'

/** Add order action */
const ADD_ORDER = (order) => {
  return {
    type: actionTypes.ADD_ORDER,
    payload: order,
  }
}

/** Fetch orders action */
const FETCH_ORDERS = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS,
    payload: orders,
  }
}

// add order to database
export const addOrder = (userId, coupon, callback) => {
  return function (dispatch, getState) {
    // get cartList from state
    const cart = getState().cartReducer
    const discount = coupon
      ? {
          code: coupon,
          percentage: 10,
        }
      : undefined
    axios
      .post('http://localhost:3000/order/api/createOrder', { userId, cart, discount })
      .then((response) => {
        const order = response.data
        dispatch(ADD_ORDER(order))
        // should clear the cart after place order
        dispatch(EMPTY_CART())
        dispatch(removeCartAfterCheckout({ cart: [], userId }))
        dispatch(EMPTY_COUPON())
        callback()
      })
      .catch((err) => {
        console.log('There was an error:', err)
      })
  }
}

// fetch orders from database for a user
export const getOrders = (userId) => {
  return function (dispatch) {
    axios
      .post('http://localhost:3000/order/api/fetchOrdersByUserId', { userId })
      .then((response) => {
        const orders = response.data
        dispatch(FETCH_ORDERS(orders))
      })
      .catch((err) => {
        console.log('There was an error:', err)
      })
  }
}
