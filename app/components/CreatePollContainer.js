import React from 'react'
import css from '../../public/css/main.scss'
import CreatePoll from './CreatePoll'

class CreatePollContainer extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='create-poll-container'>
          <CreatePoll {...this.props} />
        </div>
      </div>
    )
  }
}

export default CreatePollContainer
