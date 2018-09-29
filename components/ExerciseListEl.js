import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Button, ListItem, Left, Right, Body } from 'native-base'

class ExerciseListEl extends Component {

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
            transparent
            onPress={() => {}}
          >
            <Text> Delete </Text>
          </Button>
        </Right>
      </ListItem>
    )
  }
}

export default ExerciseListEl