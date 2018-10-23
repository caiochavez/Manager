import React, { Component } from 'react'
import { Picker, Text } from 'react-native'
import Card from './common/Card'
import CardSection from './common/CardSection'
import Input from './common/Input'
import Button from './common/Button'
import { connect } from 'react-redux'
import { employeeUpdate, employeeCreate } from '../actions/index'

class EmployeeCreate extends Component {

  onButtonPress () {
    const { name, phone, shift, employeeCreate } = this.props
    employeeCreate({ name, phone, shift: shift || 'monday' })
  }

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
          <Text style={{ fontSize: 18, paddingLeft: 20, flex: 2, alignSelf: 'center' }}>Mudar</Text>
          <Picker
          selectedValue={shift}
          onValueChange={value => employeeUpdate({ prop: 'shift', value })}
          style={{ flex: 2 }}>
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
          <Button flex={1} onPress={this.onButtonPress.bind(this)}>Salvar</Button>
        </CardSection>
      </Card>
    )
  }

}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}
export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate)