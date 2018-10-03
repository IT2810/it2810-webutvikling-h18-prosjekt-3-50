import React, { Component } from 'react'

import { StyleSheet } from 'react-native'

import {Card, List, ListItem, Text, Left, Body, Right, Button, View, Row, H2, Picker, Icon } from 'native-base'

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

    this.remove = this.remove.bind(this)
    this.add = this.add.bind(this)
  }
  
  remove() {
    // TODO: delete from state
    Toast.show({
      type: 'warning',
      duration: 3000,
      text: 'Deleted exercise'
    })
  }

  add() {

  }

  render () {

    return (
      <View>
        <Row style={{marginTop: 16}}>
          <Left>
            <H2>Exercises</H2>
          </Left>
          <Right>
            <Button
              primary
              block
            >
              <Text> ADD EXERCISE </Text>
            </Button>
          </Right>
        </Row>

        <List
          dataArray={this.state.exercises}
          renderRow={(exercise) => 
            <ListItem>
              <Left
              >
                <Text> { exercise.name }  </Text>
              </Left>
              <Body
              >
                <Text> {exercise.reps} x {exercise.sets} </Text>
                
              </Body>
              <Right>
                <Button
                  danger
                  onPress={this.remove}
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