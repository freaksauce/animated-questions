import React, { Component } from 'react'

import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'

class QuestionScroller extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuestionHeight: null,
      showComponent1: true,
      showComponent2: false,
      showComponent3: false,
      currentQuestionNext: false,
      currentQuestionBack: false
    }
    this.handleNext = this.handleNext.bind(this)
    this.handleBack = this.handleBack.bind(this)
  }

  componentDidMount() {
    this.setState({currentQuestionHeight: this.getCurrentQuestionHeight()})
  }

  getCurrentQuestionHeight() {
    const el = document.querySelector('.question')
    return el.clientHeight
  }
  handleNext(stateObj) {
    console.log('next', stateObj)
    this.setState({currentQuestionNext: true})
    this.onAnimateComplete(stateObj)
  }
  handleBack() {
    console.log('back');
    this.setState({currentQuestionBack: true})
  }
  onAnimateComplete(stateObj) {
    console.log('onAnimateComplete', stateObj);
    setTimeout(() => {
      console.log('set animate complete state', stateObj);
      this.setState(stateObj)
      this.setState({currentQuestionBack: false, currentQuestionNext: false})
    }, 800)
  }

  render() {
    return (
      <div className="questionScroller">
        {this.state.showComponent1 &&
          <Component1
            onNext={() => this.handleNext({showComponent1: false, showComponent2: true})}
            currentQuestionHeight={this.state.currentQuestionHeight}
            next={this.state.currentQuestionNext}
            back={this.state.currentQuestionBack}
          />
        }
        {this.state.showComponent2 &&
          <Component2
            onNext={() => this.handleNext({showComponent2: false, showComponent3: true})}
            onBack={() => this.handleNext({showComponent2: true, showComponent3: false})}
            currentQuestionHeight={this.state.currentQuestionHeight}
            next={this.state.currentQuestionNext}
            back={this.state.currentQuestionBack}
          />
        }
        {this.state.showComponent3 &&
          <Component3
            onNext={() => this.handleNext({showComponent1: true, showComponent3: false})}
            onBack={() => this.handleNext({showComponent2: true, showComponent3: false})}
            currentQuestionHeight={this.state.currentQuestionHeight}
            next={this.state.currentQuestionNext}
            back={this.state.currentQuestionBack}
          />
        }
      </div>
    )
  }
}

export default QuestionScroller
