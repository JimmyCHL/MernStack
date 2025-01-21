import axios from 'axios'
import * as actionTypes from '../ActionTypes'
import { EMPTY_CART, MERGE_CART, removeCartAfterCheckout } from '../Cart/CartAction'
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

/** Empty orders */
export const EMPTY_ORDER = () => {
  return {
    type: actionTypes.EMPTY_ORDER,
  }
}

/** Update orders */
export const UPDATE_ORDERS = (orders) => {
  return {
    type: actionTypes.UPDATE_ORDERS,
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

// cancel order by order id
export const cancelOrder = (orderId, callback) => {
  return function (dispatch, getState) {
    axios
      .delete(`http://localhost:3000/order/api/cancelOrder`, { data: { orderId } })
      .then((response) => {
        const order = response.data
        if (!order) {
          alert('Order not found')
          return
        }
        const orders = getState().orderReducer
        const updatedOrders = orders.map((item) => {
          if (item._id === order._id) {
            return order
          }
          return item
        })
        dispatch(UPDATE_ORDERS(updatedOrders))
        callback()
      })
      .catch((err) => {
        console.log('There was an error:', err)
      })
  }
}

/** reorder order by order order items (will be added to cart) */
export const reOrder = (orderItems, callback) => {
  return function (dispatch, getState) {
    const cart = getState().cartReducer
    // need to implement deepClone
    const newCart = cart.map((cartItem) => JSON.parse(JSON.stringify(cartItem)))

    // loop through orderItems and add to cart or update qty
    orderItems.forEach((orderItem) => {
      const productId = orderItem.item._id
      const cartItem = newCart.find((cartItem) => cartItem._id === productId)

      if (cartItem) {
        cartItem.qty += orderItem.quantity
      } else {
        newCart.push({ ...orderItem.item, qty: orderItem.quantity })
      }
    })

    dispatch(MERGE_CART(newCart))
    callback()
  }
}
