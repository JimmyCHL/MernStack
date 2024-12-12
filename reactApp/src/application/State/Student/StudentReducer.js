//defines the initial state to be used in user component as props and reducers to update the user data
import * as actionTypes from '../ActionTypes'

const initialState = {
  student: {
    userName: '',
    password: '',
    email: '',
  },
}
//this will be used by store to map the action type and then update/create new student state
const StudentReducer = (state = initialState, action) => {
  //   console.log('Student Reducer ', action.payload)
  switch (action.type) {
    case actionTypes.ADD_STUDENT_TO_STORE:
      return { ...state, student: action.payload }
      break
    default:
      return state
      break
  }
}
export default StudentReducer
