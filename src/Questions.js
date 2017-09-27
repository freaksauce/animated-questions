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

  incrementQuestions() {}
  decrementQuestions() {}

  render() {
    return (
      <div className="questionScroller">
        <Question>
          <Component1 />
        </Question>

        <Question>
          <Component2 />
        </Question>

        <Question>
          <Component3 />
        </Question>
      </div>
    )
  }
}

export default Questions
