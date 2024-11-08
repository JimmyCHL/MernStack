import React from 'react'
export default class Application extends React.Component {
  render() {
    let myName = 'Windiee - JSX => Javascript Like XML Structure'
    let nameList = ['Nilay', 'Gesan', 'Jimmy', 'Ben Ma', 'Jay']
    let nameListWorking = ['Windie', 'Stacy', 'Duncan']

    return (
      <div>
        <h2>This is my first react page from application!! </h2>
        <h2>This is my first react page from application!! </h2>
        <h2>This is my first react page from application!! </h2>
        <p1>{myName}</p1>
        <h3>Names List</h3>
        {nameList.map((name, index) => {
          return <p key={index}>{name}</p>
        })}
        <h3>Names List Working</h3>
        {nameListWorking.map((name, index) => {
          return <p key={index}>{name}</p>
        })}
      </div>
    )
  }
}
