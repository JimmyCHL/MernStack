import PropTypes from 'prop-types'

import { useNavigate } from 'react-router-dom'
import '../Styles/ProductCard.css'

export const GoToReviewButton = ({ product }) => {
  const navigation = useNavigate()

  const actionHandler = (evt) => {
    evt.stopPropagation()
    evt.preventDefault()

    navigation('/review/' + product._id, { state: { product } })
  }

  return (
    <div>
      <button onClick={actionHandler}>Go To Review</button>
    </div>
  )
}

GoToReviewButton.propTypes = {
  product: PropTypes.object.isRequired,
}
