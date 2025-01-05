import React from 'react'
import { useSelector } from 'react-redux'
import { cartSelector } from '../../../State/Cart/CartSelector'
import { CartItem } from './CartItem'

export const Cart = ({ readOnly }) => {
  const cartList = useSelector(cartSelector)
  console.log('cartList', cartList)

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
          {/* <CartSummary data={recalculate(cartList)} readOnly={readOnly} /> */}
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
