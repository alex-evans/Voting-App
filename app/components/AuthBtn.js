import React from 'react'
import css from '../../public/css/main.scss'

class AuthBtn extends React.Component {
  render() {
    return (
      <div className='text-right'>
        <button onClick={this.props.authorizeUser.bind(null)} className='auth-btn'>
          {this.props.auth ? 'Auth' : 'LogIn'}
        </button>
      </div>
    )
  }
}

export default AuthBtn
