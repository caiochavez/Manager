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
    }, 2000)
  }
}


export const employeesFetch = () => {
  return dispatch => {
    const { currentUser } = firebase.auth()
    const userRef = firebase.database().ref(`/users/${currentUser.uid}/employees`)
    userRef.on('value', snapshot => {
      dispatch({ type: 'employees_fetch_success', payload: snapshot.val() })
    })
  }
}