import { useDispatch, useSelector } from 'react-redux'
import { ADD_COUPON } from '../../../State/Coupon/CouponAction'
import { couponSelector } from '../../../State/Coupon/CouponSelector'
import '../CSS/Coupon.css'

export const Coupon = () => {
  const dispatch = useDispatch()
  const coupon = useSelector(couponSelector)

  const generateCoupon = () => {
    // generate a random coupon of 6 digits
    const coupon = Math.floor(Math.random() * 1000000)
    dispatch(ADD_COUPON(coupon))
  }

  return (
    <div>
      <h2>Coupon Component</h2>
      <button onClick={generateCoupon}>GenerateCoupon</button>

      <p id="generatedCoupon">Generated Coupon: {!coupon ? 'Please generate one coupon' : coupon}</p>
    </div>
  )
}
