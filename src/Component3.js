import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Component3 = props => (
  <div className={`question ${props.extraClasses}`}>
    <div className="question__inner">
      <label>This is question 3</label>
      <input className="question__input" value="" type="text"></input>
      <button className="question__back" onClick={props.onBack}>Back</button>
      <button className="question__submit" onClick={props.onNext}>Next</button>
    </div>
  </div>
)

export default Component3
