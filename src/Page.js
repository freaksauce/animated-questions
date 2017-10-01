import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Page extends Component {
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
    this.props.addComponentToPagesArray()
  }
  removeQuestion(componentIndex) {
    console.log('removeQuestion', componentIndex)
    this.props.removeComponentFromPagesArray(componentIndex)
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

Page.defaultProps = {
  visible: false,
  addComponentToPagesArray: null,
  removeComponentFromPagesArray: null
}
Page.propTypes = {
  id: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  incrementQuestions: PropTypes.func.isRequired,
  decrementQuestions: PropTypes.func.isRequired,
  addComponentToPagesArray: PropTypes.func,
  removeComponentFromPagesArray: PropTypes.func,
  children: PropTypes.node.isRequired
}

export default Page
