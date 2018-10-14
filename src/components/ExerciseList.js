import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import {Card, List, ListItem, Text, Left, Body, Right, Button, View, Row, Picker, Icon, Toast } from 'native-base'

import { removeExercise } from '../../actions/index'

export class ExerciseList extends Component {
  constructor (props, context) {
    super(props, context)
    
    this._add = this._add.bind(this)
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
          {this.props.exercises.map((exercise, index) => (
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
                  onPress={() => {this.props.removeExercise(exercise)}}
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
  if (state.activeSession != null) {
    return {
      exercises: state.activeSession.exercises
    }  
  } else {
    return {
      exercises: []
    }
  }
}

const mapDispatchToProps = dispatch => ({
  removeExerice: exercise => dispatch(removeExercise(exercise))
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
