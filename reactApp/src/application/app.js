import React from 'react'

import Footer from './CommonComponents/Footer.jsx'
import Header from './CommonComponents/HeaderComponent.js'
import HomeComponent from './CommonComponents/HomeComponent.js'
export default class Application extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: 'Duncan',
      count: 0,
      user: {
        address: 'Somewhere on earth',
        session: 'Somewhere on webex',
      },
    }
  }

  onclick = (evt) => {
    // evt.preventDefault()
    console.log('Name change click is clicked')
    this.setState({
      userName: 'Sierra',
    })

    // // Increment count by 1
    // this.setState((prevState) => ({ count: this.state.count + 1 }))

    // // Increment count by 2
    // this.setState((prevState) => ({ count: this.state.count + 2 }))

    // have different result (understand it by doing it)
    // Increment count by 1
    this.setState((prevState) => ({ count: prevState.count + 1 }))

    // Increment count by 2
    this.setState((prevState) => ({ count: prevState.count + 2 }))
  }

  //render - method is responsible to create virtual dom for every change of state or props
  render() {
    let myName = 'Windiee - JSX => Javascript Like XML Structure'
    let nameList = ['Nilay', 'Gesan', 'Jimmy', 'Ben Ma', 'Jay', 'And Everyone else']
    let nameListWorking = ['Windie', 'Stacy', 'Duncan']

    return (
      <div>
        <h2>This is my first react page from application!! </h2>
        <h2>This is my first react page from application!! </h2>
        <h2>This is my first react page from application!! </h2>
        <Header myName={myName} />
        <h3>Names List</h3>
        {nameList &&
          nameList.map((name, index) => {
            return (
              <Footer key={index} id={name} name={name} user={this.state.user}>
                {/* <h2>Footer Component - H2</h2>
                    <h3>Footer Component - H3</h3> */}
              </Footer>
            )
          })}
        <h3>Names List Working</h3>
        {nameListWorking &&
          nameListWorking.map((name, index) => {
            //nameListWorking && => checks if variable is not null and undefined
            return <p key={index}>{name}</p>
          })}

        <hr />
        <h2>{this.state.userName}</h2>
        <h2>count {this.state.count}</h2>
        <button onClick={this.onclick}> Change Name</button>
        <Footer name={this.state.userName} />

        <HomeComponent session="React" />
      </div>
    )
  }
}
