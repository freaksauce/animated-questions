import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import QuestionScroller from './QuestionScroller'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
import Component4 from './Component4'

class App extends Component {
  constructor(props) {
    super(props)
    this.addComponentToQuestionsArray = this.addComponentToQuestionsArray.bind(this)
    this.removeComponentFromQuestionsArray = this.removeComponentFromQuestionsArray.bind(this)
  }
  state = {
    questionsArray: [Component1, Component2, Component3]
  }
  /*
    functions to test that updating the questions array passed into the QuestionScroller
    actually updated the DOM correctly
  */
  // addComponentToQuestionsArray(componentToAdd) {
  addComponentToQuestionsArray() {
    console.log('addComponentToQuestionsArray')
    const componentToAdd = Component4
    const updatedQuestionsArray = [...this.state.questionsArray, componentToAdd]
    this.setState({ questionsArray: updatedQuestionsArray })
  }
  removeComponentFromQuestionsArray(componentToRemove) {
    const updatedQuestionsArray = this.state.questionsArray.filter(component => {
      return component !== componentToRemove
    })
    this.setState({ questionsArray: updatedQuestionsArray }, () => {
      console.log(this.state)
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-content">
          <QuestionScroller
            questions={this.state.questionsArray}
            addComponentToQuestionsArray={this.addComponentToQuestionsArray}
            removeComponentFromQuestionsArray={this.removeComponentFromQuestionsArray}
          />
        </div>
      </div>
    )
  }
}

export default App
