import PropTypes from 'prop-types'

import { useState } from 'react'
import '../Styles/ProductCard.css'

export const ProductCard = ({ product }) => {
  const [showHide, toggleShowHide] = useState(false)

  return (
    <div className="product col-md-11 m-auto p-3">
      <div className="" id="cardContainer" onClick={() => toggleShowHide((prev) => !prev)}>
        {product.name}
        {showHide ? (
          <ul>
            <li>Price: ${product.price}</li>
            <li>Description: {product.desc}</li>
            <li>Category: {product.category}</li>
            <li>Rate: {product.rate}</li>
          </ul>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}
