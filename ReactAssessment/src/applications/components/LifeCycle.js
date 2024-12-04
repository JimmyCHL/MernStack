import React, { Component } from 'react'

export default class LifeCycle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        name: 'John',
        age: 25,
      },
    }

    this.nameRef = React.createRef()
  }

  componentDidMount() {
    console.log(
      'componentDidMount method is called only one time after the initial render() called and component is mounted to the DOM'
    )
  }

  shouldComponentUpdate(nextPops, nextState) {
    console.log('shouldComponentUpdate method is called when states get changes and before render() method')
    console.log('nextState ', nextState)

    if (this.state.user.name == nextState.user.name) {
      console.log('User name is not changed, so no need to update the component')
      return false
    } else {
      console.log('User name is changed')
      return true
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate is called after render() method and before real DOM is updated.')
    console.log('prevState', prevState)

    return {
      message: `User name is changed from ${prevState.user.name} to ${this.state.user.name}`,
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate is called after real DOM is updated.')
    console.log('prevState', prevState)
    console.log('snapshot', snapshot)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount is called - when component is removed from the DOM. Route to other page')
  }

  updateName = (evt) => {
    evt.preventDefault()
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        name: this.nameRef.current.value || '',
      },
    }))
  }

  render() {
    console.log('Render method is called')
    return (
      <div>
        <h4>LifeCycle component</h4>
        <b>Name</b>
        <br />
        <label>{this.state.user.name}</label>
        <input type="text" className="form-control" placeholder={'Name'} ref={this.nameRef}></input>
        <button onClick={this.updateName}>Save </button>
      </div>
    )
  }
}
