import React from 'react'
import PropTypes from 'prop-types'

const Component2 = props => (
  <div>
    <label htmlFor="input2">This is page 2</label>
    <input id="input2" className="question__input" value="" type="text" />
    <button className="question__submit" onClick={props.onBack}>
      Back
    </button>
    <button className="question__submit" onClick={props.onNext}>
      Next
    </button>
  </div>
)

Component2.defaultProps = {
  onBack: null,
  onNext: null
}
Component2.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func
}

export default Component2
