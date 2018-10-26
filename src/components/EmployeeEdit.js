import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from './common/Card'
import CardSection from './common/CardSection'
import Button from './common/Button'
import EmployeeForm from './EmployeeForm'
import { employeeUpdate, employeeSave } from '../actions'
import _ from 'lodash'

class EmployeeEdit extends Component {

  componentWillMount () {
    _.each(this.props.employee, (value, key) => { 
      this.props.employeeUpdate({ prop: key, value })
    })
  }

  onButtonPress () {
    const { name, phone, shift } = this.props
    const uid = this.props.employee.uid
    this.props.employeeSave({ name, phone, shift, uid })
  }

  render () {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button flex={1} onPress={this.onButtonPress.bind(this)}>
            Salvar Mudanças
          </Button>
        </CardSection>
      </Card>
    )
  }

}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}
export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit)