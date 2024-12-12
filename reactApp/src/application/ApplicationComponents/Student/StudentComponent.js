import React, { Component } from 'react'

class StudentComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: '',
      email: '',
    }
  }

  onTextChange = (evt) => {
    let target = evt.target
    let classList = target.classList //reading the class name of html when change event happens
    let value = target.value

    if (classList.contains('username')) {
      this.setState({ userName: value })
    } else if (classList.contains('pass')) {
      this.setState({ password: value })
    } else if (classList.contains('email')) {
      this.setState({ email: value })
    }
    evt.preventDefault()
  }

  loginStudent = (evt) => {
    const newStudent = this.state
    this.props.SaveStudentToServer(newStudent)

    evt.preventDefault()
  }

  render() {
    return (
      <>
        <h1>User Login Page</h1>
        <section className={'componentClass'}>
          <div className="form col-md-8">
            <div className="col-md-12">
              <b>User Name</b>
              <input
                type="text"
                className="form-control col-md-6 username"
                value={this.state.userName}
                placeholder="User Name"
                onChange={this.onTextChange}
                maxLength={40}
              />
            </div>
            <div className="col-md-12">
              <b>Password</b>
              <input
                type="password"
                className="form-control col-md-6 pass"
                value={this.state.password}
                placeholder="Password"
                onChange={this.onTextChange}
                maxLength={40}
              />
            </div>
            <div className="col-md-12">
              <b>Email</b>
              <input
                type="text"
                className="form-control col-md-6 email"
                value={this.state.email}
                placeholder="Email"
                onChange={this.onTextChange}
                required
              />
            </div>

            <input
              type="button"
              className={'btn btn-primary col-md-2 saveUser'}
              value={'SignIn-Up'}
              onClick={this.loginStudent}
            />
          </div>
        </section>
      </>
    )
  }
}

export default StudentComponent
