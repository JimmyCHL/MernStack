import * as actionTypes from '../ActionTypes'

export const initialState = []

// order reducer
export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER:
      return [action.payload, ...state]
    case actionTypes.FETCH_ORDERS:
      return action.payload
    case actionTypes.EMPTY_ORDER:
      return initialState
    case actionTypes.UPDATE_ORDERS:
      return action.payload
    default:
      return state
  }
}
