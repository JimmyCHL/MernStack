import axios from 'axios'
import * as actionTypes from '../ActionTypes'

export const AddStudentToStore = (student) => {
  return {
    type: actionTypes.ADD_STUDENT_TO_STORE,
    payload: student,
  }
}

export const SaveStudentToServer = (studentObj) => {
  return (dispatch) => {
    axios
      .post(
        'http://localhost:3000/student/api/signinup', //uri or end point of singninup api
        studentObj
      )
      .then((collection) => {
        console.log(collection)
        let loggedStudent = collection.data
        console.log(loggedStudent)
        if (loggedStudent === 'error while sign up') {
          alert('Error while sign up')
          return
        }
        dispatch(AddStudentToStore(loggedStudent))
      })
      .catch((error) => console.log(error))
  }
}