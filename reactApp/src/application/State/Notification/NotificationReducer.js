import * as actionTypes from '../ActionTypes'

export const initialState = []

// notification reducer
export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTIFICATION:
      return [action.payload, ...state]
    case actionTypes.REMOVE_NOTIFICATION:
      return state.filter((notification) => notification._id !== action.payload)
    case actionTypes.FETCH_NOTIFICATIONS:
      return action.payload
    default:
      return state
  }
}
