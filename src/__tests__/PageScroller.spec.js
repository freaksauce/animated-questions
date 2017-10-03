import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import PageScroller from '../PageScroller'
import Page from '../Page'
import Component1 from '../Component1'
import Component2 from '../Component2'
import Component3 from '../Component3'

configure({ adapter: new Adapter() })

const shallowRender = shallow(<PageScroller pages={[Component1, Component3, Component2]} />)
const mountComponent1 = mount(<PageScroller pages={[Component1, Component2, Component3]} />)
const mountComponent2 = mount(<PageScroller pages={[Component3, Component1, Component2]} />)

describe('<PageScroller />', () => {
  it('should render a PageScroller component', () => {
    expect(shallowRender.find(Page)).toBeTruthy()
  })

  it('should display "This is page 1" text', () => {
    expect(mountComponent1.find('label').text()).toBe('This is page 1')
  })

  it('should display "This is page 3" text', () => {
    expect(mountComponent2.find('label').text()).toBe('This is page 3')
  })
})
