import React, { Component } from 'react'
import { Calendar } from 'react-native-calendars'
import { StyleSheet } from 'react-native'
import { View, Text } from 'native-base'
import Moment from 'react-moment'
import { connect } from 'react-redux'

import { getSessionDates } from '../assets/utils.js'
import { selectDate, createNewSession } from '../../actions/index'

export class CalendarView extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      sessions: this.props.sessions,
      markedDates: {},
      sessionDates: {},
      date: new Date()
    }

    this.selectDate = this.selectDate.bind(this)
    this.addSession = this.addSession.bind(this)
  }

  addSession (date) {
    this.props.selectDate(date)
    this.props.createNewSession()
    this.props.navigation.navigate('CreateSession', {title: 'Create Session'})
  }

  selectDate (date) {
    this.props.selectDate(date)

    this.setState({ date: date })
    let dateString = date.dateString

    if (this.props.sessionDates[dateString] != null) {
      this.setState({ markedDates: { [dateString]: { selected: true, marked: true } } })
    } else {
      this.setState({ markedDates: { [dateString]: { selected: true } } })
    }
  }

  render () {
    //var markedDates = {...getSessionDates(this.props.sessions), ...this.state.markedDates}

    return (
      <View style={styles.calendarContainer}>
        <Calendar
          testID={'calendar'}
          markedDates={{...this.props.sessionDates, ...this.state.markedDates}}
          onDayLongPress={(date) => { this.addSession(date) }}
          onDayPress={(date) => this.selectDate(date)}
        />
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    sessions: state.sessions.sessions,
    sessionDates: getSessionDates(state.sessions.sessions)
  }
}

const mapDispatchToProps = dispatch => ({
  selectDate: date => dispatch(selectDate(date)),
  createNewSession: () => dispatch(createNewSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(CalendarView)

const styles = StyleSheet.create({
  calendarContainer: {
    marginTop: '5%',
    marginBottom: '5%'
  }
})
