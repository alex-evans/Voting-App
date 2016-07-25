import React from 'react'
import Header from './Header'

class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        <Header {...this.props} />
      </div>
    )
  }
}

export default HomeContainer
