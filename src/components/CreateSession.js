import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import  { Button, Text, View, Container, Content, DatePicker, Picker, Form, Card, Footer, FooterTab, ScrollView, Header, Right, Left, Row, Toast, Icon, Input, Item, Label, List, ListItem, H1, H2} from 'native-base'

import AddExercise from './AddExercise.js'
import ExerciseListEl from './ExerciseListEl.js'
import ContactList from './ContactList.js'
import ExerciseList from './ExerciseList.js'

const contacts = require('../assets/contacts.json')

class CreateSession extends Component {
  static navigationOptions = {
    title: 'CreateSession'
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      date: this.props.date | null,
      name: null,
      exercises: [],
      showToast: false, 
      contacts: null
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

      this.props.navigation.navigate('Home')
    }
  }

  validateSession() {
    if (this.state.name != null) {
      if (this.state.date == null) {
        this.showToast('You have to add a date')
        return false
      }
      else if (this.state.exercises == null) {
        this.showToast('You have to add minimum 1 exercise')
        return false
      } else {
        return true
      }

    } else {
      this.showToast('You have to give the exercise a name')
      return false
    }
  }

  showToast(text) {
    Toast.show({
      type: 'danger',
      position: 'top',
      duration: 3000,
      text: text,
      style: {
        margin: 8,
        padding: 16
      }
    })
  }

  render () {
    const { navigate } = this.props.navigation
    
    return (
      <Container>
        <Content padder scrollEnabled={true}>
          <Text> Title </Text>
          <Item rounded>
            <Input 
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
            />
          </Item>

          <Text> Date </Text>
          <Item rounded>
            <DatePicker
              androidMode={"default"}
              placeHolderText="Select date"
              onDateChange={(date) => this.setDate({date})}
              value={this.state.date}
            />
          </Item>

          <ExerciseList />

          <ContactList />

          <Button
            success
            large
            block
            onPress={this.saveSession}
          >
            <Text> SAVE SESSION </Text>
          </Button>

        </Content>

      </Container>
    )
  }
}

export default CreateSession

const styles = StyleSheet.create ({
  inline: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row'  
  }
  
})