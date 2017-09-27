import React, { Component } from 'react'
import Question from './Question'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'

class Questions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 1
    }
    this.incrementQuestions = this.incrementQuestions.bind(this)
    this.decrementQuestions = this.decrementQuestions.bind(this)
  }

  getCurrentQuestionHeight() {
    const el = document.querySelector(`.question:nth-of-type(${this.state.counter})`)
    console.log(el.clientHeight);
    return el.clientHeight
  }
  incrementQuestions() {
    console.log('incrementQuestions')
    const currentQuestionHeight = this.getCurrentQuestionHeight()
    console.log(currentQuestionHeight);
    // scroll body by currentQuestionHeight
  }
  decrementQuestions() {
    console.log('decrementQuestions')
    // scroll body by x
  }

  render() {
    return (
      <div className="questionScroller">
        <Question
          incrementQuestions={this.incrementQuestions}
          decrementQuestions={this.decrementQuestions}
        >
          <Component1 />
        </Question>

        <Question
          incrementQuestions={this.incrementQuestions}
          decrementQuestions={this.decrementQuestions}
        >
          <Component2 />
        </Question>

        <Question
          incrementQuestions={this.incrementQuestions}
          decrementQuestions={this.decrementQuestions}
        >
          <Component3 />
        </Question>
      </div>
    )
  }
}

export default Questions
