function auth(state = [], action) {
  console.log("auth reduce", action.type)
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
