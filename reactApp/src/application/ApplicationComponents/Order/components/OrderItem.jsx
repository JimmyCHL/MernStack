import { format } from 'date-fns'
import { useState } from 'react'
import '../CSS/OrderList.css'

export const OrderItem = ({ item, cancelOrderHandler }) => {
  const [open, setOpen] = useState(false)
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
          <button
            onClick={(evt) => cancelOrderHandler(item, evt)}
            disabled={item.status === 'cancelled' || !canCancel(item.orderDate, 48)}
          >
            {item.status === 'cancelled' ? 'Cancelled' : canCancel(item.orderDate, 48) ? 'Cancel' : 'Not Available'}
          </button>
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
                    <td>{canCancel(item.orderDate, 48) ? 'In Process...' : <button>Review</button>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>
      )}
    </>
  )
}

/** Check if the order can be canceled (now we assume 48 hours) */
const canCancel = (orderDate, hours) => {
  const now = new Date()
  const diff = now - new Date(orderDate)

  // Check if the difference is less than the specified hours
  return diff < hours * 60 * 60 * 1000
}
