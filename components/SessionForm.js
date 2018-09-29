import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import  { Button, Container, Header, Icon} from 'native-base'

import AddExercise from './AddExercise.js'

class SessionForm extends Component {
  static navigationOptions = {
    title: 'SessionForm'
  }

  constructor(props, context) {
    super(props, context)

    this._onAddExercise = this._onAddExercise.bind(this)
  }

  _onAddExercise() {
    navigate('AddExercise')
  }

  render () {
    const { navigate } = this.props.navigation

    return (
      <Container>
        <Header>
          <Text>
            Plan session
          </Text>
        </Header>

        <Button
          primary 
          onPress={() => navigate('AddExercise')}
        >
          <Text> ADD EXERCISE </Text>
        </Button>

        <Button
          success
          large
          block
          onPress={() => navigate('Home')}
        >

          <Text> SAVE SESSION </Text>
        </Button>
      </Container>
    )
  }
}

export default SessionForm

const styles = StyleSheet.create ({
  
})