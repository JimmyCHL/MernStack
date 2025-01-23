import { format } from 'date-fns'
import { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { cancelOrder, reOrder } from '../../../State/Order/OrderAction'
import { GoToReviewButton } from '../../Products/Components/GoToReviewButton'
import '../CSS/OrderList.css'

export const OrderRow = memo(({ item }) => {
  // item here mean each order
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  // right now only cancel and reorder is allowed
  const cancelAvailableStill = canCancel(item.orderDate, 48) && item.status !== 'cancelled'

  // Cancel order and re-order handler
  const actionHandler = ({ _id, orderNumber, items }, evt) => {
    evt.stopPropagation()
    if (cancelAvailableStill) {
      dispatch(cancelOrder(_id, () => alert(`Order ${orderNumber} has been cancelled!`)))
    } else {
      dispatch(reOrder(items, () => alert(`Order ${orderNumber} has been reordered and added to your cart!`)))
    }
  }

  return (
    <>
      <tr key={item._id} onClick={() => setOpen((pre) => !pre)} className="order-row">
        <td>{item.orderNumber}</td>
        <td>{format(new Date(item.orderDate), 'MM/dd/yyyy hh:mm a')}</td>
        <td>{item.items.length}</td>
        <td>{item.discount ? `${item.discount.code} ${item.discount.percentage}%` : 'No Discount'}</td>
        <td>${item.totalAmount}</td>
        {/* //TODO: Need to change to Delivered after 48 hours, right now we don't update in database, we just only update in UI on fly. */}
        <td>
          {item.status === 'cancelled' || canCancel(item.orderDate, 48) ? item.status.toUpperCase() : 'DELIVERED'}
        </td>
        <td>
          <button onClick={(evt) => actionHandler(item, evt)}>{cancelAvailableStill ? 'Cancel' : 'ReOrder'}</button>
        </td>
      </tr>

      {open && (
        <tr>
          <td colSpan="7">
            <table className="order-details">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Review</th>
                </tr>
              </thead>
              <tbody>
                {item.items.map((product) => (
                  <tr key={product._id}>
                    <td>{product.item.desc}</td>
                    <td>${product.price}</td>
                    <td>{product.quantity}</td>
                    <td>${product.price * product.quantity}</td>
                    <td>{cancelAvailableStill ? 'In Process...' : <GoToReviewButton product={product.item} />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>
      )}
    </>
  )
})

/** Check if the order can be canceled (now we assume 48 hours) */
const canCancel = (orderDate, hours) => {
  const now = new Date()
  const diff = now - new Date(orderDate)

  // Check if the difference is less than the specified hours
  return diff < hours * 60 * 60 * 1000
}
