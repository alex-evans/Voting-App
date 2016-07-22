import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { HomeContainer } from '../../app/components/HomeContainer'

describe('HomeContainer', () => {

  it('should render Header', () => {
    const wrapper = shallow(<HomeContainer />)
    expect(wrapper.containsAllMatchingElements([
      <Header />,
    ])).to.equal(true)
  })

})
