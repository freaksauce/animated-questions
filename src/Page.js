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
    this.addQuestion = this.addQuestion.bind(this)
    this.removeQuestion = this.removeQuestion.bind(this)

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
    console.log('onNext')
    this.props.incrementQuestions()
  }
  onBack() {
    console.log('onBack')
    this.props.decrementQuestions()
  }
  onGoToPage(pageNumber) {
    console.log('onGoToPage', pageNumber)
    this.props.goToPage(pageNumber)
  }
  addQuestion() {
    this.props.addComponentToPagesArray()
  }
  removeQuestion(componentIndex) {
    console.log('removeQuestion', componentIndex)
    this.props.removeComponentFromPagesArray(componentIndex)
  }

  render() {
    console.log('PAGE PROPS');
    return (
      <div className="SPS__page" id={this.props.id}>
        {this.props.visible && (
          <div className="SPS__page__inner" style={this.pageStyles.page__inner}>
            {React.cloneElement(this.props.children, {
              extraClasses: this.state.extraClasses,
              onNext: this.onNext,
              onBack: this.onBack,
              onGoToPage: this.onGoToPage,
              addQuestion: this.addQuestion,
              removeQuestion: this.removeQuestion
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
  addComponentToPagesArray: null,
  removeComponentFromPagesArray: null
}
Page.propTypes = {
  id: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  incrementQuestions: PropTypes.func.isRequired,
  decrementQuestions: PropTypes.func.isRequired,
  goToPage: PropTypes.func,
  addComponentToPagesArray: PropTypes.func,
  removeComponentFromPagesArray: PropTypes.func,
  children: PropTypes.node.isRequired
}

export default Page
