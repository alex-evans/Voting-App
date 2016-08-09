'use strict'

import React from 'react'
import css from '../../public/css/main.scss'
import { Link } from 'react-router'

class Poll extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='poll'>
        <Link to="/:id"><strong>Name:</strong> {this.props.name}<br /></Link>
      </div>
    )
  }
}

export default Poll
