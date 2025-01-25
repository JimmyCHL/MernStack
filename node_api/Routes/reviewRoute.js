const express = require('express')
const reviewRouter = express.Router({ strict: true, caseSensitive: true })
const ReviewModel = require('../DataModel/ReviewModel')
const {
  Types: { ObjectId },
} = require('mongoose')

//Review Model api's
reviewRouter.post('/api/createReview', (req, res) => {
  //TODO: For now only one level of review is supported. Need to implement nested reviews maybe after
  const { userId, productId, content, rating, parentId = null } = req.body
  createReview(res, userId, productId, parentId, content, rating)
})

reviewRouter.post('/api/fetchReviewsByProduct', (req, res) => {
  const { productId } = req.body
  fetchReviewByProductId(res, productId)
})

module.exports = reviewRouter

/** create review function */
const createReview = (res, userId, productId, parentId, content, rating) => {
  const review = new ReviewModel({
    user: userId,
    product: productId,
    rating,
    parent: parentId,
    content,
  })

  review
    .save()
    .then((data) => {
      // After saving, find the order by ID and populate the references
      return ReviewModel.findById(data._id)
        .populate('user') // Populate the 'user' reference
        .populate('product') // Populate the 'items.item' reference
    })
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
}

/** fetch reviews by product id */
const fetchReviewByProductId = async (res, productId) => {
  try {
    const reviews = await ReviewModel.aggregate([
      // Step 1: Match the reviews for the specific product
      {
        $match: { product: new ObjectId(productId) }, // for mongoose v7 and above use  new ObjectId(productId) to convert string to ObjectId (it is weird to show deprecated warning for ObjectId)
      },

      // Step 2: Lookup to populate the `product` field
      {
        $lookup: {
          from: 'products', // The collection to join with
          localField: 'product', // The field in the `reviews` collection
          foreignField: '_id', // The field in the `products` collection
          as: 'product', // The name of the field to store the populated result
        },
      },

      // Step 3: Lookup to populate the `user` field
      {
        $lookup: {
          from: 'users', // The collection to join with
          localField: 'user', // The field in the `reviews` collection
          foreignField: '_id', // The field in the `users` collection
          as: 'user', // The name of the field to store the populated result
        },
      },

      // Step 4: Sort reviews by date (newest first)
      {
        $sort: { date: -1 }, // Sort by date in descending order
      },

      // Step 5: Flatten the `user` and `product` fields (optional, if you want to simplify the structure)
      {
        $project: {
          _id: 1,
          content: 1,
          rating: 1,
          date: 1,
          user: { $arrayElemAt: ['$user', 0] }, // Flatten the `user` array (grab first element)
          product: { $arrayElemAt: ['$product', 0] }, // Flatten the `product` array
        },
      },
    ])

    res.status(200).json(reviews)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
