import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import HomeContainer from '../../app/components/HomeContainer'
import Header from '../../app/components/Header'

describe('HomeContainer', () => {
  it('contains a Header component', function () {
    const wrapper = mount(<Header/>)
    expect(wrapper.find(Header)).to.have.length(1)
  })
})
