import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Component3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      styles: null
    }
  }
  componentDidUpdate() {

  }
  animateIn() {
    const newStyles = {
      top: `calc(${this.props.animateFrom}px + 190px)`
    }
    this.setState({styles: newStyles})
    setTimeout(() => {
      document.querySelector('.question').classList.add('question--animateIn')
    }, 500)
  }
  animateOut() {
    const newStyles = {
      top: `calc(${this.props.animateFrom}px - 190px)`
    }
    setTimeout(() => {
      this.setState({styles: newStyles})
    }, 500)
  }
  render() {
    return (
      <span>
      {this.state.styles !== null &&
        <div className="question question--2" style={this.state.styles}>
          <div className="question__inner">
            <label>This is question 2</label>
            <input className="question__input" value="" type="text"></input>
            <button className="question__back" onClick={this.props.onBack}>Back</button>
            <button className="question__submit" onClick={this.props.onNext}>Next</button>
          </div>
        </div>
      }
      </span>
    )
  }
}

export default Component3
