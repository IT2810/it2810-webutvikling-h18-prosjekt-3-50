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
    //const { navigate } = this.props.navigation

    return (
      <Container>
        <Header>
          <Text>
            Plan session
          </Text>
        </Header>

        <AddExercise />

        <Button
          primary 
          onPress={this._onAddExercise}
        >
          <Text> ADD EXERCISE </Text>
        </Button>

        <Button
          success
        >

          <Text> SAVE </Text>
        </Button>
      </Container>
    )
  }
}

export default SessionForm

const styles = StyleSheet.create ({
  
})