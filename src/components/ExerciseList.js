import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {Card, List, ListItem, Text, Left, Body, Right, Button, View, Row, Picker, Icon, Toast } from 'native-base'

export default ({exercises, navigation, removeExercise}) => (
  <View>
    <Row>
      <Left>
        <Text style={styles.inputTitle}>Exercises</Text>
      </Left>
      <Right>
        <Button
          primary
          block
          onPress={() => navigation.navigate('AddExercise')}
          testID={'addExerciseButton'}
        >
          <Text>ADD EXERCISE</Text>
        </Button>
      </Right>
    </Row>

    <Card style={styles.cardWithList}>
      {exercises.map((exercise, index) => (
        <ListItem key={index}>
          <Left
            onPress={() => {navigation.navigate('AddExercise')}}
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
              onPress={() => {removeExercise(exercise)}}
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
