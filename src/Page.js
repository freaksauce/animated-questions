import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      extraClasses: null
    }
    this.onNext = this.onNext.bind(this)
    this.onBack = this.onBack.bind(this)
    this.onGoToPage = this.onGoToPage.bind(this)
    this.addPage = this.addPage.bind(this)
    this.removePage = this.removePage.bind(this)

    this.pageStyles = {
      page__inner: {
        width: '100%',
        height: 'calc(100vh - 190px)',
        transition: 'all .8s ease-in-out',
        background: '#ccc'
      }
    }
  }

  onNext() {
    this.props.incrementPage()
  }
  onBack() {
    this.props.decrementPage()
  }
  onGoToPage(pageNumber) {
    this.props.goToPage(pageNumber)
  }

  render() {
    return (
      <div className="SPS__page" id={this.props.id}>
        {this.props.visible && (
          <div className="SPS__page__inner" style={this.pageStyles.page__inner}>
            {React.cloneElement(this.props.children, {
              extraClasses: this.state.extraClasses,
              onNext: this.onNext,
              onBack: this.onBack,
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
  goToPage: null
}
Page.propTypes = {
  id: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  incrementPage: PropTypes.func.isRequired,
  decrementPage: PropTypes.func.isRequired,
  goToPage: PropTypes.func,
  children: PropTypes.node.isRequired
}

export default Page
