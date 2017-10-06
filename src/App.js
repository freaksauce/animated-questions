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
    updatedVisiblePage: null,
    footerModifier: ''
  }
  /*
    functions to test that updating the questions array passed into the QuestionScroller
    actually updated the DOM correctly
  */
  // addComponentToQuestionsArray(componentToAdd) {
  addComponentToPagesArray() {
    console.log('addComponentToQuestionsArray')
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
    console.log(updatedPagesArray)
    this.setState({
      pagesArray: updatedPagesArray,
      updatedVisiblePage: updatedPagesArray.length
    }, () => {
      console.log('removeComponentFromPagesArray', this.state)
    })
  }
  /**
   * toggleFooter adds/removes class to show/hide the footer
   */
  toggleFooter(show) {
    if (show === true) {
      this.setState({ footerModifier: 'App-footer--show' }, () => {
        const el = document.querySelector('.App-footer')
        const footerHeight = el.clientHeight
        window.scroll(0, -footerHeight)
        this.hideScrollbars(false)
      })
    } else {
      this.setState({ footerModifier: '' })
    }
  }
  /**
   *
   */
  hideScrollbars(hide) {
    if (hide === true) {
      document.body.classList.add('hideScrollbars')
    } else {
      document.body.classList.remove('hideScrollbars')
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Page Scroller Demo</h2>
        </div>
        <div className="App-content">
          <PageScroller
            pages={this.state.pagesArray}
            offsetTop={190}
            hideScrollbars={(hide) => this.hideScrollbars(hide)}
            toggleFooter={(show) => this.toggleFooter(show)}
            addComponentToPagesArray={this.addComponentToPagesArray}
            removeComponentFromPagesArray={this.removeComponentFromPagesArray}
          />
        </div>
        <div className={`App-footer ${this.state.footerModifier}`}>Footer</div>
      </div>
    )
  }
}

export default App
