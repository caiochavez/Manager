import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import { employeesFetch } from '../actions'
import _ from 'lodash'
import ListItem from './ListItem'

class EmployeeList extends Component {

  componentWillMount () {
    this.props.employeesFetch()
    this.createDataSource(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.createDataSource(nextProps)
  }

  createDataSource ({ employees }) {
    this.dataSource = employees
  }

  renderRow ({ item }) {
    return <ListItem employee={item} />
  }

  render () {
    return (
      <FlatList
      data={this.dataSource} 
      renderItem={this.renderRow} />
    )
  }

}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }
  })
  return { employees }
}
export default connect(mapStateToProps, { employeesFetch })(EmployeeList)

