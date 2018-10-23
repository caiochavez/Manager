import React, { Component } from 'react'
import Card from './common/Card'
import CardSection from './common/CardSection'
import Input from './common/Input'
import Button from './common/Button'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions/index'

class LoginForm extends Component {

  onEmailChange (text) {
    this.props.emailChanged(text)
  }

  onPasswordChange (text) {
    this.props.passwordChanged(text)
  }

  onButtonPress () {
    const { email, password } = this.props
    this.props.loginUser({ email, password })
  }
  
  render () {
    return (
      <Card>
        <CardSection>
          <Input
          label='Email'
          placeholder='email@gmail.com'
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}/>
        </CardSection>
        <CardSection>
          <Input
          secureTextEntry
          label='Senha'
          placeholder='senha'
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}/>
        </CardSection>
        <CardSection>
          <Button flex={1} onPress={this.onButtonPress.bind(this)}>Login</Button>
        </CardSection>
      </Card>
    )
  }

}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
}
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm)