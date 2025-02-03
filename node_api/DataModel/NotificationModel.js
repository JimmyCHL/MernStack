const mongooseObj = require('./mongooseConnection')

schemaObj = mongooseObj.Schema //using the schema class from mongoose

const notificationSchema = new schemaObj({
  user: {
    type: schemaObj.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  isRead: { type: Boolean, default: false },
})

const NotificationModel = mongooseObj.model('notification', notificationSchema)
module.exports = NotificationModel
