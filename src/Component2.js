import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Component2 = () => (
  <div className={`question ${this.props.extraClasses}`} style={this.props.styles}>
    <div className="question__inner">
      <label>This is question 2</label>
      <input className="question__input" value="" type="text"></input>
      <button className="question__submit" onClick={this.props.onBack}>Back</button>
      <button className="question__submit" onClick={this.props.onNext}>Next</button>
    </div>
  </div>
)

export default Component2
