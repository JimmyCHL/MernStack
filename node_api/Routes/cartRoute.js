const express = require('express')
const cartRouter = express.Router({ strict: true, caseSensitive: true })
const CartDataModel = require('../DataModel/CartDataModel')

//cart api's
cartRouter.post('/api/saveUserCart', (req, res) => {
  const { userId, cart } = req.body
  CartDataModel.findOne({ userId })
    .then((cartDbObj) => {
      if (!cartDbObj) {
        //checks for null cart of given user
        console.log('No cart Present, Adding / Inserting!')
        const cartObj = new CartDataModel(req.body)
        cartObj
          .save()
          .then((data) => {
            res.json(data)
          })
          .catch((err) => {
            res.send('Error Occurred' + err)
          })
      } else {
        //update the cart for given user
        console.log('Cart Present, Replacing / Updating!')
        //replacing or update db cart with cart that user has sent from Cart Component page
        cartDbObj.set({ cart })

        cartDbObj
          .save()
          .then((data) => {
            // setTimeout(()=>{
            res.json(data)
            //},10000)
          })
          .catch((err) => {
            res.send('Error Occurred' + err)
          })
      }
    })
    .catch((err) => {
      console.log('got an error!', err)
      res.send('error while fetching cart!')
    })
})

cartRouter.post('/api/getUserCart', (req, res) => {
  const userId = req.body.userId
  // return cartList
  CartDataModel.findOne({ userId })
    .then((obj) => {
      res.json(obj.cart)
    })
    .catch((err) => {
      res.send('Error Occurred' + err)
    })
})

module.exports = cartRouter
