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

export function savePoll(name, question, options, id) {
  return {
    type: 'SAVE_POLL',
    name,
    question,
    options,
    id
  }
}

/* Thunk work (come back to when wiring up back end)
function savingPoll() {
  return {
    type: 'SAVE_POLL'
  }
}

// save new poll
export function savePoll() {
  return function(dispatch) {
    dispatch(savingPoll())
  }
}
*/
