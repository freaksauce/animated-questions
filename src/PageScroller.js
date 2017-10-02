import React, { Component } from 'react'
import PropTypes from 'prop-types'
import scrollIt from './vendor/scrollIt'
import Page from './Page'

class PageScroller extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 1,
      visiblePagesArr: ['Q1']
    }
    this.incrementQuestions = this.incrementQuestions.bind(this)
    this.decrementQuestions = this.decrementQuestions.bind(this)
  }

  componentWillReceiveProps(newProps) {
    if (this.props.updatedVisiblePage !== newProps.updatedVisiblePage) {
      this.setState({
        counter: newProps.updatedVisiblePage,
        visiblePagesArr: [`Q${newProps.updatedVisiblePage}`]
      })
    }
  }

  getNextQuestion(action) {
    const selector = action === '+' ? `.question:nth-of-type(${this.state.counter + 1})` : `.question:nth-of-type(${this.state.counter - 1})`
    return document.querySelector(selector)
  }

  updatedVisiblePagesArr(action) {
    console.log('updatedVisiblePagesArr')
    const visiblePagesArr = this.state.visiblePagesArr
    const pagesArrLen = this.props.pages.length
    let pageToAdd = null
    if (action === '+') {
      // check if action was a plus (increment)
      if (this.state.counter + 1 <= pagesArrLen) {
        // if allowed create a new question id string to add to questionsArr
        pageToAdd = `Q${this.state.counter + 1}`
      }
    } else if (this.state.counter - 1 >= 1) {
      // if action was a minus (decrement)
      pageToAdd = `Q${this.state.counter - 1}`
    }
    // if not null add the question ID to the array and return
    if (pageToAdd !== null) return [...visiblePagesArr, pageToAdd]
    return false
  }

  removeFromVisibleArray(toDelete) {
    console.log('removeFromVisibleArray')
    const visiblePagesArr = this.state.visiblePagesArr
    const newVisiblePagesArr = visiblePagesArr.filter(pageId => {
      return pageId !== toDelete
    })
    this.setState({ visiblePagesArr: newVisiblePagesArr }, () => {
      console.log(this.state)
    })
  }

  incrementQuestions() {
    console.log('incrementQuestions')
    // push next question to visible arr, in <Question> check if in array
    if (this.updatedVisiblePagesArr('+')) {
      const scrollTo = this.getNextQuestion('+')
      this.setState({ visiblePagesArr: this.updatedVisiblePagesArr('+') }, () => {
        // Scroll to next Question
        this.animatePage(scrollTo, this.state.counter + 1)
      })
    }
  }
  decrementQuestions() {
    console.log('decrementQuestions')
    if (this.updatedVisiblePagesArr('-')) {
      const scrollTo = this.getNextQuestion('-')
      this.setState({ visiblePagesArr: this.updatedVisiblePagesArr('-') }, () => {
        /* when you mount a question in the DOM above the current question it pushes
           the current question underneath in the page so the new question appears at top
           to fix this an offset needs to be applied to the scroll position before animating
        */
        const el = document.querySelector(`.question:nth-of-type(${this.state.counter - 1})`)
        const offset = el.clientHeight
        window.scroll(0, offset)
        this.animatePage(scrollTo, this.state.counter - 1)
      })
    }
  }

  animatePage(scrollTo, counterVal) {
    const currCounter = this.state.counter
    scrollIt(scrollTo, 500, 'easeOutQuad', () => {
      this.setState({ counter: counterVal })
      console.log(`Just finished scrolling to ${window.pageYOffset}px`)
      console.log('Q to remove', `Q${currCounter}`)
      // delete current from visible array
      this.removeFromVisibleArray(`Q${currCounter}`) // NOT FIRING
    })
  }

  render() {
    console.log(this.state)
    /*
      test functions to add/remove components from the DOM set in App.js
    */
    const {
      addComponentToPagesArray,
      removeComponentFromPagesArray
    } = this.props
    return (
      <div className="questionScroller">
        {this.props.pages.map((PageComponent, index) => {
          const isVisible = !!this.state.visiblePagesArr.includes(`Q${index + 1}`)
          return (
            <Page
              id={`Q${index + 1}`}
              key={`Q${index + 1}`}
              visible={isVisible}
              incrementQuestions={this.incrementQuestions}
              decrementQuestions={this.decrementQuestions}
              addComponentToPagesArray={addComponentToPagesArray}
              removeComponentFromPagesArray={(componentId) => removeComponentFromPagesArray(componentId)}
            >
              <PageComponent />
            </Page>
          )
        })}
      </div>
    )
  }
}

PageScroller.defaultProps = {
  updatedVisiblePage: null
}
PageScroller.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.func).isRequired,
  updatedVisiblePage: PropTypes.number,
  addComponentToPagesArray: PropTypes.func,
  removeComponentFromPagesArray: PropTypes.func
}

export default PageScroller
