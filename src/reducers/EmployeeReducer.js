const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'employees_fetch_success':
      console.log('Action: ', action)
      return action.payload
    default:
      return state
  }
}