import React from 'react'
import { Button, PageHeader } from 'react-bootstrap'
import { Link } from 'react-router'
import Auth from './Auth'
import css from '../../public/css/main.scss'

class Header extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>
          <div>
            <div className='text-center header-title'>
              <h1>
                <Link to="/">Voting-App</Link>
              </h1>
            </div>
            <Auth {...this.props}/>
          </div>
        </PageHeader>
      </div>
    )
  }
}

export default Header
