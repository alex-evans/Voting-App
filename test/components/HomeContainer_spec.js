import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'
import HomeContainer from '../../app/components/HomeContainer'

describe('HomeContainer', () => {

  it('should render Header', () => {
    const wrapper = shallow(<HomeContainer />)
    exprect(wrapper.containsAllMatchingElements([
      <Header />,
    ])).to.equal(true)
  })

})
