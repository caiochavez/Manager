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
  const { currentUser } = firebase.auth()
  return dispatch => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`).on('value', snapshot => {
      dispatch({ type: 'employees_fetch_success', payload: snapshot.val() })
    })
  }
}

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth()
  return dispatch => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
    .set({ name, phone, shift })
    .then(() => {
      dispatch({ type: 'employee_save_success' })
      Actions.employeeList({ type: 'reset' })
    })
  }
}

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth()
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
    .remove()
    .then(() => {
      Actions.employeeList({ type: 'reset' })
    })
  }
}