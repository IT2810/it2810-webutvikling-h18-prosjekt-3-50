import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import Moment from 'react-moment'
import { Button, View, Text, Container, Content, Toast, Input, Item, Fab, Icon } from 'native-base'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { connect } from 'react-redux'

import { addSession, updateSession, removeExercise, removeContact } from '../../actions/index'

import ContactList from './ContactList.js'
import ExerciseList from './ExerciseList.js'

class CreateSession extends Component {
  static navigationOptions = ({ navigation }) => ({ title: `${navigation.state.params.title}` })

  constructor(props, context) {
    super(props, context)

    if (props.isNewSession) {
      // If navigation prop has params, set the propDate in params as propDate
      let date = props.selectedDate != null ? props.selectedDate : new Date()
      this.state = {
        date: date,
        time: null,
        name: null,
        isDatePickerVisible: false,
        isTimePickerVisible: false,
        exercises: [],
        showToast: false,
        contacts: null
      }
    } else {
      const { date, time, name, exercises, contacts } = props.session
      this.state = {
        date, time, name, exercises, contacts,
        isDatePickerVisible: false,
        isTimePickerVisible: false,
        showToast: false
      }
    }

    this.saveSession = this.saveSession.bind(this)
    this.validateSession = this.validateSession.bind(this)
    this.getSessionObject = this.getSessionObject.bind(this)

    this._hideDatePicker = this._hideDatePicker.bind(this)
    this._showDatePicker = this._showDatePicker.bind(this)
    this._hideTimePicker = this._hideTimePicker.bind(this)
    this._showTimePicker = this._showTimePicker.bind(this)
    this._setDate = this._setDate.bind(this)
    this._setTime = this._setTime.bind(this)
  }

  saveSession() {
    if (this.validateSession()) {
      if (this.props.isNewSession) {
        this.props.addSession(this.getSessionObject())
      } else {
        this.props.updateSession(this.getSessionObject())
      }
      this.props.navigation.goBack()
    }
  }

  validateSession() {
    if (this.state.name !== null && this.state.name !== '') {
      if (this.state.date == null) {
        this.showToast('You have to add a date')
        return false
      } else if (this.props.exercises.length < 1) {
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
      time: this.state.time,
      exercises: this.props.exercises,
      contacts: this.props.contacts
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

  _showDatePicker() {
    this.setState({ isDatePickerVisible: true})
  }

  _hideDatePicker() {
    this.setState({ isDatePickerVisible: false})
  }

  _showTimePicker() {
    this.setState({ isTimePickerVisible: true})
  }

  _hideTimePicker() {
    this.setState({ isTimePickerVisible: false})
  }

  _setDate(date) {
    console.log('_setDate', date)
    this.setState({
      date: date,
    })

    this._hideDatePicker()
  }

  _setTime(time) {
    console.log('_setTime', time)
    this.setState({
      time: time
    })

    this._hideTimePicker()
  }

  render () {
    var dateText
    var timeText

    if (this.state.date != null) {
      dateText =
            <Moment
              element={Text}
              format="DD MMM"
              style={styles.dateAndTimeText}
            >
              {this.state.date}
            </Moment>
    } else {
      // TODO: never happens since date is set to today
      dateText = <Text style={styles.dateAndTimeText}> Pick a date </Text>
    }

    if (this.state.time != null) {
      timeText =
            <Moment
              element={Text}
              format="HH:MM"
              style={styles.dateAndTimeText}
            >
              {this.state.time}
            </Moment>
    } else {
      timeText= <Text style={styles.dateAndTimeText}> Pick a time </Text>
    }

    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <Container>
          <Content padder scrollEnabled={true}>
            <Text style={styles.inputTitle}>Title</Text>
            <Item rounded>
              <Input
                style={styles.titleText}
                onChangeText={(name) => this.setState({name})}
                value={this.state.name}
                placeholder="Enter title here"
              />
            </Item>

            <Text style={styles.inputTitle}> Date </Text>
            <Item rounded>
              <TouchableOpacity onPress={this._showDatePicker}>
                {dateText}
              </TouchableOpacity>
              <DateTimePicker
                mode='date'
                isVisible={this.state.isDatePickerVisible}
                value={this.state.date}
                onConfirm={this._setDate}
                onCancel={this._hideDatePicker}
                testID={"datePicker"}
              />
            </Item>

            <Text style={styles.inputTitle}> Time </Text>
            <Item rounded>
              <TouchableOpacity onPress={this._showTimePicker}>
                {timeText}
              </TouchableOpacity>
              <DateTimePicker
                mode='time'
                isVisible={this.state.isTimePickerVisible}
                value={this.state.time}
                onConfirm={this._setTime}
                onCancel={this._hideTimePicker}
                testID={"timePicker"}
              />
            </Item>

            <View style={styles.exerciseListContainer}>
              <ExerciseList
                exercises={this.props.exercises}
                navigation={this.props.navigation}
                removeExercise={this.props.removeExercise}
              />
            </View>
            <View style={styles.contactListContainer}>
              <ContactList
                contacts={this.props.contacts}
                navigation={this.props.navigation}
                removeContact={this.props.removeContact}
              />
            </View>

          </Content>

          <Fab
            onPress={this.saveSession}
            testID={'saveSessionButton'}
            style={{ backgroundColor: '#199E59' }}
            position="bottomRight"
          >
            <Icon ios="ios-checkmark" android="md-checkmark" style={{fontSize: 50, lineHeight: 50}} />

          </Fab>
        </Container>
      </KeyboardAvoidingView>
    )
  }
}

function mapStateToProps(state) {
  const isNewSession = state.sessions.currentSessionId == -1
  const session = isNewSession ? state.sessions.temporarySession : state.sessions.sessions.find(session => session.id == state.sessions.currentSessionId)
  return {
    session,
    isNewSession,
    selectedDate: state.sessions.selectedDate,
    exercises: session.exercises,
    contacts: session.contacts
  }
}

const mapDispatchToProps = dispatch => ({
  addSession: session => dispatch(addSession(session)),
  updateSession: session => dispatch(updateSession(session)),
  removeExercise: exercise => dispatch(removeExercise(exercise)),
  removeContact: contact => dispatch(removeContact(contact))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateSession)

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
    marginLeft: '3%',
    lineHeight: 45,
    fontSize: 27,
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
