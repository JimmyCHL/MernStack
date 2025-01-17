import React from 'react'
import { connect } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { SignOutUser } from '../State/User/UserActions'

const Header = (props) => {
  const navigate = useNavigate()
  let user = props.user //reading from mapStateToProps which reads from userReducer.user
  console.log(user)
  // console.log('props.student ' + JSON.stringify(props.student))

  const usrName = user && user.userName ? user.userName : ''
  // const studentUsrName = props.student && props.student.userName ? props.student.userName : ''

  return (
    <>
      {usrName != '' ? (
        <h2>
          Hi {usrName} , Welcome to Shopping Cart sponsored by Tech Team SIT{' '}
          <button
            onClick={() => {
              props.signOutUser()
              navigate('/home')
            }}
          >
            Logout
          </button>
        </h2>
      ) : (
        <div>
          <h2>Welcome to Shopping Cart sponsored by Tech Team SIT,</h2>
          <h3>Please click on login button to proceed to login.</h3>
        </div>
      )}
      {/* <h3>==================================================================</h3> */}
      {/* {studentUsrName !== '' ? (
        <h2>
          Hi {studentUsrName} , Welcome to Student Portal <button onClick={props.signOutStudent}>Logout</button>
        </h2>
      ) : (
        <h3>Please click on Student Login button to proceed to student login.</h3>
      )} */}

      {!usrName ? (
        <div>
          <NavLink to="/home" className="button" activeclassname="true">
            Home
          </NavLink>
          <NavLink to="/login" className="button" activeclassname="true">
            User
          </NavLink>
          <NavLink to="/about" className="button" activeclassname="true">
            About
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink to="/home" className="button" activeclassname="true">
            Home
          </NavLink>
          <NavLink to="/login" className="button" activeclassname="true">
            User
          </NavLink>
          {/* <NavLink to="/studentLogin" className="button" activeclassname="true">
          Student
        </NavLink> */}
          {
            // only admin can see the product form and Coupon Generation
            usrName === 'admin' && (
              <NavLink to="/productForm" className="button" activeclassname="true">
                Product Form
              </NavLink>
            )
          }
          <NavLink to="/couponGeneration" className="button" activeclassname="true">
            Coupon Generation
          </NavLink>
          <NavLink to="/productsList" className="button" activeclassname="true">
            Products List
          </NavLink>
          <NavLink to="/cart" className="button" activeclassname="true">
            Cart
          </NavLink>
          {/* <NavLink to="/app" className="button" activeclassname="true">
          AppCopy
        </NavLink> */}
          <NavLink to="/orders" className="button" activeclassname="true">
            Orders
          </NavLink>
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
      )}

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

let mapDispatchToProps = (dispatch) => {
  return {
    signOutUser: () => {
      dispatch(SignOutUser())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
