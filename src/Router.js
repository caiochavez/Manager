import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='auth'>
          <Scene key='login' component={LoginForm} title='Login' />
        </Scene>
        <Scene key='main'>
          <Scene
          rightTitle='Adicionar'
          onRight={() => Actions.employeeCreate()}
          key='employeeList'
          component={EmployeeList}
          title='Funcionários'
          initial />
          <Scene key='employeeCreate' component={EmployeeCreate} title='Criar Funcionário' />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent