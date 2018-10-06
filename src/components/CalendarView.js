import React, { Component } from 'react'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import { View, Text } from 'native-base'
import Moment from 'react-moment'

class CalendarView extends Component {

  constructor(props, context) {
    super(props, context)

    this.state = {
      markedDates: {},
      sessionDates: {},
      date: new Date(),
    }

    this.selectDate = this.selectDate.bind(this)
    this.getSessions = this.getSessions.bind(this)
    this.addSession = this.addSession.bind(this)
  }

  componentDidMount() {
    let today = new Date().dateString
    this.setState({
      sessionDates: this.getSessions(),
      markedDates: this.getSessions()

    })
  }

  getSessions () {
    // TODO: get from store
  	return {
      '2018-10-02': {marked: true},
      '2018-10-06': {marked: true},
      '2018-10-19': {marked: true}
    }
  }

  addSession (date) {
  	console.log('Open view to add session on that date')
  }

  selectDate (date) {
    // TODO: Update selected date in store
   
    this.setState({date: date})

    if (this.state.sessionDates[date.dateString] != null) {
      this.setState({markedDates: {...this.state.sessionDates, [date.dateString]: {selected: true, marked: true}}}) 
    } else {
      
      this.setState({markedDates: {...this.state.sessionDates, [date.dateString]: {selected: true}}}) 
    }
  }

  render () {
    return (
      <View>
        <Calendar
          markedDates={{...this.state.markedDates}}
          onDayLongPress={(day) => { console.log('selected day', day) }}
          onDayLongPress={(day) => { 
            navigate('CreateSession', {
              date: day
            })
          }}

        />
      </View>
    )
  }
}

export default CalendarView
