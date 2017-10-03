import React from 'react'
import PropTypes from 'prop-types'

const Component4 = props => (
  <div>
    <label htmlFor="input4">This is page 4</label>
    <input id="input4" className="question__input" value="" type="text" />
    <button className="question__submit" onClick={props.onBack}>Back</button>
    <button className="question__submit" onClick={props.onNext}>Next</button>
    <button className="question__submit" onClick={() => props.removeQuestion('2')}>Remove Question</button>
  </div>
)

Component4.propTypes = {
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  removeQuestion: PropTypes.func.isRequired
}


export default Component4