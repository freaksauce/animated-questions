import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Component2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      styles: null,
      extraClasses: ''
    }
  }
  componentDidMount() {
    this.animateIn()
  }
  componentDidUpdate(prevProps) {
    // if (prevProps.next !== this.props.next) {
    //     this.animateOut()
    // }
    if (prevProps.back !== this.props.back) {
      this.animateIn()
    }
  }
  animateIn() {
    console.log('comp 2 animateIn');
    const newStyles = {
      transform: `translateY(calc(${this.props.currentQuestionHeight}px + 190px))`
    }
    this.setState({styles: newStyles})
    setTimeout(() => {
      this.setState({extraClasses: 'question--animateIn'})
    }, 0)
  }
  animateOut() {
    console.log('comp2 animateOut');
    const newStyles = {
      transform: `translateY(calc(-${this.props.currentQuestionHeight}px - 190px))`
    }
    this.setState({styles: newStyles})
  }
  render() {
    return (
      <span>
      {this.state.styles !== null &&
        <div className={`question question--2 ${this.state.extraClasses}`} style={this.state.styles}>
          <div className="question__inner">
            <label>This is question 2</label>
            <input className="question__input" value="" type="text"></input>
            <button className="question__submit" onClick={this.props.onBack}>Back</button>
            <button className="question__submit" onClick={this.props.onNext}>Next</button>
          </div>
        </div>
      }
      </span>
    )
  }
}

export default Component2
