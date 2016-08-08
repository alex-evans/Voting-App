'use strict'

function polls(state = [], action) {
  switch(action.type) {
    case 'CREATE_POLL':
      return [...state, {
        name: action.name,
        question: action.question,
        options: action.options
      }]
    case 'SAVE_POLL':
      console.log("In the save poll")
      return state
    default:
      return state
  }
}

export default polls
