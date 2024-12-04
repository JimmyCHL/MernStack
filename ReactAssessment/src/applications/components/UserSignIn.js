import React, { createRef, PureComponent } from 'react'

export default class UserSignIn extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      email: 'email',
      password: 'password',
    }

    this.emailRef = createRef()
    this.passwordRef = createRef()
  }

  formSubmit = (evt) => {
    evt.preventDefault()
    const email = this.emailRef.current.value
    const password = this.passwordRef.current.value

    this.setState({
      email,
      password,
    })
  }

  render() {
    return (
      <>
        <form className="form-control col-md-12" action="/api/userLogin" method="post" onSubmit={this.formSubmit}>
          <b>Email</b>
          <input
            type="email"
            className="form-control"
            placeholder={'Default Email'}
            ref={this.emailRef}
            maxLength={20}
            required
          ></input>
          <b>Password</b>
          <input
            type="text"
            className="form-control"
            placeholder={'Default Password'}
            ref={this.passwordRef}
            maxLength={20}
            required
          ></input>
          <button type="submit"> Save</button>
        </form>
        <label>{this.state.email}</label>
        <hr />
        <label>{this.state.password}</label>
      </>
    )
  }
}
