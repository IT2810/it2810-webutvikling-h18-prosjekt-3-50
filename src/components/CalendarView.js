import React, { Component } from 'react'
import { Calendar } from 'react-native-calendars'
import { StyleSheet } from 'react-native'
import { View, Text } from 'native-base'
import Moment from 'react-moment'
import { connect } from 'react-redux'

import { getSessionDates } from '../assets/utils.js'
import { selectDate, createNewSession } from '../../actions/index'

export class CalendarView extends Component {
  constructor(props, context) {
    super(props, context)
    this.addSession = this.addSession.bind(this)
  }

  addSession(date) {
    this.props.selectDate(date.dateString)
    this.props.createNewSession()
    this.props.navigation.navigate('CreateSession', {title: 'Create Session'})
  }

  render () {
    return (
      <View style={styles.calendarContainer}>
        <Calendar
          testID={'calendar'}
          markedDates={{...this.props.sessionDates, ...this.props.markedDates}}
          onDayLongPress={date => this.addSession(date)}
          onDayPress={date => this.props.selectDate(date.dateString)}
        />
      </View>
    )
  }
}

function mapStateToProps (state) {
  const sessionDates = getSessionDates(state.sessions.sessions)
  const markedDates = {
    [state.sessions.selectedDate]: {
      selected: true,
      marked: (sessionDates[state.sessions.selectedDate] != null)
    }
  }

  return {
    sessions: state.sessions.sessions,
    sessionDates,
    markedDates
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
