import React from 'react'
import PropTypes from 'prop-types'

const Component3 = props => (
  <div>
    <label htmlFor="input3">This is page 3</label>
    <input id="input3" className="question__input" value="" type="text" />
    <button className="question__submit" onClick={() => props.onGoToPage('Q2', 'down')}>Back</button>
    <button className="question__submit" onClick={() => props.onGoToPage('Q4', 'up')}>Next</button>
    <button className="question__submit" onClick={() => props.onGoToPage('Q1', 'down')}>Go to page 1</button>
  </div>
)

Component3.defaultProps = {
  onGoToPage: null
}
Component3.propTypes = {
  onGoToPage: PropTypes.func
}

export default Component3
