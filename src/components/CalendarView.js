import React, { Component } from 'react'

import { Calendar } from 'react-native-calendars'
import { StyleSheet } from 'react-native'
import { View } from 'native-base'

import Moment from 'react-moment'

class CalendarView extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      markedDates: {},
      sessionDates: {},
      date: new Date()
    }

    this.selectDate = this.selectDate.bind(this)
    this.getSessions = this.getSessions.bind(this)
    this.addSession = this.addSession.bind(this)

    store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched),
      // we will update local component state and force component to rerender
      // with new data.

      this.setState({
        sessionDates: this.getSessions()
      })
    })
  }

  componentDidMount () {
    let today = new Date().dateString
    this.setState({
      sessionDates: this.getSessions(),
      markedDates: this.getSessions()
    })
  }

  getSessions () {
    let sessions = store.getState().sessions
    let dates = sessions.map(session => session.date)
    console.log('Dates')
    console.log(dates)
    return {
      dates: { marked: true }
    }
    // TODO: get from store
//    return {
//      '2018-10-02': { marked: true },
//      '2018-10-06': { marked: true },
//      '2018-10-19': { marked: true }
 //   }
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

export default connect()(CalendarView)

const styles = StyleSheet.create({
  calendarContainer: {
    marginTop: '5%',
    marginBottom: '5%'
  }
})
