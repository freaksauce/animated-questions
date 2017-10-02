### WORK IN PROGRESS

An animated single page scrolling framework.

## What is it?
The idea is to have a wrapper component that accepts an array of components that will be used as pages. Only 1 page displays at a time and when you trigger the next and back functions it will animate to those pages.

In order to solve a particular set of challenges in a proposed project I am working on each component needs to be unmounted once scrolled off page and the order of pages needs to be altered on the fly due to pages being added and removed by some conditional logic in other pages.

PageScroller accepts 1 main prop, `pages`, in the example below I have added an additional 3 props to update the array of pages passed in (add, remove and another to update the internal visible pages array and counter):

```
PageScroller.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.func).isRequired,
  updatedVisiblePage: PropTypes.number,
  addComponentToPagesArray: PropTypes.func,
  removeComponentFromPagesArray: PropTypes.func
}
```
