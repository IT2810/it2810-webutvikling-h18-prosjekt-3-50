import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Moment from 'react-moment'

import  { Button, Text, View, Container, Content, DatePicker, Picker, Form, Card, Footer, FooterTab, ScrollView, Header, Right, Left, Row, Toast, Icon, Input, Item, Label, List, ListItem, H1, H2} from 'native-base'

import DateTimePicker from 'react-native-modal-datetime-picker'

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
      date: null,
      name: null,
      isDateTimePickerVisible: false,
      exercises: [],
      showToast: false, 
      contacts: null
    }

    this.saveSession = this.saveSession.bind(this)
    this.validateSession = this.validateSession.bind(this)

    this._hideDateTimePicker = this._hideDateTimePicker.bind(this)
    this._showDateTimePicker = this._showDateTimePicker.bind(this)
    this._setDateAndTime = this._setDateAndTime.bind(this)
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

  _showDateTimePicker() {
    this.setState({ isDateTimePickerVisible: true})
  }

  _hideDateTimePicker() {
    this.setState({ isDateTimePickerVisible: false})
  }

  _setDateAndTime(date) {
    this.setState({ date: date })
    this._hideDateTimePicker()
  }

  render () {
    const { navigate } = this.props.navigation
    var dateTimeText = ''

    if (this.state.date != null) {
      dateTimeText = 
            <Moment 
              element={Text}
              format="DD.MM HH:mm"
            > 
              {this.state.date}
            </Moment>
    } else {
      dateTimeText = <Text> Pick a date and time </Text>
    }

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

          <Text> Date and time </Text>
          <Item rounded>
            <TouchableOpacity onPress={this._showDateTimePicker}>
              {dateTimeText}
            </TouchableOpacity>
            <DateTimePicker
              mode='datetime'
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._setDateAndTime}
              onCancel={this._hideDateTimePicker}            />
            
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