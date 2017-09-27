import React, { Component } from 'react'

class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      styles: null,
      extraClasses: null
    }
    this.onNext = this.onNext.bind(this)
    this.onBack = this.onBack.bind(this)
  }
  // componentDidUpdate(prevProps) {
  //   console.log('-----------', prevProps, this.props)
  //   if (prevProps.next !== this.props.next) {
  //       this.animateOut()
  //   }
  //   if (prevProps.back !== this.props.back) {
  //     this.animateIn()
  //   }
  // }
  onNext(e) {
    console.log('next')
    this.animateOut()
  }
  onBack() {
    console.log('back');
  }
  animateIn() {
    console.log('animateIn');
    const newStyles = {
      transform: `translateY(calc(${this.props.currentQuestionHeight}px + 190px))`
    }
    this.setState({styles: newStyles})
    setTimeout(() => {
      this.setState({extraClasses: 'question--animateIn'}, () => {        
        this.onAnimateComplete()
      })
    }, 1000)
  }
  animateOut() {
    console.log('animateOut');
    const newStyles = {
      transform: `translateY(calc(-${this.props.currentQuestionHeight}px - 190px))`
    }
    this.setState({styles: newStyles})
  }
  onAnimateComplete(stateObj) {
    console.log('onAnimateComplete', stateObj);
    setTimeout(() => {
      console.log('set animate complete state', stateObj);
      this.setState(stateObj)
    }, 8000)
  }

  render() {
    return (
      this.props.show &&
        React.cloneElement(
          this.props.children,
          {
            styles: this.state.styles,
            extraClasses: this.state.extraClasses,
            onNext: this.onNext,
            onBack: this.onBack
          }
        )
    )
  }
}

export default Question
