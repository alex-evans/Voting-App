import React from 'react'
import css from '../../public/css/main.scss'

class NewPollBtn extends React.Component {
  render() {
    return (
      <div className='text-left'>
        <button className='new-poll-btn'>
          New Poll
        </button>
      </div>
    )
  }
}

export default NewPollBtn
