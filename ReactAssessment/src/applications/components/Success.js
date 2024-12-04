import PropTypes from 'prop-types'
import React from 'react'

export default class Success extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      valueFromSuccessStory: '',
    }
  }

  valueFromSuccessStoryHandler = (value) => {
    this.setState({
      valueFromSuccessStory: value,
    })
  }

  render() {
    return (
      <div>
        <h1>Your are a successful developer.</h1>
        <SuccessChild
          name="Jimmy"
          address="Somewhere on the earth."
          SuccessStory={SuccessStory}
          valueFromSuccessStoryHandler={this.valueFromSuccessStoryHandler}
        />
        <h3>
          Value from Success Story <span style={{ color: 'red' }}>{this.state.valueFromSuccessStory}</span>
        </h3>
      </div>
    )
  }
}

const SuccessChild = ({ name, address, SuccessStory, valueFromSuccessStoryHandler }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{address}</h2>
      <SuccessStory valueFromSuccessStoryHandler={valueFromSuccessStoryHandler} />
    </div>
  )
}

const SuccessStory = ({ valueFromSuccessStoryHandler }) => {
  const [message, setMessage] = React.useState('')
  return (
    <div>
      <h1>Success Story</h1>
      <p>Once upon a time, there was a developer named Jimmy. He lived in a place called Somewhere on the earth.</p>
      <input
        type="text"
        className="form-control"
        placeholder={'Message'}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={20}
      ></input>
      <button onClick={() => valueFromSuccessStoryHandler(message)}>Click me to pass value back to Success</button>
    </div>
  )
}

SuccessStory.propTypes = {
  valueFromSuccessStoryHandler: PropTypes.func.isRequired,
}
