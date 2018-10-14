import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import {Card, List, ListItem, Text, Left, Body, Right, Button, View, Row, Picker, Icon, Toast } from 'native-base'

import { removeExercise } from '../../actions/index'

export class ExerciseList extends Component {
  constructor (props, context) {
    super(props, context)
    
    this._add = this._add.bind(this)
    this._remove = this._remove.bind(this)
  }

  _add () {
    this.props.navigation.navigate('AddExercise')
  }

  _remove (exercise) {
    this.props.removeExercise(exercise)
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
          {this.props.exercises.map((exercise, index) => (
            <ListItem key={index}>
              <Left
                onPress={() => {this.props.navigation.navigate('AddExercise')}}
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
                  onPress={() => {this._remove(exercise)}}
                  testID={'removeExerciseButton'}
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

function mapStateToProps(state){
  if (state.sessions.activeSession) {
    return {
      exercises: state.sessions.activeSession.exercises
    }  
  } else {
    return {
      exercises: []
    }
  }
}

const mapDispatchToProps = dispatch => ({
  removeExercise: exercise => dispatch(removeExercise(exercise))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseList)

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
