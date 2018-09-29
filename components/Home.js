import React, { Component } from 'react'

import SessionForm from './components/SessionForm.js'

class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View>

        <SessionForm />
      </View>

    )
  }
}