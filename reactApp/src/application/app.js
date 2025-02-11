import React, { lazy, Suspense } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './app.css'
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

//import UserComponent from "./ApplicationComponents/User/UserComponent.jsx"; //instead of component we are loading container
const StudentContainer = lazy(() => import('./ApplicationComponents/Student/StudentContainer'))
// import UserContainer from './ApplicationComponents/User/UserContainer'
// import UserHooks from './ApplicationComponents/User/UserHooksComponent'
const Cart = lazy(() =>
  import('./ApplicationComponents/Carts/Components/Cart.jsx').then((module) => ({ default: module.Cart }))
)
const Checkout = lazy(() =>
  import('./ApplicationComponents/Checkout/components/Checkout.jsx').then((module) => ({ default: module.Checkout }))
)
const Coupon = lazy(() =>
  import('./ApplicationComponents/Coupon/components/Coupon.jsx').then((module) => ({ default: module.Coupon }))
)
const OrderList = lazy(() =>
  import('./ApplicationComponents/Order/components/OrderList.jsx').then((module) => ({ default: module.OrderList }))
)
const ProductForm = lazy(() =>
  import('./ApplicationComponents/Products/Components/ProductForm.jsx').then((module) => ({
    default: module.ProductForm,
  }))
)
const ProductScreen = lazy(() =>
  import('./ApplicationComponents/Products/Components/ProductScreen.jsx').then((module) => ({
    default: module.ProductScreen,
  }))
)

const ReviewScreen = lazy(() =>
  import('./ApplicationComponents/Reviews/Components/ReviewScreen.jsx').then((module) => ({
    default: module.ReviewScreen,
  }))
)
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
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <ToastContainer />
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
        </Suspense>
      </Router>
    )
  }
}
