import axios from 'axios'
import * as actionTypes from '../ActionTypes'

/**  Add Item to Cart */
export const ADD_PRODUCT_TO_CART = (product, showAlert = true) => {
  return (dispatch, getState) => {
    const cartList = getState().cartReducer
    if (cartList.find((cart) => cart._id === product._id)) {
      if (showAlert) alert('Product already added to cart')
      return
    }
    alert('Product added to cart')
    dispatch({
      type: actionTypes.ADD_PRODUCT_TO_CART,
      payload: { product },
    })
  }
}

/**  Update Item Qty to Cart */
export const UPDATE_ITEM_IN_CART = (productId, qty) => {
  return (dispatch, getState) => {
    const cartList = getState().cartReducer
    let productName = ''
    const updatedCartList = cartList.map((item) => {
      //...item means {name, desc, rating, qty, price}
      if (item._id === productId) {
        productName = item.name
        return { ...item, qty }
      }
      return item //for all other items in cart do not update anything
    })
    alert(`${productName} qty is updated to ${qty}`)
    dispatch({
      type: actionTypes.UPDATE_ITEM_IN_CART,
      payload: { updatedCartList },
    })
  }
}

/**  Remove Item from Cart */
export const REMOVE_ITEM_FROM_CART = (productId) => {
  alert('Product removed from cart')
  return {
    type: actionTypes.REMOVE_ITEM_FROM_CART,
    payload: { productId },
  }
}

/**  Clear Cart */
export const EMPTY_CART = () => {
  return {
    type: actionTypes.EMPTY_CART,
  }
}

// fetch current logged in user cart from mongo db
export const fetchUserCart = (userId) => {
  console.log('Cart ')
  return function (dispatch) {
    //dispatch(loading(true));
    axios
      .post('http://localhost:3000/cart/api/getUserCart', { userId })
      .then((collection) => {
        const cartList = collection.data
        console.log('get cartList response ', cartList)
        //dispatch(loading(false));
        // loop through the cartList and add each item to cart
        for (const item of cartList) {
          console.log('item in for of', item)
          dispatch(ADD_PRODUCT_TO_CART(item, false))
        }
      })
      .catch((err) => {
        //dispatch(loading(false));
        console.log('Error While Fetch Cart', err)
      })
  }
}

// save cart to mongo db for checkout through api to server
export const saveCartForCheckout = (userCartObject) => {
  return function (dispatch) {
    //dispatch(loading(true));
    axios
      .post('http://localhost:3000/cart/api/saveUserCart', userCartObject)
      .then((collection) => {
        //dispatch(loading(false));
        console.log('Cart Saved Successfully', collection.data)
      })
      .catch((err) => {
        console.log('Error While Saving Cart', err)
      })
  }
}
