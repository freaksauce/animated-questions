import React, { Component } from 'react'

class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {}


  render() {
    return (
      this.props.show &&
        React.cloneElement(
          this.props.children,
          {
            styles: this.state.styles,
            extraClasses: this.state.extraClasses,
            onNext: this.onNext
            // onBack: this.onBack
          }
        )
    )
  }
}

export default Question
