import { useEffect, useState } from 'react'
import Avatar from 'react-avatar'

import { Button, Form } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import Stack from 'react-bootstrap/Stack'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import { addReview, getReviewByProdId } from '../../../../application/State/Review/ReviewAction'
import { fetchProductById } from '../../../State/Product/ProductAction'
import { userSelector } from '../../../State/User/UserSelector'

export const ReviewScreen = () => {
  const { id } = useParams()
  const user = useSelector(userSelector)
  const { state } = useLocation()
  const [localProd, setLocalProduct] = useState()
  const [formData, setFormData] = useState({
    content: '',
    rating: 0,
  })
  const [reviews, setReviews] = useState([])
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const callback = (product) => {
      setLocalProduct(product)
      getReviewByProdId(id, (reviews) => {
        setReviews(reviews)
      })
    }

    if (!state) {
      fetchProductById(id, callback)
    } else {
      callback(state.product)
    }
  }, [state, id])

  // submit review
  const handleSubmit = (e) => {
    setSubmitting(true)
    e.preventDefault()
    console.log('Form data:', formData)

    const review = {
      content: formData.content,
      rating: formData.rating,
      productId: localProd._id,
      userId: user._id,
    }

    addReview(review, (review) => {
      setTimeout(() => setReviews((prv) => [review, ...prv]), 2000)
      setFormData({ content: '', rating: 0 })
    }).finally(() => {
      setTimeout(() => setSubmitting(false), 2000)
    })
  }

  if (!localProd) return <Loading />

  return (
    <Container style={{ margin: '20px' }}>
      <h1>** Review for </h1>
      <Row>
        <Col xs={12} md={6}>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21"
            />
            <Card.Body>
              <Card.Title>Name: {localProd.name}</Card.Title>
              <Card.Text>
                Description: {localProd.desc} <br />
                Price: {localProd.price} <br />
                Category: {localProd.category} <br />
                Avg Rate: <Rating readonly initialValue={localProd.rate} size={20} />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}></Col>
      </Row>

      {/* submit comments */}
      <Row>
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Add your review</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setFormData((prv) => ({ ...prv, content: e.target.value }))}
                value={formData.content}
                placeholder="Add your review here"
              />
            </Form.Group>
            <Rating onClick={(val) => setFormData((prv) => ({ ...prv, rating: val }))} size={20} />
            <Button variant="primary" type="submit">
              Add Review
            </Button>
            {submitting && <Loading />}
          </Form>
        </Col>
        <Col xs={12} md={6}></Col>
      </Row>

      {/* show comments */}
      <Row style={{ marginTop: '20px' }}>
        <Col xs={12} md={6}>
          {reviews.map((review) => (
            <Card key={review._id}>
              <Card.Body>
                <Card.Title>
                  <Avatar name={review.user.userName} size="30" textSizeRatio={1.75} round /> {review.user.userName}
                </Card.Title>
                <Card.Text>
                  Rating: <Rating readonly initialValue={review.rating} size={20} /> <br />
                  Content: {review.content} <br />
                  Date: {new Date(review.date).toDateString()}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col xs={12} md={6}></Col>
      </Row>
    </Container>
  )
}

/** Loading component */
const Loading = () => (
  <Container fluid style={{ margin: '20px' }}>
    <Stack direction="horizontal" gap={3} style={{ justifyContent: 'center' }}>
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="dark" />
    </Stack>
  </Container>
)
