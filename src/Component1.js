import React from 'react'
import PropTypes from 'prop-types'

const Component1 = props => (
  <div>
    <label htmlFor="input1">This is page 1</label>
    <input id="input1" className="question__input" value="" type="text" />
    <button className="question__back question__submit" onClick={props.onBack}>
      Back
    </button>
    <button className="question__next question__submit" onClick={props.onNext}>
      Next
    </button>
  </div>
)

Component1.defaultProps = {
  onBack: null,
  onNext: null
}
Component1.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func
}

export default Component1
