import React from 'react'
import PropTypes from 'prop-types'

const Component3 = props => (
  <div>
    <label htmlFor="input3">This is page 3</label>
    <input id="input3" className="question__input" value="" type="text" />
    <button className="question__submit" onClick={props.onBack}>Back</button>
    <button className="question__submit" onClick={props.onNext}>Next</button>
    <button className="question__submit" onClick={() => props.onGoToPage(1)}>Go to page 1</button>
  </div>
)

Component3.defaultProps = {
  onBack: null,
  onNext: null,
  onGoToPage: null
}
Component3.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func,
  onGoToPage: PropTypes.func
}

export default Component3
