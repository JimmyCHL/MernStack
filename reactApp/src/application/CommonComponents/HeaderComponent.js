import React, { useEffect } from 'react'
import { MdNotifications } from 'react-icons/md'
import { connect, useDispatch } from 'react-redux'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { NotificationOverLay } from '../ApplicationComponents/Notification/components/NotificationOverLay'
import { FETCH_HOBBIES } from '../State/ActionTypes'
import { fetchHobbies } from '../State/Hobby/HobbyAction'
import { SignOutUser } from '../State/User/UserActions'
import { ShowTime } from './Assessment4Comp/ShowTime'

const Header = (props) => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let user = props.user //reading from mapStateToProps which reads from userReducer.user
  console.log(user)
  // console.log('props.student ' + JSON.stringify(props.student))

  const usrName = user && user.userName ? user.userName : ''
  // const studentUsrName = props.student && props.student.userName ? props.student.userName : ''

  /** Check location (route changes), if no token, we will sign User out, (for more advance we can check expiration date as well, but not for this project) */
  useEffect(() => {
    if (
      location.pathname === '/home' ||
      location.pathname === '/about' ||
      location.pathname === '/atmDispenser' ||
      location.pathname === '/addHobby'
    )
      return
    if (!localStorage.getItem('token')) {
      props.signOutUser()
      navigate('/login')
    }
  }, [location.pathname])

  useEffect(() => {
    fetchHobbies((hobbies) => dispatch({ type: FETCH_HOBBIES, payload: hobbies }))
  }, [])

  return (
    <>
      {usrName != '' ? (
        <h2>
          Hi {usrName} , Welcome to Shopping Cart sponsored by Tech Team SIT{' '}
          <button
            onClick={() => {
              props.signOutUser()
              navigate('/login')
            }}
          >
            Logout
          </button>
          <NotificationOverLay notifications={props.notifications}>
            <div style={{ position: 'relative', display: 'inline-block', cursor: 'pointer' }}>
              <MdNotifications size={30} color="black" />
              {props.notifications.length > 0 && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    backgroundColor: 'red',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '5px',
                    fontSize: '12px',
                  }}
                >
                  {props.notifications.length}
                </div>
              )}
            </div>
          </NotificationOverLay>
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
          <ShowTime />
          <NavLink to="/home" className="button" activeclassname="true">
            Home
          </NavLink>
          <NavLink to="/login" className="button" activeclassname="true">
            User
          </NavLink>
          <NavLink to="/about" className="button" activeclassname="true">
            About
          </NavLink>
          <NavLink to="/atmDispenser" className="button" activeclassname="true">
            ATM Dispenser
          </NavLink>
          <NavLink to="/addHobby" className="button" activeclassname="true">
            Add Hobby
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
          <NavLink to="/cancelled-orders" className="button" activeclassname="true">
            Cancelled Orders
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
    notifications: store.notificationReducer,
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
