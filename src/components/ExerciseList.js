import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import {Card, List, ListItem, Text, Left, Body, Right, Button, View, Row, Picker, Icon, Toast } from 'native-base'


export default class ExerciseList extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      exercises: [
        { name: 'Squat', sets: '4', reps: '12' },
        { name: 'Benchpress', sets: '4', reps: '12' },
        { name: 'Pullup', sets: '4', reps: '12' },
        { name: 'Row', sets: '4', reps: '12' }
      ]
    }

    this._add = this._add.bind(this)
  }


  _remove (value) {
    // TODO: delete in redux
    this.setState(prevState => ({
      exercises: prevState.exercises.filter(exercise => exercise.name !== value.name)
    }))

  }

  _add () {
    this.props.navigation.navigate('AddExercise')
  }

  render () {
    return (
      <View>
        <Row>
          <Left>
            <Text style={styles.inputTitle}>Exercises</Text>
          </Left>
          <Right>
            <Button
              primary
              block
              onPress={this._add}
              testID={'addExerciseButton'}
            >
              <Text>ADD EXERCISE</Text>
            </Button>
          </Right>
        </Row>


        <Card style={styles.cardWithList}>
          {this.state.exercises.map((exercise, index) => (
            <ListItem key={index}>
              <Left
                onPress={this._add}
              >
                <Text> { exercise.name }  </Text>
              </Left>
              <Body>
                <Text> {exercise.reps} x {exercise.sets} </Text>
              </Body>
              <Right>
                <Button
                  danger
                  style={{minWidth: '140%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                  onPress={this._remove.bind(this, exercise)}
                >
                  <Icon active name="trash" />
                </Button>
              </Right>
            </ListItem>
          ))}
        </Card>

      </View>
    )
  }
}
const styles = StyleSheet.create ({
  cardWithList: {
    marginTop: '5%',
    marginBottom: '5%'
  },
  inputTitle: {
    lineHeight: 45,
    fontSize: 27,
    marginLeft: '8%',
    fontWeight: '600'
  }
})
