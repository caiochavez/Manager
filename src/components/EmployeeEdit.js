import React, { Component } from 'react'
import { connect } from 'react-redux'
import Communications from 'react-native-communications'
import Card from './common/Card'
import CardSection from './common/CardSection'
import Button from './common/Button'
import Confirm from './common/Confirm'
import EmployeeForm from './EmployeeForm'
import { employeeUpdate, employeeSave, employeeDelete } from '../actions'
import _ from 'lodash'

class EmployeeEdit extends Component {

  state = { showModal: false }

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

  onTextPress () {
    const { phone, shift } = this.props
    Communications.text(phone, `Seu próximo turno é ${this.tranlateShift(shift)}`)
  }

  tranlateShift (shift) {
    switch (shift) {
      case 'monday':
        return 'segunda'
      case 'tuesday':
        return 'terça'
      case 'wednesday':
        return 'quarta'
      case 'thursday':
        return 'quinta'
      case 'friday':
        return 'sexta'
      case 'saturday':
        return 'sábado'
      case 'sunday':
        return 'domingo'
      default:
        return ''
    }
  }

  onAccept () {
    const uid = this.props.employee.uid
    this.props.employeeDelete({ uid })
  }

  onDecline () {
    this.setState({ showModal: false })
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
        <CardSection>
          <Button flex={1} onPress={this.onTextPress.bind(this)}>
            Agenda de Texto
          </Button>
        </CardSection>
        <CardSection>
          <Button flex={1} onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Excluir empregado
          </Button>
        </CardSection>
        <Confirm
        visible={this.state.showModal}
        onAccept={this.onAccept.bind(this)}
        onDecline={this.onDecline.bind(this)}>
          Tem certeza que deseja excluir este ?
        </Confirm>
      </Card>
    )
  }

}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}
export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit)