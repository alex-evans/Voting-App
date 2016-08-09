'use strict'

import React from 'react'
import css from '../../public/css/main.scss'
import MyPollsContainer from './MyPollsContainer'

class HomeContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='container'>
        <div>
          <MyPollsContainer {...this.props} />
        </div>
      </div>
    )
  }
}

export default HomeContainer
