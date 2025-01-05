import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { REMOVE_ITEM_FROM_CART, UPDATE_ITEM_IN_CART } from '../../../State/Cart/CartAction'

export const CartItem = ({ item, readOnly }) => {
  // item is the product
  const [quantity, setQuantity] = useState(item.qty)
  const dispatch = useDispatch()

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.desc}</td>
      <td>{item.rate}</td>
      <td>
        {readOnly ? (
          quantity //readOnly == true
        ) : (
          <input
            type="text"
            value={quantity}
            onChange={(evt) => {
              setQuantity(evt.target.value)
            }}
          ></input>
        )}
      </td>
      <td>
        {
          item.qty * item.price //Total price for the selected product
        }
      </td>
      {readOnly ? (
        '' //by default false as boolean default is false
      ) : (
        <Fragment>
          <td>
            <button onClick={() => dispatch(REMOVE_ITEM_FROM_CART(item._id))}>Remove</button>{' '}
          </td>
          <td>
            <button onClick={() => dispatch(UPDATE_ITEM_IN_CART(item._id, quantity))}>Edit</button>
          </td>
        </Fragment>
      )}
    </tr>
  )
}
