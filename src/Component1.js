import React from 'react'
import PropTypes from 'prop-types'

const Component1 = props => (
  <div>
    <label htmlFor="input1">This is question 1</label>
    <input id="input1" className="question__input" value="" type="text" />
    <button className="question__back question__submit" onClick={props.onBack}>
      Back
    </button>
    <button className="question__next question__submit" onClick={props.onNext}>
      Next
    </button>
  </div>
)

Component1.propTypes = {
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired
}

export default Component1
