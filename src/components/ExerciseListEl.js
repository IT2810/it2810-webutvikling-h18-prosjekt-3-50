import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import { Button, View, Text, ListItem, Left, Right, Body, Toast } from 'native-base'

class ExerciseListEl extends Component {

  constructor(props, context) {
    super(props, context)

    this.delete = this.delete.bind(this)
  }

  delete() {
    // TODO: delete from state
    Toast.show({
      type: 'warning',
      duration: 3000,
      text: 'Deleted exercise'
    })
  }

  render () {
    return (
      <ListItem>
        <Left
          onPress={() => navigate('AddExercise')}
        >
          <Text> { this.props.exercise }  </Text>
        </Left>
        <Body
          onPress={() => navigate('AddExercise')}
        >
          <Text> 12 x 4 </Text>
          
        </Body>
        <Right>
          <Button
            error
            onPress={this.delete}
          >
            <Text> X </Text>
          </Button>
        </Right>
      </ListItem>
    )
  }
}

export default ExerciseListEl