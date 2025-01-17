import { format } from 'date-fns'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cancelOrder } from '../../../State/Order/OrderAction'
import { ordersSelector } from '../../../State/Order/OrderSelector'

export const OrderList = ({ cancelledOrderOnly = false }) => {
  const orders = useSelector(ordersSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Cancel order handler
  const cancelOrderHandler = ({ _id, orderNumber }) => {
    dispatch(cancelOrder(_id, () => alert(`Order ${orderNumber} has been cancelled!`)))
  }

  const displayOrders = useMemo(
    () =>
      cancelledOrderOnly
        ? orders.filter((order) => order.status === 'cancelled')
        : orders.filter((order) => order.status !== 'cancelled'),
    [cancelledOrderOnly]
  )
  console.log('displayOrders', displayOrders)

  return (
    <div style={{ margin: '20px' }}>
      {displayOrders.length > 0 ? (
        <table className="col-sm-12 col-md-12">
          <thead>
            <tr>
              <th>Order #</th>
              <th>Date</th>
              <th>Items #</th>
              <th>Coupon</th>
              <th>Total</th>
              <th>Status</th>
              {/* <th>View</th> */}
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {displayOrders.map((item) => (
              <tr key={item._id}>
                <td>{item.orderNumber}</td>
                <td>{format(new Date(item.orderDate), 'MM/dd/yyyy hh:mm a')}</td>
                <td>{item.items.length}</td>
                <td>{item.discount ? `${item.discount.code} ${item.discount.percentage}%` : 'No Discount'}</td>
                <td>${item.totalAmount}</td>
                {/* //TODO: Need to change to Delivered after 48 hours, right now we don't update in database, we just only update in UI on fly. */}
                <td>
                  {item.status === 'cancelled' || canCancel(item.orderDate, 48)
                    ? item.status.toUpperCase()
                    : 'DELIVERED'}
                </td>
                {/* <td>
                  <button onClick={() => navigate(`/order/${item._id}`)}>View</button>
                </td> */}
                <td>
                  <button
                    onClick={() => cancelOrderHandler(item)}
                    disabled={item.status === 'cancelled' || !canCancel(item.orderDate, 48)}
                  >
                    {item.status === 'cancelled'
                      ? 'Cancelled'
                      : canCancel(item.orderDate, 48)
                      ? 'Cancel'
                      : 'Not Available'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4>No orders yet!!!</h4>
      )}
    </div>
  )
}

/** Check if the order can be canceled (now we assume 48 hours) */
const canCancel = (orderDate, hours) => {
  const now = new Date()
  const diff = now - new Date(orderDate)

  // Check if the difference is less than the specified hours
  return diff < hours * 60 * 60 * 1000
}
