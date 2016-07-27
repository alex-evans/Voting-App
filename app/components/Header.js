import React from 'react'
import { Link } from 'react-router'
import NewPollBtn from './NewPollBtn'
import AuthBtn from './AuthBtn'
import css from '../../public/css/main.scss'

class Header extends React.Component {
  render() {
    return (
      <div className='header column-12'>
        <NewPollBtn />
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
