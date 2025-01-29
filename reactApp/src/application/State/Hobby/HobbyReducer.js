import * as actionTypes from '../ActionTypes'

export const initialState = []

// hobby reducer
export const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_HOBBY:
      return [action.payload, ...state]
    case actionTypes.FETCH_HOBBIES:
      return action.payload
    default:
      return state
  }
}
