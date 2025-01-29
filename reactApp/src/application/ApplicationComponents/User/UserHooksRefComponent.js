//hooks are the independent functions build perform the tasks we have to do with states, reducers etc
import React, { useEffect, useRef, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { hobbiesSelector } from '../../State/Hobby/HobbySelector'
import { SaveUserToDBUsingAxios, updateHobby } from '../../State/User/UserActions'

const UserHooksRefComponent = () => {
  //to subscribe we need to implement - mapStateToProps and its equivalent hook is useSelector
  const user = useSelector((store) => store.userReducer.user)
  //console.log(user)
  const hobbies = useSelector(hobbiesSelector)
  const [hobby, setHobby] = useState(null)

  //to make component a publisher we need to implement mapDispatch to props - useDispatch
  const dispatcher = useDispatch()

  const userRef = useRef({})

  const onTextChange = (evt) => {
    const name = evt.target.name
    const val = evt.target.value
    userRef.current[name] = val
    evt.preventDefault()
  }

  const loginUser = (evt) => {
    const userObj = userRef.current

    alert(JSON.stringify(userObj))

    dispatcher(SaveUserToDBUsingAxios(userObj))

    evt.preventDefault()
  }

  //Assessment
  const updateUserWithHobby = (evt) => {
    if (!hobby) return alert('Please select a hobby to update')
    dispatcher(updateHobby(user._id, hobby))
    evt.preventDefault()
  }

  useEffect(() => {
    userRef.current = { userName: user.userName, password: user.password, street: user.street, mobile: user.mobile }
    setHobby(user.hobby)
    console.log(userRef.current)
    return () => {
      console.log('Component Unmounted')
    }
  }, [user])

  return (
    <>
      <h1>User Login Page</h1>
      <section className={'componentClass'}>
        <div className="form col-md-8">
          <div className="col-md-12">
            <b>User Name</b>
            <input
              type="text"
              name="userName"
              className="form-control col-md-6 username"
              placeholder="User Name"
              onChange={onTextChange}
              maxLength={40}
            />
          </div>
          <div className="col-md-12">
            <b>Password</b>
            <input
              type="password"
              name="password"
              className="form-control col-md-6 pass"
              placeholder="Password"
              onChange={onTextChange}
              maxLength={20}
            />
          </div>
          <div className="col-md-12">
            <b>Street </b>
            <input
              type="text"
              name="street"
              className="form-control col-md-6 street"
              placeholder="Street Name"
              onChange={onTextChange}
            />
          </div>

          <div className="col-md-12">
            <b>Mobile </b>
            <input
              type="number"
              className="form-control col-md-6 mobile"
              placeholder="Mobile"
              name="mobile"
              maxLength={11}
              onChange={onTextChange}
            />

            {user.userName && (
              <>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {hobby ? hobby.name : 'Select Hobby'}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {hobbies.map((hobby) => (
                      <Dropdown.Item key={hobby.name} onClick={() => setHobby(hobby)} eventKey={hobby.name}>
                        {hobby.name}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <input
                  type="button"
                  className={'btn btn-primary col-md-2 saveUser'}
                  value={'Update hobby'}
                  onClick={updateUserWithHobby}
                />
              </>
            )}
          </div>
          <input
            type="button"
            className={'btn btn-primary col-md-2 saveUser'}
            value={'SignIn-Up'}
            onClick={loginUser}
          />
        </div>
      </section>
    </>
  )
}

export default UserHooksRefComponent
