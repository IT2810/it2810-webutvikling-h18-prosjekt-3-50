import React, { Component } from 'react'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import { View, Text } from 'native-base'

class CalendarView extends Component {
  getworkouts () {
  	return ''
  }

  addSession (date) {
  	console.log('Open view to add session on that date')
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
      </View>
    )
  }
}

export default CalendarView
