### Page Scroller Component

An animated single page scrolling framework.

PageScroller is a wrapper component that accepts Child components that will be used as pages that scroll up or down triggered by a click event. The framework only allows a single page to be visible at any time aside from during a scrolling animation, this is handled by keeping track of the visible pages in an internal state array which uses a prop internally called `visible` to mount and unmount from the DOM, leaving just an empty container DIV (by design).

In order to solve a particular requirement each component needs to be unmounted once scrolled off page and the order of pages needs to be altered on the fly due to pages being potentially added and removed by some conditional logic in other pages.

PageScroller accepts 3 main props, `offsetTop`, `onAnimationStart` and `onAnimationEnd`.

`offsetTop` refers to if you are using a header component, so if you have a fixed header 200px high then add `offsetTop={200}`.

`onAnimationStart` is provided as a callback, in my example I execute the hideScrollbars() function.

`onAnimationStart` is another callback which can be used for showing/hiding scrollbars or toggling a footer etc.


```
PageScroller.propTypes = {
  children: PropTypes.arrayOf(PropTypes.func).isRequired,
  offsetTop: PropTypes.number,
  onAnimationStart: PropTypes.func.isRequired,
  onAnimationEnd: PropTypes.func.isRequired
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
        offsetTop={190}
        onAnimationStart={this.onAnimationStart}
        onAnimationEnd={this.onAnimationEnd}
      >
        <Component1 id="question1" />
        <Component2 />
        <Component3 />
        <Component4 />
      </PageScroller>
    )
  }
}
```

### Available methods
In order to navigate from page to page there is an included method that you can attach to onClick events etc. in your Page components. It needs 2 arguments, the id attribute of the page you want to scroll to ('id1', 'id2' etc.). If you do not add an id prop to the child components it will automatically assign an id eg. P2 (P for page, number is the index of the children array)
```
onGoToPage('question1', 'back')
onGoToPage('P3', 'next')
```

### Demo App
After cloning the repo run:
 ```
 yarn install
 yarn start
 ```
