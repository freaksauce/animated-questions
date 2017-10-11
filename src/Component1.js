import React from 'react'
import PropTypes from 'prop-types'

const Component1 = props => (
  <div>
    <label htmlFor="input1">This is page 1</label>
    <input id="input1" className="question__input" value="" type="text" />
    <button className="question__next question__submit" onClick={() => props.onGoToPage('P2', 'next')}>
      Next
    </button>
    <button className="question__submit" onClick={() => props.onGoToPage('P3', 'next')}>Go to page 3</button>
  </div>
)

Component1.defaultProps = {
  onGoToPage: null
}
Component1.propTypes = {
  onGoToPage: PropTypes.func
}

export default Component1
