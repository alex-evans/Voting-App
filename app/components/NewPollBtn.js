import React from 'react'
import { Link } from 'react-router'
import css from '../../public/css/main.scss'

class NewPollBtn extends React.Component {
  render() {
    return (
      <div>
        <Link to="/create">
          <button className='new-poll-btn'>
            New Poll
          </button>
        </Link>
      </div>
    )
  }
}

export default NewPollBtn
