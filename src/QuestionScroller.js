import React, { Component } from 'react'
import PropTypes from 'prop-types'
import scrollIt from './vendor/scrollIt'
import Question from './Question'

class QuestionScroller extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 1,
      visibleQuestionsArr: ['Q1']
    }
    this.incrementQuestions = this.incrementQuestions.bind(this)
    this.decrementQuestions = this.decrementQuestions.bind(this)
  }

  getNextQuestion(action) {
    const selector = action === '+' ? `.question:nth-of-type(${this.state.counter + 1})` : `.question:nth-of-type(${this.state.counter - 1})`
    return document.querySelector(selector)
  }

  updatedVisibleQuestionsArr(action) {
    console.log('updatedVisibleQuestionsArr')
    const visibleQuestionsArr = this.state.visibleQuestionsArr
    const questionsArrLen = this.props.questions.length
    let questionToAdd = null
    if (action === '+') {
      // check if action was a plus (increment)
      if (this.state.counter + 1 <= questionsArrLen) {
        // if allowed create a new question id string to add to questionsArr
        questionToAdd = `Q${this.state.counter + 1}`
      }
    } else if (this.state.counter - 1 >= 1) {
      // if action was a minus (decrement)
      questionToAdd = `Q${this.state.counter - 1}`
    }
    // if not null add the question ID to the array and return
    if (questionToAdd !== null) return [...visibleQuestionsArr, questionToAdd]
    return false
  }

  removeFromVisibleArray(toDelete) {
    console.log('removeFromVisibleArray')
    const visibleQuestionsArr = this.state.visibleQuestionsArr
    const newVisibleQuestionsArr = visibleQuestionsArr.filter(questionId => {
      return questionId !== toDelete
    })
    this.setState({ visibleQuestionsArr: newVisibleQuestionsArr }, () => {
      console.log(this.state)
    })
  }

  incrementQuestions() {
    console.log('incrementQuestions')
    // push next question to visible arr, in <Question> check if in array
    if (this.updatedVisibleQuestionsArr('+')) {
      const scrollTo = this.getNextQuestion('+')
      this.setState({ visibleQuestionsArr: this.updatedVisibleQuestionsArr('+') }, () => {
        // Scroll to next Question
        this.animateQuestion(scrollTo, this.state.counter + 1)
      })
    }
  }
  decrementQuestions() {
    console.log('decrementQuestions')
    if (this.updatedVisibleQuestionsArr('-')) {
      const scrollTo = this.getNextQuestion('-')
      this.setState({ visibleQuestionsArr: this.updatedVisibleQuestionsArr('-') }, () => {
        /* when you mount a question in the DOM above the current question it pushes
           the current question underneath in the page so the new question appears at top
           to fix this an offset needs to be applied to the scroll position before animating
        */
        const el = document.querySelector('.question:nth-of-type(1)')
        const offset = el.clientHeight
        window.scroll(0, offset)
        this.animateQuestion(scrollTo, this.state.counter - 1)
      })
    }
  }

  animateQuestion(scrollTo, counterVal) {
    const currCounter = this.state.counter
    scrollIt(scrollTo, 500, 'easeOutQuad', () => {
      this.setState({ counter: counterVal })
      console.log(`Just finished scrolling to ${window.pageYOffset}px`)
      console.log('Q to remove', `Q${currCounter}`)
      // delete current from visible array
      this.removeFromVisibleArray(`Q${currCounter}`) // NOT FIRING
    })
  }

  render() {
    /*
      test functions to add/remove components from the DOM set in App.js
    */
    const {
      addComponentToQuestionsArray,
      removeComponentFromQuestionsArray
    } = this.props
    return (
      <div className="questionScroller">
        {this.props.questions.map((QuestionComponent, index) => {
          const isVisible = !!this.state.visibleQuestionsArr.includes(`Q${index + 1}`)
          return (
            <Question
              id={`Q${index + 1}`}
              key={`Q${index + 1}`}
              visible={isVisible}
              incrementQuestions={this.incrementQuestions}
              decrementQuestions={this.decrementQuestions}
              addComponentToQuestionsArray={addComponentToQuestionsArray}
              removeComponentFromQuestionsArray={removeComponentFromQuestionsArray}
            >
              <QuestionComponent />
            </Question>
          )
        })}
      </div>
    )
  }
}

QuestionScroller.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.func).isRequired,
  addComponentToQuestionsArray: PropTypes.func,
  removeComponentFromQuestionsArray: PropTypes.func
}

export default QuestionScroller
