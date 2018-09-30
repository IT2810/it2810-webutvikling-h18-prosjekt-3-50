import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import  { Button, Container, Content, DatePicker, Form, Header, Icon, Input, Item, Label, List, ListItem, H1, H2} from 'native-base'

import AddExercise from './AddExercise.js'
import ExerciseListEl from './ExerciseListEl.js'

class SessionForm extends Component {
  static navigationOptions = {
    title: 'SessionForm'
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      date: this.props.date | null,
      name: null,
      exercises: null
    }

    this.setDate = this.setDate.bind(this)
    this.saveSession = this.saveSession.bind(this)
    this.validateSession = this.validateSession.bind(this)
  }


  setDate(newDate) {
    this.setState({ date: newDate })
  }

  saveSession() {
    if (this.validateSession()) {
      // TODO save in state with redux
    }
  }

  validateSession() {
    if (this.state.name != null) {
      if (this.state.date != null) {
        this.showToast('You have to add a date')
        return false
      }
      else if (this.state.exercises != null) {
        this.showToast('You have to add minimum 1 exercise')
        return false
      }
      return true
    }
    this.showToast('You have to give the exercise a name')
    return false
  }

  showToast(text) {
    Toast.show({
      type: 'danger',
      duration: 3000,
      text: text
    })
  }

  render () {
    const { navigate } = this.props.navigation

    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label> Name </Label>
              <Input 
                onChangeText={(name) => this.setState({name})}
                value={this.state.name}
              />
            </Item>

            <Item>
              <Label> Date </Label>
              <DatePicker
                androidMode={"default"}
                placeHolderText="Select date"
                onDateChange={(date) => this.setDate({date})}
                value={this.state.date}
              />
            </Item>

            <List>
              <ListItem itemHeader first>
                <H2>Exercises</H2>
              </ListItem>
              <ExerciseListEl exercise="Squat" />
              <ExerciseListEl exercise="Benchpress" />
              <ExerciseListEl exercise="Pullup" />
              <ExerciseListEl exercise="Row" />
            </List>
          </Form>
          <Button
            primary
            large
            block
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
          
        </Content>
      </Container>
    )
  }
}

export default SessionForm

const styles = StyleSheet.create ({
  inline: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row'  
  }
  
})