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
