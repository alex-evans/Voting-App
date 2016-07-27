import React from 'react'
import { Link } from 'react-router'
import NewPollBtn from './NewPollBtn'
import AuthBtn from './AuthBtn'
import css from '../../public/css/main.scss'

class Header extends React.Component {
  render() {
    let pollBtn = <NewPollBtn />
    return (
      <div className='header column-12'>
        <div className='new-btn-container column-3' >
          {this.props.auth ? <NewPollBtn /> : "."}
        </div>
        <div className='text-center header-title column-6'>
          <h1>
            <Link to='/'>Voting-App</Link>
          </h1>
        </div>
        <div className='auth-btn-container column-3'>
          <AuthBtn {...this.props} />
        </div>
      </div>
    )
  }
}

export default Header
