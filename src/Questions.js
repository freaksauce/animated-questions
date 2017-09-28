import React, { Component } from 'react'
import scrollIt from './vendor/scrollIt'
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
    this.questionsArr = [
      Component1,
      Component2,
      Component3
    ]
  }

  getCurrentQuestionHeight() {
    const el = document.querySelector(`.question:nth-of-type(${this.state.counter})`)
    console.log(el.clientHeight);
    return el.clientHeight
  }
  incrementQuestions() {
    console.log('incrementQuestions')
    // const currentQuestionHeight = this.getCurrentQuestionHeight()
    // console.log(currentQuestionHeight);
    // scroll body by currentQuestionHeight
    const scrollTo = document.querySelector(`.question:nth-of-type(${this.state.counter + 1})`)

    // Scroll to section 1
    scrollIt(
      document.querySelector(scrollTo),
      300,
      'easeOutQuad',
      () => {
        console.log(`Just finished scrolling to ${window.pageYOffset}px`)
        this.setState({counter: this.state.counter + 1})
      }
    )
  }
  decrementQuestions() {
    console.log('decrementQuestions')
    // scroll body by x
  }

  render() {
    return (
      <div className="questionScroller">
        {this.questionsArr.map((Component, index) => {
          return (
            <Question
              id={`Q${index}`}
              visible={true}
              incrementQuestions={this.incrementQuestions}
              decrementQuestions={this.decrementQuestions}
              >
              <Component />
            </Question>
          )
        })}
      </div>
    )
  }
}

export default Questions
