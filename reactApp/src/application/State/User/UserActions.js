//defines user actions which contains action type and payload for each action creator to dispatch to store

import axiosInstance from '../../config/globalAxios'
import * as actionTypes from '../ActionTypes'
import { EMPTY_CART, fetchUserCart } from '../Cart/CartAction'
import { EMPTY_COUPON } from '../Coupon/CouponAction'
import { EMPTY_ORDER, getOrders } from '../Order/OrderAction'

//action accepts payload value/object to be used in user reducer switch
export const AddUserToStore = (user) => {
  return {
    type: actionTypes.ADD_USER_TO_STORE,
    payload: user,
  }
}

export const SignOutUser = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SIGN_OUT_USER,
    })

    //clear the cart when user signout
    dispatch(EMPTY_CART())
    //clear the coupon when user signout
    dispatch(EMPTY_COUPON())
    //clear the order when user signout
    dispatch(EMPTY_ORDER())

    //Remove token while signout
    localStorage.removeItem('token')
  }
}

//need to make a ajax - asynchronous javascript like xml - be used to make parallel server/api calls
//React.fetch() - we can use to make API or can add axios library to achieve the same
export const SaveUserToDBUsingFetch = (userObj) => {
  console.log('SaveUserToDBUsingFetch called')
  return (dispatch) => {
    fetch('http://localhost:3000/user/api/signinup', {
      // uri - api path
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObj),
    }) //JSON object can't travel from client to server so needs to be converted to string
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((userData) => {
        const { user, token } = userData
        //set token to local storage
        localStorage.setItem('token', token)
        //dispatch or send saved/signin user to reducer
        dispatch(AddUserToStore(user))
        //get current user cart from server
        dispatch(fetchUserCart(user._id))
        //get current user orders from server
        dispatch(getOrders(user._id))
      })
      .catch((error) => console.log(error))
  }
}
export const SaveUserToDBUsingAxios = (userObj) => {
  console.log('SaveUserToDBUsingAxios called')
  return (dispatch) => {
    // should clean the existing cart when you login new user or re-login
    dispatch(EMPTY_CART())
    axiosInstance
      .post(
        '/user/api/signinup', //uri or end point of singninup api
        userObj // the user state object we dispatch from the user component
      )
      .then((collection) => {
        console.log(collection)
        const { user, token } = collection.data
        //set token to local storage
        localStorage.setItem('token', token)

        dispatch(AddUserToStore(user))
        //get current user cart from server
        dispatch(fetchUserCart(user._id))
        //get current user orders from server
        dispatch(getOrders(user._id))
      })
      .catch((error) => console.log(error))
  }
}

export const updateHobby = (userId, hobby) => {
  console.log(userId, hobby)
  return (dispatch) => {
    axiosInstance
      .put('/user/api/updateHobby', { userId, hobby })
      .then((collection) => {
        console.log(collection)
        const user = collection.data
        dispatch(AddUserToStore(user))
      })
      .catch((error) => {
        dispatch(SignOutUser())
        console.log(error)
      })
  }
}
