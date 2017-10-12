import React from 'react'
import PropTypes from 'prop-types'

const Component3 = props => (
  <div>
    <label htmlFor="input3">This is page 3</label>
    <input id="input3" className="question__input" value="" type="text" />
    <button className="question__submit" onClick={() => props.onGoToPage('P2', 'back')}>Back</button>
    <button className="question__submit" onClick={() => props.onGoToPage('P4', 'next')}>Next</button>
    <button className="question__submit" onClick={() => props.onGoToPage('question1', 'back')}>Go to page 1</button>
  </div>
)

Component3.defaultProps = {
  onGoToPage: null
}
Component3.propTypes = {
  onGoToPage: PropTypes.func
}

export default Component3
