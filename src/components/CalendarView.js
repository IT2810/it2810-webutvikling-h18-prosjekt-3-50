import React, { Component } from 'react'

import { Calendar } from 'react-native-calendars'
import { StyleSheet } from 'react-native'
import { View } from 'native-base'

import Moment from 'react-moment'

import { connect } from 'react-redux'

import { getSessionDates } from '../assets/utils.js'

class CalendarView extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      sessions: this.props.sessions,
      markedDates: {},
      sessionDates: {},
      date: new Date()
    }

    console.log("Props")
    console.log(this.props.dispatch)

    this.selectDate = this.selectDate.bind(this)
    this.getSessions = this.getSessions.bind(this)
    this.addSession = this.addSession.bind(this)
  }

  componentDidMount () {
    let today = new Date().dateString
    this.setState({
      sessionDates: getSessionDates(this.state.sessions),
      markedDates: this.getSessions()
    })
  }

  getSessions () {
    let dates = getSessionDates(this.state.sessions)
    //let map = {}
    //map[dates] = {marked: true}
    console.log(dates)

    //return map  
    //TODO: get from store
    /*dates = {
     '2018-10-02': { marked: true },
     '2018-10-06': { marked: true },
     '2018-10-19': { marked: true }
    }*/
    console.log(dates)
    return dates
  }

  addSession (date) {
    this.props.navigation.navigate(
      'CreateSession',
      {
        date: date
      }
    )
  }

  selectDate (date) {
    // TODO: Update selected date in store

    this.setState({ date: date })
    let dateString = date.dateString

    if (this.state.sessionDates[dateString] != null) {
      this.setState({ markedDates: { ...this.state.sessionDates, [dateString]: { selected: true, marked: true } } })
    } else {
      this.setState({ markedDates: { ...this.state.sessionDates, [dateString]: { selected: true } } })
    }
  }

  render () {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.calendarContainer}>
        <Calendar
          testID={'calendar'}
          markedDates={{ ...this.state.markedDates }}
          onDayLongPress={(date) => { this.addSession(date) }}
          onDayPress={(date) => this.selectDate(date)}
        />
      </View>
    )
  }
}


function mapStateToProps(state){
  return {sessions: state.sessions}
}

export default connect(mapStateToProps)(CalendarView)

const styles = StyleSheet.create({
  calendarContainer: {
    marginTop: '5%',
    marginBottom: '5%'
  }
})
