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
    this.incrementPage = this.incrementPage.bind(this)
    this.decrementPage = this.decrementPage.bind(this)
    this.goToPage = this.goToPage.bind(this)
  }

  /**
   * if a component is removed from the pages array prop force the state to update
   */
  componentWillReceiveProps(newProps) {
    if (this.props.updatedVisiblePage !== newProps.updatedVisiblePage) {
      this.setState({
        counter: newProps.updatedVisiblePage,
        visiblePagesArr: [`Q${newProps.updatedVisiblePage}`]
      })
    }
  }

  /**
   * check which direction the page needs to animate (up/down) and get the selector of the "next" component
   */
  getNextPage(direction) {
    const selector = direction === 'up' ? `.SPS__page:nth-of-type(${this.state.counter + 1})` : `.SPS__page:nth-of-type(${this.state.counter - 1})`
    return document.querySelector(selector)
  }

  /**
   * Force animate to a specific page without seeing any other pages animate, this is possible due to all questions being unmounted on complete
   */
  goToPage(pageNumber = null, direction = 'up') {
    const selector = `.SPS__page:nth-of-type(${pageNumber})`
    this.setState({ visiblePagesArr: this.updatedVisiblePagesArr(direction, pageNumber) }, () => {
      // Scroll to next page
      const el = document.querySelector(selector)
      if (direction === 'up') {
        const offset = el.clientHeight
        window.scroll(0, offset)
      }
      this.animatePage(el, pageNumber)
    })
  }

  /**
    * create a new copy of the state.visiblePagesArr
    * direction will increment or decrement the counter
    * pageNumber is used when navigating to an arbitrary page
    * adding to the visiblePagesArr will mount the component in the DOM
    */
  updatedVisiblePagesArr(direction = 'up', pageNumber) {
    const visiblePagesArr = this.state.visiblePagesArr
    const pagesArrLen = this.props.pages.length
    let pageToAdd = null
    if (pageNumber) {
      pageToAdd = `Q${pageNumber}`
    } else if (direction && direction === 'up') {
      // check if direction was up (increment)
      if (this.state.counter + 1 <= pagesArrLen) {
        // if allowed create a new page id string to add to questionsArr
        pageToAdd = `Q${this.state.counter + 1}`
      }
    } else if (direction && direction === 'down' && this.state.counter - 1 >= 1) {
      // if direction was down (decrement)
      pageToAdd = `Q${this.state.counter - 1}`
    }
    // if not null add the page ID to the array and return
    if (pageToAdd !== null) return [...visiblePagesArr, pageToAdd]
    return false
  }

  /**
    * create a new copy of the state.visiblePagesArr
    * remove a page from visiblePagesArr to unmount from the DOM
    */
  removeFromVisiblePagesArray(toDelete) {
    const visiblePagesArr = this.state.visiblePagesArr
    const newVisiblePagesArr = visiblePagesArr.filter(pageId => {
      return pageId !== toDelete
    })
    this.setState({ visiblePagesArr: newVisiblePagesArr }, () => {
      console.log(this.state)
    })
  }

  incrementPage() {
    // push next page to visible arr, in <Page> check if in array
    if (this.updatedVisiblePagesArr('up')) {
      const scrollTo = this.getNextPage('up')
      this.setState({ visiblePagesArr: this.updatedVisiblePagesArr('up') }, () => {
        // Scroll to next page
        this.animatePage(scrollTo, this.state.counter + 1)
      })
    }
  }
  decrementPage() {
    if (this.updatedVisiblePagesArr('down')) {
      const scrollTo = this.getNextPage('down')
      this.setState({ visiblePagesArr: this.updatedVisiblePagesArr('down') }, () => {
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

  /**
   * pass in a DOM element to animate to, update counter to set current page index
   */
  animatePage(scrollTo, counterVal) {
    const currCounter = this.state.counter
    scrollIt(scrollTo, 500, 'easeInOutQuart', () => {
      this.setState({ counter: counterVal })
      // delete current from visible array to unmount from DOM
      this.removeFromVisiblePagesArray(`Q${currCounter}`)
    }, this.props.myOffsetTop)
  }

  render() {
    return (
      <div className="questionScroller">
        {this.props.pages.map((PageComponent, index) => {
          const isVisible = !!this.state.visiblePagesArr.includes(`Q${index + 1}`)
          return (
            <Page
              id={`Q${index + 1}`}
              key={`Q${index + 1}`}
              visible={isVisible}
              goToPage={(pageNumber) => this.goToPage(pageNumber)}
              incrementPage={this.incrementPage}
              decrementPage={this.decrementPage}
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
  myOffsetTop: 0,
  updatedVisiblePage: null
}
PageScroller.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.func).isRequired,
  myOffsetTop: PropTypes.number,
  updatedVisiblePage: PropTypes.number
}

export default PageScroller
