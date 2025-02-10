import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ordersSelector } from '../../../State/Order/OrderSelector'
import '../CSS/OrderList.css'
import { OrderRow } from './OrderRow'

export const OrderList = ({ cancelledOrderOnly = false }) => {
  const orders = useSelector(ordersSelector)
  const navigate = useNavigate()

  const displayOrders = useMemo(
    () =>
      cancelledOrderOnly
        ? orders.filter((order) => order.status === 'cancelled')
        : orders.filter((order) => order.status !== 'cancelled'),
    [cancelledOrderOnly, orders] // Should always listen to the changes of dependency to recompute the value
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
              <th>Action</th>
              {!cancelledOrderOnly && <th>Download</th>}
            </tr>
          </thead>
          <tbody>
            {displayOrders.map((item) => (
              <OrderRow key={item._id} item={item} />
            ))}
          </tbody>
        </table>
      ) : (
        <h4>No orders yet!!!</h4>
      )}
    </div>
  )
}
