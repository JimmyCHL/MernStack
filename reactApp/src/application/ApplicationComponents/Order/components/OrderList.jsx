import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cancelOrder } from '../../../State/Order/OrderAction'
import { ordersSelector } from '../../../State/Order/OrderSelector'
import '../CSS/OrderList.css'
import { OrderItem } from './OrderItem'

export const OrderList = ({ cancelledOrderOnly = false }) => {
  const orders = useSelector(ordersSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Cancel order handler
  const cancelOrderHandler = ({ _id, orderNumber }, evt) => {
    evt.stopPropagation()
    dispatch(cancelOrder(_id, () => alert(`Order ${orderNumber} has been cancelled!`)))
  }

  const displayOrders = useMemo(
    () =>
      cancelledOrderOnly
        ? orders.filter((order) => order.status === 'cancelled')
        : orders.filter((order) => order.status !== 'cancelled'),
    [cancelledOrderOnly, orders]
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
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {displayOrders.map((item) => (
              <OrderItem key={item._id} cancelOrderHandler={cancelOrderHandler} item={item} />
            ))}
          </tbody>
        </table>
      ) : (
        <h4>No orders yet!!!</h4>
      )}
    </div>
  )
}
