'use strict'

// import fetch from 'whatwg-fetch'

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
/*
export function savePoll(name, question, options, id) {
  return {
    type: 'SAVE_POLL',
    name,
    question,
    options,
    id
  }
}
*/
// Thunk work (come back to when wiring up back end)
function savingPoll() {
  return {
    type: 'SAVE_POLL'
  }
}

// save new poll
export function savePoll() {
  return function(dispatch) {
    // ajaxFunctions.ajaxRequest('POST', appUrl + '/api/save/:name', savingPoll)
    let xmlhttp = new XMLHttpRequest()

    xmlhttp.onreadystatechange = function() {
      if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        dispatch(savingPoll())
      }
    }

    xmlhttp.open('POST', '/api/save/alex', true)
    xmlhttp.send()
  }
}
