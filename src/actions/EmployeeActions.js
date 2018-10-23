import firebase from 'react-native-firebase'
import { Actions } from 'react-native-router-flux'

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: 'employee_update',
    payload: { prop, value }
  }
}

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth()
  const userRef = firebase.database().ref(`/users/${currentUser.uid}/employees`)
  return dispatch => {
    userRef.push({ name, phone, shift })
    setTimeout(() => {
      dispatch({ type: 'employee_create' })
      Actions.pop({ type: 'reset' })
    })
  }
}