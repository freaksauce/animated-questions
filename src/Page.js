import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      extraClasses: null
    }
    this.onGoToPage = this.onGoToPage.bind(this)
    this.pageStyles = {
      page__inner: {
        width: '100%',
        height: `calc(100vh - ${this.props.offsetTop}px)`,
        transition: 'all .8s ease-in-out'
      }
    }
  }

  onGoToPage(elementId, direction) {
    this.props.goToPage(elementId, direction)
  }

  render() {
    return (
      <div className="PageScroller__page" id={this.props.id}>
        {this.props.visible && (
          <div className="PageScroller__page__inner" style={this.pageStyles.page__inner}>
            {React.cloneElement(this.props.children, {
              extraClasses: this.state.extraClasses,
              onGoToPage: this.onGoToPage
            })}
          </div>
        )}
      </div>
    )
  }
}

Page.defaultProps = {
  visible: false,
  goToPage: null,
  offsetTop: 0
}
Page.propTypes = {
  id: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  offsetTop: PropTypes.number,
  goToPage: PropTypes.func,
  children: PropTypes.node.isRequired
}

export default Page
