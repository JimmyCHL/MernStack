import { Component } from 'react'

export default class Anthony extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: 'Anthony',
        age: 32,
        address: 'Somewhere in CA',
        degree: 'Bachelors',
      },
    }
  }

  render() {
    return (
      <div>
        <h3>{this.state.user.name}'s Information</h3>
        <p>Name: {this.state.user.name}</p>
        <p>Age: {this.state.user.age}</p>
        <p>Address: {this.state.user.address}</p>
        <p>Degree: {this.state.user.degree}</p>

        <h4>{this.state.user.name === this.props.friend.friendName ? 'They are friends' : 'They are not friends'}</h4>
        {this.state.user.name !== this.props.friend.friendName && (
          <h5>{`${this.props.friend.name}'s friend is actually ${this.props.friend.friendName}.`}</h5>
        )}
      </div>
    )
  }
}
