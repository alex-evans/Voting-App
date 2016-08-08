'use strict'

import React from 'react'
import css from '../../public/css/main.scss'
import { browserHistory } from 'react-router'

class CreatePoll extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    const name = this.refs.name.value
    const question = this.refs.question.value
    const options = this.refs.options.value.split(",")
    if(name && question && options) {
      // this.props.createPoll(name, question, options)
      this.props.savePoll()
      browserHistory.push('/')
    }
  }
  render() {
    return (
      <div className="create-poll">
        <form ref="createPollForm" className="create-poll-form" onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input type="text" ref="name" required={true} /><br/>
          <label>Question: </label>
          <input type="text" ref="question" required={true} /><br/>
          <label>Options:</label><i> (Seperate Voting Options with a Comma)</i><br/>
          <textarea rows="4" cols="50" ref="options" required={true} >
          </textarea><br/>
          <input type="submit" value="Create" />
        </form>
      </div>
    )
  }
}

export default CreatePoll
