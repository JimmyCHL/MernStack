import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  let user = props.user //reading from mapStateToProps which reads from userReducer.user
  // console.log(user)
  console.log('props.student ' + JSON.stringify(props.student))

  const usrName = user && user.userName ? user.userName : ''
  const studentUsrName = props.student && props.student.userName ? props.student.userName : ''

  return (
    <>
      {usrName != '' ? (
        <h2>Hi {usrName} , Welcome to Shopping Cart sponsored by Tech Team SIT</h2>
      ) : (
        <div>
          <h2>Welcome to Shopping Cart sponsored by Tech Team SIT,</h2>
          <h3>Please click on login button to proceed to login.</h3>
        </div>
      )}
      <h3>==================================================================</h3>
      {studentUsrName !== '' ? (
        <h2>Hi {studentUsrName} , Welcome to Student Portal</h2>
      ) : (
        <h3>Please click on Student Login button to proceed to student login.</h3>
      )}

      <div>
        <NavLink to="/home" className="button" activeclassname="true">
          Home
        </NavLink>
        <NavLink to="/login" className="button" activeclassname="true">
          User
        </NavLink>
        <NavLink to="/studentLogin" className="button" activeclassname="true">
          Student
        </NavLink>
        <NavLink to="/productForm" className="button" activeclassname="true">
          Product Form
        </NavLink>
        <NavLink to="/productsList" className="button" activeclassname="true">
          Products List
        </NavLink>
        {/* <NavLink to="/app" className="button" activeclassname="true">
          AppCopy
        </NavLink> */}
        <NavLink to="/about" className="button" activeclassname="true">
          About
        </NavLink>
        {/* <NavLink to="/about/2500" className="button" activeclassname="true">
          About with Param
        </NavLink>
        <NavLink to="/aws/image" className="button" activeclassname="true">
          AW3 Image
        </NavLink> */}
        {/* <NavLink to="/topics" className="button" activeclassname="true">
          Topics
        </NavLink> */}
      </div>
      <hr />
    </>
  )
}

let mapStateToProps = (store) => {
  return {
    user: store.userReducer.user,
    student: store.studentReducer.student,
  }
}

export default connect(mapStateToProps, null)(Header)
