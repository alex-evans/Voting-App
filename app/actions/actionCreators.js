'use strict'

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

// save new poll
export function savePoll() {
  return function(dispatch, getState) {

  }


  return {
    type: 'SAVING_POLL'
  }
}
