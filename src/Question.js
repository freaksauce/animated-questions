import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      extraClasses: null
    }
    this.onNext = this.onNext.bind(this)
    this.onBack = this.onBack.bind(this)
    this.addQuestion = this.addQuestion.bind(this)
    this.removeQuestion = this.removeQuestion.bind(this)
  }

  onNext() {
    console.log('onNext')
    this.props.incrementQuestions()
  }
  onBack() {
    console.log('onBack')
    this.props.decrementQuestions()
  }
  addQuestion() {
    this.props.addComponentToQuestionsArray()
  }
  removeQuestion(componentIndex) {
    console.log('removeQuestion', componentIndex)
    this.props.removeComponentFromQuestionsArray(componentIndex)
  }

  render() {
    return (
      <div className="question" id={this.props.id}>
        {this.props.visible && (
          <div className="question__inner">
            {React.cloneElement(this.props.children, {
              extraClasses: this.state.extraClasses,
              onNext: this.onNext,
              onBack: this.onBack,
              addQuestion: this.addQuestion,
              removeQuestion: this.removeQuestion
            })}
          </div>
        )}
      </div>
    )
  }
}

Question.defaultProps = {
  visible: false,
  addComponentToQuestionsArray: null,
  removeComponentFromQuestionsArray: null
}
Question.propTypes = {
  id: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  incrementQuestions: PropTypes.func.isRequired,
  decrementQuestions: PropTypes.func.isRequired,
  addComponentToQuestionsArray: PropTypes.func,
  removeComponentFromQuestionsArray: PropTypes.func,
  children: PropTypes.node.isRequired
}

export default Question
