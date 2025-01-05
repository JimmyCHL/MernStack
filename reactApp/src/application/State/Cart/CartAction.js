import * as actionTypes from '../ActionTypes'

/**  Add Item to Cart */
export const ADD_PRODUCT_TO_CART = (product) => {
  return (dispatch, getState) => {
    const cartList = getState().cartReducer
    if (cartList.find((cart) => cart._id === product._id)) {
      alert('Product already added to cart')
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

// export const fetchUserCart = (userId) => {
//   console.log('Cart ')
//   return function (dispatch) {
//     //dispatch(loading(true));
//     axios
//       .post('http://localhost:9000/cart/api/getusercart', userId)
//       .then((allCartData) => {
//         let cartList = allCartData.data
//         console.log('get products response ', cartList)
//         //dispatch(loading(false));
//         //need to do this in loop
//         dispatch(AddItemToCart(cartList))
//       })
//       .catch((err) => {
//         //dispatch(loading(false));
//         console.log('Error While Saving Product', err)
//       })
//   }
// }

// save cart to mongo db for checkout through api to server
// export const saveCartForCheckout = (product) => {
//   console.log('Product ', product)
//   return function (dispatch) {
//     //dispatch(loading(true));
//     axios
//       .post('http://localhost:9000/cart/api/saveCart', product)
//       .then((allData) => {
//         let productresp = allData.data
//         console.log('product save response ', productresp)
//         //dispatch(loading(false));
//         dispatch(fetchProducts()) //fetched at the time of save it self
//       })
//       .catch((err) => {
//         console.log('Error While Saving Product', err)
//       })
//   }
// }
