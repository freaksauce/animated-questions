### Page Scroller Component

An animated single page scrolling framework.

PageScroller is a wrapper component that accepts an array of components that will be used as pages that scroll up or down triggered by a click event. The framework only allows a single page to be visible at any time aside from during a scrolling animation, this is handled by keeping track of the visible pages in an internal state array which uses a prop internally called `visible` to mount and unmount from the DOM, leaving just an empty container DIV (by design).

In order to solve a particular requirement each component needs to be unmounted once scrolled off page and the order of pages needs to be altered on the fly due to pages being potentially added and removed by some conditional logic in other pages.

PageScroller accepts 2 main props, `pages` and `offsetTop`, the offset refers to if you are using a header component, so if you have a fixed header 200px high then add `offsetTop={200}`.

In the example below I have added an additional 3 props to update the array of pages passed in (add, remove and another to update the internal visible pages array and counter). This would normally be taken care of by updating the redux store but I included these in the repo as a proof of concept.

```
PageScroller.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.func).isRequired,
  offsetTop: PropTypes.number,
  updatedVisiblePage: PropTypes.number,
  addComponentToPagesArray: PropTypes.func,
  removeComponentFromPagesArray: PropTypes.func
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
      />
    )
  }
}
```

# Demo App
After cloning the repo run:
 ```
 yarn install
 yarn start
 ```
