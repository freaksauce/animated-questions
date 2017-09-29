import React from 'react'
import PropTypes from 'prop-types'

const Component2 = props => (
  <div>
    <label htmlFor="input2">This is question 2</label>
    <input id="input2" className="question__input" value="" type="text" />
    <button className="question__submit" onClick={props.onBack}>
      Back
    </button>
    <button className="question__submit" onClick={props.onNext}>
      Next
    </button>
    <button className="question__submit" onClick={props.addQuestion}>
      Add Question
    </button>
  </div>
)

Component2.defaultProps = {
  addQuestion: null
}
Component2.propTypes = {
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  addQuestion: PropTypes.func
}

export default Component2
