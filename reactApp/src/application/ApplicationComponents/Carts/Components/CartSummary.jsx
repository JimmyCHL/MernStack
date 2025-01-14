import React from 'react'

export const CartSummary = ({ data: { count, amount }, readOnly, coupon }) => {
  return (
    <div>
      {readOnly ? <h5> Purchase Summary </h5> : <h2> Cart Summary </h2>}
      <p> Subtotal: ${amount} </p>
      {coupon && <p> Discount: 10% , Code: {coupon}</p>}
      <p> Total: ${coupon ? amount * 0.9 : amount} </p>
      <p> Products Count: {count} </p>
    </div>
  )
}
