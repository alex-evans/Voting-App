function auth(state = [], action) {
  switch(action.type) {
    case 'AUTH_USER':
      return [...state,{
        auth: true
      }];
    default:
      return state
  }
  return state
}

export default auth
