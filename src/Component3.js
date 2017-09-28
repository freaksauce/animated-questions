import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Component3 = props => (
  <div>
    <label>This is question 3</label>
    <input className="question__input" value="" type="text"></input>
    <button className="question__submit" onClick={props.onBack}>Back</button>
    <button className="question__submit" onClick={props.onNext}>Next</button>
  </div>
)

export default Component3
