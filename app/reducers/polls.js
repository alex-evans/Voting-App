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
      console.log("saving pollc", action)
      return [...state, {
        id: action.id,
        name: action.name,
        question: action.question,
        options: action.options
      }]
    default:
      return state
  }
}

export default polls
