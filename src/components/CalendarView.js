import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import { View, Text } from 'native-base'

class CalendarView extends Component {

  getworkouts () {
  	return ''
  }

  addSession (startTime, contact, todos) {
  	console.log('Open view to add session on that date')
    // see format.txt for format of startTime, contacts, todos
    this.props.userAddAppointmentSynchronousAction(startTime, contacts, todos)
  }

  render () {
    const strength = {key: 'strength', color: 'red', selectedDotColor: 'blue'}
    const interval = {key: 'interval', color: 'blue', selectedDotColor: 'blue'}
    const calestethic = {key: 'calestethic', color: 'green'}

    return (
      <View>
        <Calendar
          markingType={'multi-dot'}
          onDayLongPress={(day) => { console.log('selected day', day) }}
        />
        {/* this.props.appointments.map((appointment, index) => (
          <View key={index}>
            {appointment.description}
          </View>
        )) */}
      </View>
    )
  }
}

const mapStateToProps = ( { userReducerState } ) => {
  return { appointments: userReducerState.user.appointments }
}

export default connect( mapStateToProps, actions )( CalendarView )
