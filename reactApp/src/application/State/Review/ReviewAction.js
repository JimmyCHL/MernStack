import axiosInstance from '../../config/globalAxios'

/** Add review action */
export const addReview = async (data, callback) => {
  const response = await axiosInstance.post('/review/api/createReview', data)
  const review = response.data
  callback(review)
}

/** get product reviews */
export const getReviewByProdId = async (productId, callback) => {
  try {
    const response = await axiosInstance.post('/review/api/fetchReviewsByProduct', { productId })
    const reviews = response.data
    callback(reviews)
  } catch (err) {
    console.log('There was an error:', err)
    callback([])
    alert('There was an error:', err)
  }
}
