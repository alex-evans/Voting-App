'use strict'

import $ from 'jquery'

// authorize user
export function authorizeUser() {
  return {
    type: 'AUTH_USER'
  }
}

// create new poll
export function createPoll(name, question, options) {
  return {
    type: 'CREATE_POLL',
    name,
    question,
    options
  }
}

function savingPoll() {
  return {
    type: 'SAVE_POLL'
  }
}

export function savePoll() {
  return function(dispatch) {
    $.ajax({
      type: 'POST',
      url: '/api/save/alex',
      data: {name: 'alex', question: 'hi'},
      success: function() {
        dispatch(savingPoll())
      }
    })
  }
}
