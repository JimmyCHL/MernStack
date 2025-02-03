import axiosInstance from '../../config/globalAxios'
import * as actionTypes from '../ActionTypes'

/** Add an notification action */
const ADD_NOTIFICATION = (notification) => {
  return {
    type: actionTypes.ADD_NOTIFICATION,
    payload: notification,
  }
}

/** Fetch notifications action */
const FETCH_NOTIFICATIONS = (notifications) => {
  return {
    type: actionTypes.FETCH_NOTIFICATIONS,
    payload: notifications,
  }
}

/** Mark notification as read */
const REMOVE_NOTIFICATION = (notificationId) => {
  return {
    type: actionTypes.REMOVE_NOTIFICATION,
    payload: notificationId,
  }
}

/** add a notification  */
export const addNotification = (userId, content, callback) => {
  return function (dispatch) {
    axiosInstance
      .post('/notification/api/createNotification', { userId, content })
      .then((response) => {
        const notification = response.data
        dispatch(ADD_NOTIFICATION(notification))
        callback?.()
      })
      .catch((err) => {
        console.log('There was an error:', err)
      })
  }
}

// fetch unRead notifications from database for a user
export const getNotifications = (userId) => {
  return function (dispatch) {
    axiosInstance
      .post('/notification/api/fetchNotificationsByUserId', { userId })
      .then((response) => {
        const notifications = response.data
        dispatch(FETCH_NOTIFICATIONS(notifications))
      })
      .catch((err) => {
        console.log('There was an error:', err)
      })
  }
}

// mark notification as read
export const markNotificationIsRead = (notificationId, callback) => {
  return function (dispatch) {
    axiosInstance
      .put(`/notification/api/markNotificationIsRead`, { notificationId })
      .then((_) => {
        dispatch(REMOVE_NOTIFICATION(notificationId))
        callback?.()
      })
      .catch((err) => {
        console.log('There was an error:', err)
      })
  }
}
