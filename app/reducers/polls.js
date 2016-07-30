function createPoll(state = [], action) {
  switch(action.type) {
    case 'CREATE_POLL':
      return [...state,{
        name: action.name,
        question: action.question,
        options: action.options
      }]
    default:
      return state
  }
  return state
}

export default createPoll
