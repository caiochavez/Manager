import React, { Component } from 'react'
import { Picker } from 'react-native'
import Card from './common/Card'
import CardSection from './common/CardSection'
import Input from './common/Input'
import Button from './common/Button'
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions/index'

class EmployeeCreate extends Component {
  render () {
    const { name, phone, shift, employeeUpdate } = this.props
    return (
      <Card>
        <CardSection>
          <Input
          label='Nome'
          placeholder='Caio'
          value={name}
          onChangeText={value => employeeUpdate({prop: 'name', value})} />
        </CardSection>
        <CardSection>
          <Input
          label='Telefone'
          placeholder='(99) 99999-9999'
          value={phone} 
          onChangeText={value => employeeUpdate({ prop: 'phone', value })} />
        </CardSection>
        <CardSection>
          <Picker
          selectedValue={shift}
          onValueChange={value => employeeUpdate({ prop: 'shift', value })}
          style={{ flex: 1 }}>
            <Picker.Item label='Segunda' value='monday' />
            <Picker.Item label='Terça' value='tuesday' />
            <Picker.Item label='Quarta' value='wednesday' />
            <Picker.Item label='Quinta' value='thursday' />
            <Picker.Item label='Sexta' value='friday' />
            <Picker.Item label='Sábado' value='saturday' />
            <Picker.Item label='Domingo' value='sunday' />
          </Picker>
        </CardSection>
        <CardSection>
          <Button flex={1}>Salvar</Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}
export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate)