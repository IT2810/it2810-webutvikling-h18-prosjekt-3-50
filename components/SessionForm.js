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
    }

    this.setDate = this.setDate.bind(this)
    this.saveSession = this.saveSession.bind(this)
  }


  setDate(newDate) {
    this.setState({ date: newDate })
  }

  saveSession() {
    // TODO save in state with redux
  }

  render () {
    const { navigate } = this.props.navigation

    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label> Name </Label>
              <Input />
            </Item>

            <Item>
              <Label> Date </Label>
              <DatePicker
                androidMode={"default"}
                placeHolderText="Select date"
                onDateChange={this.setDate}
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