import React from 'react'
import { Button, PageHeader } from 'react-bootstrap'
import css from '../../public/css/main.scss'

class Header extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>
          <div className="text-right login">
            <Button
              bsSize={"lg"}
              onClick={this.props.authorizeUser.bind(null)}
            >
            LogIn
            </Button>
          </div>
        </PageHeader>
      </div>
    )
  }
}

export default Header
