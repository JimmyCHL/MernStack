import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveCartForCheckout } from '../../../State/Cart/CartAction'
import { cartSelector } from '../../../State/Cart/CartSelector'
import { userSelector } from '../../../State/User/UserSelector'
import { CartItem } from './CartItem'
import { CartSummary } from './CartSummary'

export const Cart = ({ readOnly }) => {
  const user = useSelector(userSelector)
  const cartList = useSelector(cartSelector)
  const dispatch = useDispatch()

  console.log('user', user._id)
  console.log('cartList', cartList)

  const clickToSaveCart = (cart, userId) => {
    if (userId) {
      alert('cart will be saved')
      dispatch(saveCartForCheckout({ cart, userId }))
    } else {
      alert("You're not logged-in!! Please login to help you in furture with your selected products!!")
      //add a function using navigation hook to re-direct to login page
    }
  }

  // calculate total amount and total count of products in cart
  const summary = useMemo(() => {
    let count = 0
    let amount = 0
    cartList.forEach((item) => {
      //parseInt - to convert string to number (as qty and price could be string or number in some situations, so i am casting it to String and then to Number)
      amount += parseInt(String(item.qty)) * parseInt(String(item.price))
      count += parseInt(String(item.qty))
    })
    return { count, amount }
  }, [cartList])

  return (
    <div className="col-md-12">
      <h2>Cart Component</h2>
      {cartList && cartList.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Rating</th>
                <th>Quantity</th>
                <th>Total</th>
                {readOnly ? (
                  '' //by default false as boolean default is false
                ) : (
                  <>
                    <th>Remove</th>
                    <th>Edit</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {cartList.map((item) => {
                return <CartItem item={item} key={item._id} />
              })}
            </tbody>
          </table>
          <CartSummary data={summary} readOnly={readOnly} />
          {readOnly ? (
            <></>
          ) : (
            <>
              <button onClick={() => clickToSaveCart(cartList, user._id)}>Save Cart</button>
              <button onClick={() => {}}>Go To Checkout</button>
            </>
          )}
        </>
      ) : (
        <h4>Please go to product and add item to cart!!!</h4>
      )}
    </div>
  )
}