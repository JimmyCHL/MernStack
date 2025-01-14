import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EMPTY_CART, removeCartAfterCheckout } from '../../../State/Cart/CartAction'
import { couponSelector } from '../../../State/Coupon/CouponSelector'
import { userSelector } from '../../../State/User/UserSelector'
import { Cart } from '../../Carts/Components/Cart'
import '../CSS/Checkout.css'

export const Checkout = () => {
  const user = useSelector(userSelector)
  const coupon = useSelector(couponSelector)
  const dispatch = useDispatch()
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false)

  const checkoutCallback = () => {
    setShowPaymentSuccess(true)
    // should clear the cart after payment success
    dispatch(EMPTY_CART())
    dispatch(removeCartAfterCheckout({ cart: [], userId: user._id }))
  }

  return (
    <div className="col-md-12">
      <div id="checkoutContainer">
        {showPaymentSuccess ? (
          <>
            <h2>~ Payment Component ~</h2>
            <h3>Thankyou for the payment, your items under process!</h3>
          </>
        ) : (
          <>
            <h2>~ Checkout Component ~</h2>
            <h3>User Details</h3>
            <p>Name: {user.userName}</p>
            <p>Mobile: {user.mobile}</p>
            <p>We will delivery all products to this address: {user.street}</p>

            <Cart readOnly={true} processCallback={checkoutCallback} coupon={coupon} />
          </>
        )}
      </div>
    </div>
  )
}
