import React, { Component } from 'react'

import { StyleSheet } from 'react-native'

import {Card, List, ListItem, Text, Left, Body, Right, Button, View, Row, H2, Picker, Icon, Toast } from 'native-base'

export default class ExerciseList extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      exercises: [
        {name: 'Squat', sets: '4', reps: '12'},
        {name: 'Benchpress', sets: '4', reps: '12'},
        {name: 'Pullup', sets: '4', reps: '12'},
        {name: 'Row', sets: '4', reps: '12'}
      ]
    }

    this.showToast = this.showToast.bind(this)
    this._add = this._add.bind(this)
  }
  
  _remove(value) {
    // TODO: delete in redux
    this.setState(prevState => ({
      exercises: prevState.exercises.filter(exercise => exercise.name !== value.name)
    }))

    this.showToast()
  }

  showToast() {
    Toast.show({
      type: 'warning',
      duration: 3000,
      text: 'Deleted exercise'
    })
  }

  _add() {
    this.props.navigation.navigate('AddExercise')
  }

  render () {

    return (
      <View>
        <Row>
          <Left>
            <H2>Exercises</H2>
          </Left>
          <Right>
            <Button
              primary
              block
              onPress={this._add}
              testID={'addExerciseButton'}
            >
              <Text> ADD EXERCISE </Text>
            </Button>
          </Right>
        </Row>

        <List
          dataArray={this.state.exercises}
          renderRow={(exercise) => 
            <ListItem>
              <Left>
                <Text> { exercise.name }  </Text>
              </Left>
              <Body>
                <Text> {exercise.reps} x {exercise.sets} </Text>
              </Body>
              <Right>
                <Button
                  danger
                  onPress={this._remove.bind(this, exercise)}
                >
                  <Icon active name="trash" />
                </Button>
              </Right>
            </ListItem>
          }
        >
        </List>
      </View>
    ) 
  }
}