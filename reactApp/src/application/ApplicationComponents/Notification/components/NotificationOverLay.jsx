import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { MdOutlineMessage } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { markNotificationIsRead } from '../../../State/Notification/NotificationActions'

export const NotificationOverLay = ({ notifications, children }) => {
  const dispatch = useDispatch()

  const markAsRead = (notificationId) => {
    dispatch(markNotificationIsRead(notificationId))
  }

  return (
    <OverlayTrigger
      trigger="click"
      key={'notification-popover'}
      placement={'bottom-start'}
      overlay={
        <Popover id={`popover-positioned-notification`} style={{ maxWidth: '900px' }}>
          <Popover.Body style={{ backgroundColor: 'pink', maxHeight: '300px', overflowY: 'auto' }}>
            <ListGroup>
              {notifications.length > 0 ? (
                notifications.map((notification, index) => (
                  <ListGroup.Item
                    key={notification._id}
                    as="div"
                    style={{
                      backgroundColor: 'lightblue',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <MdOutlineMessage size={20} color="green" style={{ marginRight: '5px' }} />{' '}
                    <span>
                      {index + 1} - {notification.content}
                    </span>
                    <Button
                      variant="link"
                      size="sm"
                      className="float-right"
                      style={{ minWidth: '40px' }}
                      onClick={(evt) => markAsRead(notification._id)}
                    >
                      Mark as read
                    </Button>
                  </ListGroup.Item>
                ))
              ) : (
                <ListGroup.Item>No Notifications</ListGroup.Item>
              )}
            </ListGroup>
          </Popover.Body>
        </Popover>
      }
    >
      {children}
    </OverlayTrigger>
  )
}
