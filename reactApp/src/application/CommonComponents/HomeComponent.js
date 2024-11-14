//create a home component and display information about use here //at least 5 and use it in app,js
import React from 'react'

export default class HomeComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: 'Jimmy',
        age: 25,
        address: 'Somewhere in the world',
        session: 'MernStack',
        email: 'test@gmail.com',
      },
    }
  }

  onclick = (evt) => {
    evt.preventDefault()
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        name: 'Not Jimmy',
      },
    }))
  }

  render() {
    return (
      <div>
        <h2>Home Component</h2>
        <h3>Current Session is {this.props.session}</h3>
        <h3>User Information</h3>
        <p>Name: {this.state.user.name}</p>
        <p>Age: {this.state.user.age}</p>
        <p>Address: {this.state.user.address}</p>
        <p>Session: {this.state.user.session}</p>
        <p>Email: {this.state.user.email}</p>
        <br />
        <button onClick={this.onclick}>Change Name</button>
      </div>
    )
  }
}
