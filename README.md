### Page Scroller Component

An animated single page scrolling framework.

PageScroller is a wrapper component that accepts an array of components that will be used as pages that scroll up or down triggered by a click event. The framework only allows a single page to be visible at any time aside from during a scrolling animation, this is handled by keeping track of the visible pages in an internal state array which uses a prop internally called `visible` to mount and unmount from the DOM, leaving just an empty container DIV (by design).

In order to solve a particular requirement each component needs to be unmounted once scrolled off page and the order of pages needs to be altered on the fly due to pages being potentially added and removed by some conditional logic in other pages.

PageScroller accepts 4 main props, `pages`, `offsetTop`, `hideScrollbars` and `toggleFooter`.

`pages` is an array of components to render as single pages at a time that are animated using the provided methods.

`offsetTop` refers to if you are using a header component, so if you have a fixed header 200px high then add `offsetTop={200}`.

`hideScrollbars` is provided as a callback so that it is possible to run a function to set and remove a class that can be used to hide/show scrollbars. An example of this is that they are hidden by default to disallow user scrolling until the page has finished animating at which point they can scroll down to the footer. This scrollbars should be turned off again before animating. An example is provided in the master branch.

`toggleFooter` is another callback that can be used to set and remove a class to show/hide the footer. Once again this is used during animations and an example is provided in App.js.



```
PageScroller.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.func).isRequired,
  offsetTop: PropTypes.number,
  hideScrollbars: PropTypes.func,
  toggleFooter: PropTypes.func,
  updatedVisiblePage: PropTypes.number
}
```

### Simple example
```
import React, { Component } from 'react'

import PageScroller from './PageScroller'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'

class App extends Component {
  state = {
    pagesArray: [Component1, Component2, Component3]
  }

  render() {
    return (
      <PageScroller
        pages={this.state.pagesArray}
        offsetTop={200}
        hideScrollbars={
          (hide) => this.hideScrollbars(hide)
        }
        toggleFooter={
          (show) => this.toggleFooter(show)
        }
      />
    )
  }
}
```

### Available methods
In order to navigate from page to page there are 3 included methods that you can attach to onClick events etc. in your Page components.
```
onNext()
onBack()
onGoToPage(3)
```
onNext and onBack increment and decrement an internal counter to navigate back and forth while onGoToPage lets you set a page index (starting at 1) so that you can force skip to a page.

### Demo App
After cloning the repo run:
 ```
 yarn install
 yarn start
 ```
