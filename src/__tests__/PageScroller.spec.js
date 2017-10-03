import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import PageScroller from '../PageScroller'
import Component1 from '../Component1'
import Component2 from '../Component2'
import Component3 from '../Component3'
import Component4 from '../Component4'

describe('<PageScroller />', () => {
  it('should render a single page component', () => {
    const wrapper = shallow(<PageScroller pages={[Component1, Component2, Component3, Component4]} />)
    expect(wrapper.find(Page)).to.have.length(3)
  })
})
