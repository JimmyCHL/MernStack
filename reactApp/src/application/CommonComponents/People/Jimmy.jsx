import { Component } from 'react'
import Anthony from './Anthony.jsx'

export default class Jimmy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: 'Jimmy',
        age: 30,
        address: 'Somewhere in SC',
        degree: 'Masters',
        friendName: 'Anthony',
      },
    }
  }

  onclick = (evt) => {
    evt.preventDefault()
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        friendName: 'Jessica',
      },
    }))
  }

  render() {
    return (
      <div>
        <h3>{this.state.user.name}'s Information</h3>
        <p>Name: {this.state.user.name}</p>
        <p>Age: {this.state.user.age}</p>
        <p>Address: {this.state.user.address}</p>
        <p>Degree: {this.state.user.degree}</p>

        <Anthony friend={this.state.user} />
        <h5>Are they really friends? </h5>
        <button onClick={this.onclick}>Get result</button>
      </div>
    )
  }
}
