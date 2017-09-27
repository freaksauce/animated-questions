import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Component1 extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     styles: null
  //   }
  // }
  // componentDidUpdate(prevProps) {
  //   if (prevProps.next !== this.props.next) {
  //       this.animateOut()
  //   }
  //   if (prevProps.back !== this.props.back) {
  //     this.animateIn()
  //   }
  // }
  // animateIn() {
  //   console.log('animateIn');
  //   const newStyles = {
  //     transform: `translateY(calc(${this.props.currentQuestionHeight}px + 190px))`
  //   }
  //   this.setState({styles: newStyles})
  //   setTimeout(() => {
  //     this.setState({extraClasses: 'question--animateIn'})
  //   }, 0)
  // }
  // animateOut() {
  //   console.log('animateOut');
  //   const newStyles = {
  //     transform: `translateY(calc(-${this.props.currentQuestionHeight}px - 190px))`
  //   }
  //   this.setState({styles: newStyles})
  // }

  render() {
    // console.log(this.props.styles);
    return (
      <span>
        <div className={`question ${this.props.extraClasses}`} style={this.props.styles}>
          <div className="question__inner">
            <label>This is question 1</label>
            <input className="question__input" value="" type="text"></input>
            <button className="question__back question__submit" onClick={this.props.onBack}>Back</button>
            <button className="question__next question__submit" onClick={this.props.onNext}>Next</button>
          </div>
        </div>
      </span>
    )
  }
}

export default Component1
