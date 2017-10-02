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

  getNextPage(action) {
    const selector = action === '+' ? `.SPS__page:nth-of-type(${this.state.counter + 1})` : `.SPS__page:nth-of-type(${this.state.counter - 1})`
    console.log('selector', selector)
    return document.querySelector(selector)
  }

  updatedVisiblePagesArr(action) {
    console.log('updatedVisiblePagesArr', action)
    const visiblePagesArr = this.state.visiblePagesArr
    const pagesArrLen = this.props.pages.length
    let pageToAdd = null
    if (action === '+') {
      // check if action was a plus (increment)
      if (this.state.counter + 1 <= pagesArrLen) {
        // if allowed create a new page id string to add to questionsArr
        pageToAdd = `Q${this.state.counter + 1}`
      }
    } else if (this.state.counter - 1 >= 1) {
      // if action was a minus (decrement)
      pageToAdd = `Q${this.state.counter - 1}`
    }
    // if not null add the page ID to the array and return
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
    // push next page to visible arr, in <Page> check if in array
    if (this.updatedVisiblePagesArr('+')) {
      const scrollTo = this.getNextPage('+')
      console.log('incrementQuestions scrollTo', scrollTo)
      this.setState({ visiblePagesArr: this.updatedVisiblePagesArr('+') }, () => {
        // Scroll to next page
        this.animatePage(scrollTo, this.state.counter + 1)
      })
    }
  }
  decrementQuestions() {
    console.log('decrementQuestions')
    if (this.updatedVisiblePagesArr('-')) {
      const scrollTo = this.getNextPage('-')
      this.setState({ visiblePagesArr: this.updatedVisiblePagesArr('-') }, () => {
        /* when you mount a page in the DOM above the current page it pushes
           the current page underneath in the page so the new page appears at top
           to fix this an offset needs to be applied to the scroll position before animating
        */
        const el = document.querySelector(`.SPS__page:nth-of-type(${this.state.counter - 1})`)
        const offset = el.clientHeight
        window.scroll(0, offset)
        this.animatePage(scrollTo, this.state.counter - 1)
      })
    }
  }

  animatePage(scrollTo, counterVal) {
    const currCounter = this.state.counter
    console.log('scrollTo', scrollTo);
    scrollIt(scrollTo, 500, 'easeOutQuad', () => {
      this.setState({ counter: counterVal })
      console.log(`Just finished scrolling to ${window.pageYOffset}px`)
      console.log('Q to remove', `Q${currCounter}`)
      // delete current from visible array
      this.removeFromVisibleArray(`Q${currCounter}`)
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
