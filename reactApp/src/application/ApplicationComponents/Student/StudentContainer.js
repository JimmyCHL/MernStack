import { connect } from 'react-redux' //helps react component to connect with store

import { SaveStudentToServer } from '../../State/Student/StudentAction.js'
import StudentComponent from './StudentComponent.js' //we are importing component to be used to access

//mapstatetoprops -- allows component to become subscriber
let mapStateToProps = (store) => {
  //store is the redux states
  return {
    student: store.studentReducer.student,
  }
}

//mapDispatchToProps -- allows us to send data back to store to update in reducer
//dispatch - this dispatcher we get from connect to send action to store
let mapDispatchToProps = (dispatch) => {
  return {
    SaveStudentToServer: (student) => {
      dispatch(SaveStudentToServer(student))
    },
  }
}

//connect accepts - mapStateToProps - for subscribing and mapDispatchToProps - for publishing
export default connect(mapStateToProps, mapDispatchToProps)(StudentComponent)
