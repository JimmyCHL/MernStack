import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div>
        <NavLink to="/" className="button" activeclassname="true">
          Success
        </NavLink>
        <NavLink to="/userSignIn" className="button" activeclassname="true">
          User SignIn
        </NavLink>
        <NavLink to="/lifeCycle" className="button" activeclassname="true">
          LifeCycle
        </NavLink>
      </div>
      <hr />
    </>
  )
}
export default Header
