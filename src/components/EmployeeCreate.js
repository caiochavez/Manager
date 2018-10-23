import React, { Component } from 'react'
import Card from './common/Card'
import CardSection from './common/CardSection'
import Input from './common/Input'
import Button from './common/Button'

class EmployeeCreate extends Component {
  render () {
    return (
      <Card>
        <CardSection>
          <Input label='Nome' placeholder='Caio' />
        </CardSection>
        <CardSection>
          <Input label='Telefone' placeholder='(99) 99999-9999' />
        </CardSection>
        <CardSection>
          <Button flex={1}>Salvar</Button>
        </CardSection>
      </Card>
    )
  }
}

export default EmployeeCreate