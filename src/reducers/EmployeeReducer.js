const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'employees_fetch_success':
      return action.payload
    case 'employee_save_success':
      return INITIAL_STATE
    default:
      return state
  }
}