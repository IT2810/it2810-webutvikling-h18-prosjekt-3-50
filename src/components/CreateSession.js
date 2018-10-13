import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Moment from 'react-moment'
import  { Button, View, Text, Container, Content, Toast, Input, Item, Fab, Icon } from 'native-base'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { connect } from 'react-redux'

import { addSession } from '../../actions/index'

import ContactList from './ContactList.js'
import ExerciseList from './ExerciseList.js'

const contacts = require('../assets/contacts.json')

class CreateSession extends Component {
  static navigationOptions = {
    title: 'CreateSession'
  }

  constructor(props, context) {
    super(props, context)
    // If navigation prop has params, set the propDate in params as propDate
    let propDate = this.props.navigation.state.params != null ? this.props.navigation.state.params.date : null
    this.state = {
      // If propDate isn't null, set it as date. If it is, set today as date
      date: propDate != null ? propDate : new Date(),
      name: null,
      isDateTimePickerVisible: false,
      exercises: [],
      showToast: false,
      contacts: null
    }

    this.saveSession = this.saveSession.bind(this)
    this.validateSession = this.validateSession.bind(this)
    this.getSessionObject = this.getSessionObject.bind(this)

    this._hideDateTimePicker = this._hideDateTimePicker.bind(this)
    this._showDateTimePicker = this._showDateTimePicker.bind(this)
    this._setDateAndTime = this._setDateAndTime.bind(this)
  }

  saveSession() {
    if (this.validateSession()) {
      // TODO save in state with redux
      console.log(this.props)
      this.props.addSession(this.getSessionObject())

      this.props.navigation.navigate('Home')
    }
  }

  validateSession() {
    if (this.state.name != null) {
      if (this.state.date == null) {
        this.showToast('You have to add a date')
        return false
      } else if (this.state.exercises == null) {
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

  getSessionObject() {
    return {
      name: this.state.name,
      date: this.state.date,
      exercises: this.state.exercises,
      contacts: this.state.contacts
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
        marginTop: 20,
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
              style={styles.dateAndTimeText}
            >
              {this.state.date}
            </Moment>
    } else {
      dateTimeText = <Text style={styles.dateAndTimeText}> Pick a date and time </Text>
    }

    return (
      <Container>
        <Content padder scrollEnabled={true}>
          <Text style={styles.inputTitle}>Title</Text>
          <Item rounded>
            <Input
              style={styles.titleText}
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
            />
          </Item>

          <Text style={styles.inputTitle}> Date and time </Text>
          <Item rounded>
            <TouchableOpacity onPress={this._showDateTimePicker}>
              {dateTimeText}
            </TouchableOpacity>
            <DateTimePicker
              mode='datetime'
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._setDateAndTime}
              onCancel={this._hideDateTimePicker}
              testID={"dateTimePicker"}
          />

          </Item>

          <View style={styles.exerciseListContainer}>
            <ExerciseList navigation={this.props.navigation} />
          </View>
          <View style={styles.contactListContainer}>
            <ContactList />
          </View>
        </Content>

        {/*<View style={styles.buttonContainer}>
          <Button
            success
            large
            block
            onPress={this.saveSession}
            testID={'saveSessionButton'}
          >
            <Text> SAVE SESSION </Text>
          </Button>
        </View>*/}
        <Fab
          onPress={this.saveSession}
          testID={'saveSessionButton'}
          //containerStyle={{}}
          style={{ backgroundColor: '#199E59' }}
          position="bottomRight"
        >
          <Icon ios="ios-checkmark" android="md-checkmark" style={{fontSize: 50, lineHeight: 50}} />

        </Fab>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addSession: session => dispatch(addSession(session))
})

export default connect(null, mapDispatchToProps)(CreateSession)

const styles = StyleSheet.create ({
  exerciseListContainer: {
    marginTop: '10%'
  },
  contactListContainer: {
    marginTop: '10%',
    marginBottom: '30%' // room for save session button
  },
  inputTitle: {
    marginTop: '5%',
    marginBottom: '2%',
    lineHeight: 45,
    fontSize: 30,
    fontWeight: '600'
  },
  titleText: {
    paddingLeft: '7%',
    paddingRight: '7%',
    fontSize: 22
  },
  dateAndTimeText: {
    paddingLeft: '7%',
    paddingRight: '7%',
    fontSize: 22,
    lineHeight: 42
  },
  buttonContainer: {
    position: 'absolute',
    bottom: '0%',
    left: '10%',
    width: '80%',
    marginBottom: '7%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 4
  }
})
