import React, { Component } from 'react'

class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      extraClasses: null
    }
    this.onNext = this.onNext.bind(this)
    this.onBack = this.onBack.bind(this)
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

  render() {
    return (
      <div className="question" id={this.props.id}>
        {this.props.visible && (
          <div className="question__inner">
            {React.cloneElement(this.props.children, {
              extraClasses: this.state.extraClasses,
              onNext: this.onNext,
              onBack: this.onBack,
              addQuestion: this.addQuestion
            })}
          </div>
        )}
      </div>
    )
  }
}

Question.defaultProps = {
  visible: false,
  addComponentToQuestionsArray: null
}
Question.propTypes = {
  id: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  incrementQuestions: PropTypes.func.isRequired,
  decrementQuestions: PropTypes.func.isRequired,
  addComponentToQuestionsArray: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Question
