import React from 'react'
import ChildComponent from './ChildComponent'

import HomeComponent from './HomeComponent.js'
import Jimmy from './People/Jimmy.jsx'

export class AppCopy extends React.Component {
  constructor(props) {
    super(props) //is used to passBack data <props -here> so that it is updated in base object for react framework

    //state - object is used to allow update of values via react rendering life cycle
    this.state = {
      userName: 'Duncan',
      count: 0,
      user: {
        address: 'Somewhere on earth',
        session: 'Somewhere on webex',
      },
      newYearWishes: 'Happy New Year!! 2024',
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

    // this.state.userName = "Christopher" -> this won't update the page

    // console.log("After setstate called", this.state.userName)
  }

  //even to be executed in child component
  changeMessageFromChild = (msg) => {
    this.setState({
      newYearWishes: msg,
    })
  }

  //render - method is responsible to create virtual dom for every change of state or props
  render() {
    console.log('Render is called!! ', this.state.userName)
    let myName = 'Windiee - JSX => Javascript Like XML Structure'
    let nameList = ['Nilay', 'Gesan', 'Jimmy', 'Ben Ma', 'Jay', 'And Everyone else']
    let nameListWorking = ['Windie', 'Stacy', 'Duncan']

    return (
      <div>
        <h3>Names List</h3>
        {nameList &&
          nameList.map((name, index) => {
            return <h2>{name}</h2>
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
        {/* <Footer name={this.state.userName} /> */}

        <HomeComponent session="React" />
        <p>================= Start with Jimmy component =================</p>
        <Jimmy />
        <p>================= End with Jimmy component =================</p>
        <h3>{this.state.newYearWishes}</h3>
        <ChildComponent callBackEvent={this.changeMessageFromChild} />
      </div>
    )
  }
}
