import React from 'react'
import { Button } from 'react-bootstrap'
import css from '../../public/css/main.scss'

class Auth extends React.Component {
  render() {
    return (
      <div className='text-right login'>
        <Button
          bsSize={'lg'}
          onClick={this.props.authorizeUser.bind(null)}
        >
          {this.props.auth ? 'Auth' : 'LogIn'}
        </Button>
      </div>
    )
  }
}

export default Auth
