import React, { Component } from 'react'
import Question from './Question'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'

class Questions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      q1: true,
      q2: false,
      q3: false,
      currentQuestionHeight: null
    }
  }

  componentDidMount() {
    this.setState({currentQuestionHeight: this.getCurrentQuestionHeight()})
  }

  getCurrentQuestionHeight() {
    const el = document.querySelector('.question')
    return el.clientHeight
  }

  render() {
    return (
      <div className="questionScroller">
        <Question
          show={this.state.q1}
          currentQuestionHeight={this.state.currentQuestionHeight}
        >
          <Component1 />
        </Question>

        <Question
          show={this.state.q2}
          currentQuestionHeight={this.state.currentQuestionHeight}
        >
          <Component2 />
        </Question>

        <Question
          show={this.state.q3}
          currentQuestionHeight={this.state.currentQuestionHeight}
        >
          <Component3 />
        </Question>
      </div>
    )
  }
}

export default Questions
