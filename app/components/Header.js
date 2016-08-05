'use strict'

import React from 'react'
import { Link } from 'react-router'
import NewPollBtn from './NewPollBtn'
import AuthBtn from './AuthBtn'
import css from '../../public/css/main.scss'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='header'>
        <NewPollBtn {...this.props} />
        <div className='text-center header-title'>
          <h1>
            <Link to='/'>Voting-App</Link>
          </h1>
        </div>
        <AuthBtn {...this.props} />
      </div>
    )
  }
}

export default Header
