import React, { Component } from 'react'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import { View, Text } from 'native-base'
import Moment from 'react-moment'

class CalendarView extends Component {

  constructor(props, context) {
    super(props, context)

    this.state = {
      selected: new Date().dateString,
      //selectedDate: {'2018-10-05': {selected: true, marked: true}},
      markedDates: {},
      sessionDates: {},
      date: new Date(),
      status: ''
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
  	return {
      '2018-10-02': {marked: true, dotColor: 'red'},
      '2018-10-06': {marked: true, dotColor: 'blue'},
      '2018-10-19': {marked: true}
    }
  }

  addSession (date) {
  	console.log('Open view to add session on that date')
  }

  selectDate (date) {
    // TODO: Update selected date in store
   /* const selectedDate = {[date.dateString]:{selected: true, marked: true}}
    this.setState({selectedDate: selectedDate})
    let newMarkedDates = this.state.markedDates 
    newMarkedDates[date.dateString] = {selected: true, marked: true}
    console.log(newMarkedDates)
    */


    /*if (this.state.sessionDates[date.dateString] != null) {
      this.setState({markedDates: {}})
      this.setState({status: 'the datestring exists'})
      let newDateConf = this.state.sessionDates[date.dateString]
      newDateConf.selected = true

      let selected = {'selected': true}
      let selectedDate = {[date.dateString]: {...selected, ...newDateConf}}
      //this.setState({markedDates: {...this.state.sessionDates, ...selectedDate}})
      this.setState({status: JSON.stringify(this.state.markedDates)})

    } else {
      this.setState({status: 'the datestring does not exists'})

      this.setState({markedDates: {...this.state.sessionDates, [date.dateString]: {selected: true}}})
      
    }*/
    this.setState({date: date})
    this.setState({selected: date.dateString})
  }

  render () {
    let selected = {[this.state.selected]: {selected: true}}
    return (
      <View>
        <Calendar
          markedDates={{...this.state.markedDates, ...selected}}
          onDayLongPress={(day) => { console.log('selected day', day) }}
          onDayPress={this.selectDate}
        />

      <Text>
        {this.state.selected}
      </Text>
      </View>
    )
  }
}

export default CalendarView
