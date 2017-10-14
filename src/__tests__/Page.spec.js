import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// import sinon from 'sinon'

import Page from '../Page'

configure({ adapter: new Adapter() })

const PageComponent = (<Page
  id="1"
  visible
><p className="myText">My Page</p></Page>)

const shallowRender = shallow(PageComponent)

describe('<Page />', () => {
  it('should render a page component', () => {
    expect(shallowRender.find('.SPS__page')).toBeTruthy()
  })

  it('should render text "My Page"', () => {
    expect(shallowRender.find('.myText').text()).toBe('My Page')
  })
})
