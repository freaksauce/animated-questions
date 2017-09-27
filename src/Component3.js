import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Component3 = () => (
  <div className={`question ${this.props.extraClasses}`} style={this.props.styles}>
    <div className="question__inner">
      <label>This is question 3</label>
      <input className="question__input" value="" type="text"></input>
      <button className="question__back" onClick={this.props.onBack}>Back</button>
      <button className="question__submit" onClick={this.props.onNext}>Next</button>
    </div>
  </div>
)

export default Component3
