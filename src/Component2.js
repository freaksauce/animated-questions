import React from 'react'
import PropTypes from 'prop-types'

const Component2 = props => (
  <div>
    <label htmlFor="input2">This is page 2</label>
    <input id="input2" className="question__input" value="" type="text" />
    <button className="question__submit" onClick={() => props.onGoToPage('question1', 'back')}>
      Back
    </button>
    <button className="question__submit" onClick={() => props.onGoToPage('P3', 'next')}>
      Next
    </button>
  </div>
)

Component2.defaultProps = {
  onGoToPage: null
}
Component2.propTypes = {
  onGoToPage: PropTypes.func
}

export default Component2
