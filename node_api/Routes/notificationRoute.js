const express = require('express')
const notificationRouter = express.Router({ strict: true, caseSensitive: true })
const NotificationModel = require('../DataModel/NotificationModel')

//notification api's
notificationRouter.post('/api/createNotification', (req, res) => {
  const { userId, content } = req.body
  createNotification(res, content, userId)
})

notificationRouter.post('/api/fetchNotificationsByUserId', (req, res) => {
  const userId = req.body.userId
  fetchNotificationsByUserId(res, userId)
})

notificationRouter.put('/api/markNotificationIsRead', (req, res) => {
  const notificationId = req.body.notificationId
  markNotificationIsRead(res, notificationId)
})

module.exports = notificationRouter

/** create notification function */
const createNotification = (res, content, userId) => {
  const notification = new NotificationModel({
    user: userId,
    content,
  })

  notification
    .save()
    .then((data) => {
      // After saving, find the notification by ID and populate the references
      return NotificationModel.findById(data._id).populate('user') // Populating the 'user' field with the full User details
    })
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
}

/** fetch notifications by user id */
const fetchNotificationsByUserId = async (res, userId) => {
  try {
    // Fetch the notifications, and populate the 'user' field
    const notifications = await NotificationModel.find({ user: userId, isRead: false })
      .populate('user') // Populating the 'user' field with the full User details
      .sort({ date: -1 }) // Reverse sort by date (most recent first)
      .exec()

    if (!notifications || notifications.length === 0) {
      return res.status(200).json([])
    }

    res.json(notifications)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error fetching notifications' })
  }
}

/** update notification is Read with _id */
const markNotificationIsRead = async (res, notificationId) => {
  try {
    const notification = await NotificationModel.findOneAndUpdate(
      { _id: notificationId },
      {
        $set: { isRead: true },
      },
      {
        new: true,
        populate: ['user'],
      }
    )
    res.send(notification)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error cancelling notification' })
  }
}
