const express = require('express')
const transporter = require('../mailConfig')
const orderRouter = express.Router({ strict: true, caseSensitive: true })
const { OrderModel, orderStatusEnum } = require('../DataModel/OrderModel')
const createPDF = require('../pdfConfig')
const s3 = require('../awsConfig')

//order api's
orderRouter.post('/api/createOrder', (req, res) => {
  const { userId, cart, discount = null } = req.body
  createOrder(res, userId, cart, discount)
})

orderRouter.post('/api/fetchOrdersByUserId', (req, res) => {
  const userId = req.body.userId
  fetchOrdersByUserId(res, userId)
})

orderRouter.delete('/api/cancelOrder', (req, res) => {
  const orderId = req.body.orderId
  cancelOrder(res, orderId)
})

orderRouter.get('/api/download/:fileName', (req, res) => {
  const fileName = req.params.fileName
  const params = {
    Bucket: process.env.BucketName,
    Key: fileName,
  }

  s3.getObject(params, (err, data) => {
    if (err) {
      return res.status(500).send('Error fetching file from S3, or file does not exist!')
    }
    res.setHeader('Content-Type', 'application/pdf')
    res.send(data.Body)
  })
})

module.exports = orderRouter

/** create order function */
const createOrder = (res, userId, cart, discount) => {
  // generate order items
  const orderItems = cart.map((item) => {
    return {
      item: item._id,
      quantity: item.qty,
      price: item.price,
    }
  })

  const order = new OrderModel({
    user: userId,
    items: orderItems,
    discount,
    totalAmount: cart.reduce((acc, item) => acc + item.price * item.qty, 0),
  })

  order
    .save()
    .then((data) => {
      // After saving, find the order by ID and populate the references
      return OrderModel.findById(data._id)
        .populate('user') // Populate the 'user' reference
        .populate('items.item') // Populate the 'items.item' reference
    })
    .then(async (data) => {
      // save to S3 bucket

      await createPDF(data)
      // Send email to user
      const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: process.env.MY_EMAIL, // Add the user's email here (for now, just use my own email)
        subject: 'Order Confirmation',
        text: `Your order has been placed successfully and we have confirmed your payment. Order ID: ${data._id}`,
      }

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          return res.status(500).json({ message: err.message })
        }
        console.log('Email sent: ' + info.response)
        res.status(200).json(data)
      })
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
}

/** fetch orders by user id */
const fetchOrdersByUserId = async (res, userId) => {
  try {
    // Fetch the orders, and populate the 'user' field and 'items' field
    const orders = await OrderModel.find({ user: userId })
      .populate('user') // Populating the 'user' field with the full User details
      .populate('items.item') // Populating the 'item' field in 'items' with full Product details
      .sort({ orderDate: -1 }) // Reverse sort by orderDate (most recent first)
      .exec()

    if (orders.length === 0) {
      return res.status(200).json([])
    }

    res.json(orders)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error fetching orders' })
  }
}

/** cancel order by order id */
const cancelOrder = async (res, orderId) => {
  try {
    const order = await OrderModel.findOneAndUpdate(
      { _id: orderId },
      {
        $set: { status: orderStatusEnum.cancelled },
      },
      {
        new: true,
        populate: ['user', 'items.item'],
      }
    )
    res.send(order)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error cancelling order' })
  }
}
