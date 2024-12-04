import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Header'
import LifeCycle from './components/LifeCycle'
import Success from './components/Success'
import UserSignIn from './components/UserSignIn'

export default class Application extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Success />} />
          <Route path="/userSignIn" element={<UserSignIn />} />
          <Route path="/lifeCycle" element={<LifeCycle />} />
        </Routes>
      </Router>
    )
  }
}
