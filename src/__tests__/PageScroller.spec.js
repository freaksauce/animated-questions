import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'


import PageScroller from '../PageScroller'
import Page from '../Page'
import Component1 from '../Component1'
import Component2 from '../Component2'
import Component3 from '../Component3'
import Component4 from '../Component4'

configure({ adapter: new Adapter() })

const shallowRender = shallow(<PageScroller pages={[Component1, Component3, Component2, Component4]} />)
const mountComponent = mount(<PageScroller pages={[Component1, Component3, Component2, Component4]} />)

describe('<PageScroller />', () => {
  it('should render a page component', () => {
    expect(shallowRender.find(Page)).toBeTruthy()
  })

  it('should display "This is page 1" text', () => {
    expect(mountComponent.find(Page).first().find('label').text()).toBe('This is page 1')
  })
})
