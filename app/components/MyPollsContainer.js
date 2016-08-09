'use strict'

import React from 'react'
import css from '../../public/css/main.scss'
import Poll from './Poll'

class MyPollsContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let myPolls = this.props.polls.map((poll, index) => {
      return <Poll key = {poll.id} name = {poll.name} question = {poll.question} options = {poll.options} />
    })
    return (
      <div className='my-polls-container'>
        {myPolls}
      </div>
    )
  }
}

export default MyPollsContainer
