import React from 'react'
import { Link } from 'react-router'
import css from '../../public/css/main.scss'

class NewPollBtn extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    if(this.props.auth) {
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
    return (
      <div className='empty-new-poll'>
      </div>
    )
  }
}

export default NewPollBtn
