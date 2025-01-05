//this contains list of actions which will be used in reducers and action files
//constants are returned as action types which will be used in action and reducer files
export const ADD_USER_TO_STORE = 'STORE.ADDUSER'
export const SIGN_OUT_USER = 'STORE.SIGNOUTUSER'

//student
export const ADD_STUDENT_TO_STORE = 'STORE.ADDSTUDENT'
export const SIGN_OUT_STUDENT = 'STORE.SIGNOUTSTUDENT'

//product
export const ADD_PRODUCT = 'STORE.ADDPRODUCT'
export const fetchProducts = 'STORE.FETCHPRODUCTS'

//cart
export const ADD_PRODUCT_TO_CART = 'STORE.ADDPRODUCTTOCART'
export const REMOVE_ITEM_FROM_CART = 'STORE.REMOVEITEMFROMCART'
export const UPDATE_ITEM_IN_CART = 'STORE.UPDATEITEMINCART'
export const EMPTY_CART = 'CART.EMPTY_CART'
