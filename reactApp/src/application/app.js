import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './app.css'

//import UserComponent from "./ApplicationComponents/User/UserComponent.jsx"; //instead of component we are loading container
import StudentContainer from './ApplicationComponents/Student/StudentContainer'
// import UserContainer from './ApplicationComponents/User/UserContainer'
// import UserHooks from './ApplicationComponents/User/UserHooksComponent'
import { Cart } from './ApplicationComponents/Carts/Components/Cart.jsx'
import { Checkout } from './ApplicationComponents/Checkout/components/Checkout.jsx'
import { Coupon } from './ApplicationComponents/Coupon/components/Coupon.jsx'
import { OrderList } from './ApplicationComponents/Order/components/OrderList.jsx'
import { ProductForm } from './ApplicationComponents/Products/Components/ProductForm'
import { ProductScreen } from './ApplicationComponents/Products/Components/ProductScreen'
import { ReviewScreen } from './ApplicationComponents/Reviews/Components/ReviewScreen.jsx'
import UserHooks from './ApplicationComponents/User/UserHooksRefComponent'
import About from './CommonComponents/AboutComponent'
import { AppCopy } from './CommonComponents/AppCopy'
import { AddHobby } from './CommonComponents/Assessment4Comp/AddHobby.jsx'
import ATMDispenser from './CommonComponents/Assessment4Comp/ATMDispenser.jsx'
import { AW3Component } from './CommonComponents/AW3Component'
import Footer from './CommonComponents/Footer'
import Header from './CommonComponents/HeaderComponent'
import Home from './CommonComponents/HomeTrainerComponent'
import NotFound from './CommonComponents/NotFoundComponent'
import { TopicDetail, Topics } from './CommonComponents/TopicsComponent'

export default class ApplicationComponent extends React.Component {
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
    }
  }

  //render - method is responsible to create virtual dom for every change of state or props
  render() {
    console.log('Render is called!! ', this.state.userName)

    //switch - case works for router
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home user={this.state.user} />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<UserHooks />} />
          <Route path="studentLogin" element={<StudentContainer />} />
          <Route path="/productForm" element={<ProductForm />} />
          <Route path="/couponGeneration" element={<Coupon />} />
          <Route path="/productsList" element={<ProductScreen />} />
          <Route path="/review/:id" element={<ReviewScreen />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/cancelled-orders" element={<OrderList cancelledOrderOnly />} />
          <Route path="/app" element={<AppCopy />} />
          <Route path="/about" element={<About />} />
          <Route path="/atmDispenser" element={<ATMDispenser />} />
          <Route path="/addHobby" element={<AddHobby />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="/aws/image" element={<AW3Component />} />
          <Route path="/topics/*" element={<Topics />}>
            <Route path=":topicId" element={<TopicDetail />} />
            <Route path="" element={<p>Please select a topic from the list.</p>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    )
  }
}
