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
  }

  getCurrentQuestionHeight() {
    const el = document.querySelector(`.question:nth-of-type(${this.state.counter})`)
    console.log(el.clientHeight);
    return el.clientHeight
  }
  incrementQuestions() {
    // scroll body by x
    console.log('incrementQuestions')
  }
  decrementQuestions() {
    // scroll body by x
    console.log('decrementQuestions')
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
