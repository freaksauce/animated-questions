import React from 'react'
import PropTypes from 'prop-types'

const Component4 = props => (
  <div>
    <label htmlFor="input4">This is page 4</label>
    <input id="input4" className="question__input" value="" type="text" />
    <button className="question__submit" onClick={() => props.onGoToPage('P3', 'back')}>Back</button>
  </div>
)

Component4.defaultProps = {
  onGoToPage: null
}
Component4.propTypes = {
  onGoToPage: PropTypes.func
}


export default Component4
