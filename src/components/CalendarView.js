import React, { Component } from 'react'

import { Calendar } from 'react-native-calendars'
import { StyleSheet } from 'react-native'
import { View } from 'native-base'

import Moment from 'react-moment'

import { connect } from 'react-redux'

import { getSessionDates } from '../assets/utils.js'

import { selectDate } from '../../actions/index'

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
    return getSessionDates(this.state.sessions)
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

    this.props.selectDate(date)

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
  return {sessions: state.sessions.sessions}
}

const mapDispatchToProps = dispatch => ({
  selectDate: date => dispatch(selectDate(date))
})

export default connect(mapStateToProps, mapDispatchToProps)(CalendarView)

const styles = StyleSheet.create({
  calendarContainer: {
    marginTop: '5%',
    marginBottom: '5%'
  }
})
