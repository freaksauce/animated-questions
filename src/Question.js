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

  componentDidMount() {}

  onNext() {
    console.log('onNext')
    this.props.incrementQuestions()
  }
  onBack() {
    console.log('onBack')
    this.props.decrementQuestions()
  }

  render() {
    return (
      React.cloneElement(
        this.props.children,
        {
          extraClasses: this.state.extraClasses,
          onNext: this.onNext,
          onBack: this.onBack
        }
      )
    )
  }
}

export default Question
