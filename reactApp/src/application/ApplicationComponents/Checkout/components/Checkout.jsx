import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { couponSelector } from '../../../State/Coupon/CouponSelector'
import { addOrder } from '../../../State/Order/OrderAction'
import { userSelector } from '../../../State/User/UserSelector'
import { Cart } from '../../Carts/Components/Cart'
import '../CSS/Checkout.css'

export const Checkout = () => {
  const user = useSelector(userSelector)
  const coupon = useSelector(couponSelector)
  const dispatch = useDispatch()
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false)

  const checkoutCallback = () => {
    //Place Order Call
    dispatch(addOrder(user._id, coupon, () => setShowPaymentSuccess(true)))
  }

  return (
    <div className="col-md-12">
      <div id="checkoutContainer">
        {showPaymentSuccess ? (
          <>
            <h2>~ Congratulation, High Five ~</h2>
            <h3>Thank you for the payment, We are preparing your order!</h3>
          </>
        ) : (
          <>
            <h2>~ Checkout Component ~</h2>
            {/* <ToastContainer /> */}
            <button
              onClick={() =>
                toast('Order Placed Successfully', {
                  position: 'top-right',
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                })
              }
            >
              button
            </button>
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
