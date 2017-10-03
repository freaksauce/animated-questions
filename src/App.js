import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import PageScroller from './PageScroller'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
import Component4 from './Component4'

class App extends Component {
  constructor(props) {
    super(props)
    this.addComponentToPagesArray = this.addComponentToPagesArray.bind(this)
    this.removeComponentFromPagesArray = this.removeComponentFromPagesArray.bind(this)
  }
  state = {
    pagesArray: [Component1, Component2, Component3],
    updatedVisiblePage: null
  }
  /*
    functions to test that updating the questions array passed into the QuestionScroller
    actually updated the DOM correctly
  */
  /*
  addComponentToPagesArray() {
    const componentToAdd = Component4
    const updatedPagesArray = [...this.state.pagesArray, componentToAdd]
    this.setState({ pagesArray: updatedPagesArray })
  }
  removeComponentFromPagesArray(componentIndex) {
    const { pagesArray } = this.state
    // remove the component from DOM via the questionsArray
    const updatedPagesArray = [
      ...pagesArray.slice(0, componentIndex - 1),
      ...pagesArray.slice(componentIndex)
    ]
    this.setState({
      pagesArray: updatedPagesArray,
      updatedVisiblePage: updatedPagesArray.length
    }, () => {
      console.log('removeComponentFromPagesArray', this.state)
    })
  }
  */

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-content">
          <PageScroller
            pages={this.state.pagesArray}
            updatedVisiblePage={this.state.updatedVisiblePage}
            addComponentToPagesArray={this.addComponentToPagesArray}
            removeComponentFromPagesArray={this.removeComponentFromPagesArray}
          />
        </div>
      </div>
    )
  }
}

export default App
