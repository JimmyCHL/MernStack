import React from 'react'

export const CartSummary = ({ data: { count, amount }, readOnly }) => {
  return (
    <div>
      {readOnly ? <h5> Purchase Summary </h5> : <h2> Cart Summary </h2>}
      <p> Amount: ${amount} </p>
      <p> Products Count: {count} </p>
    </div>
  )
}
