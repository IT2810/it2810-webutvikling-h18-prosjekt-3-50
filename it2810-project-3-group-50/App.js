import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Calendar, CalendarList, Agenda } from 'react-native-calendars'

export default class App extends Component {
  render () {
    const strength = {key: 'strength', color: 'red', selectedDotColor: 'blue'}
    const interval = {key: 'intervall', color: 'blue', selectedDotColor: 'blue'}
    const calestethic = {key: 'calestethic', color: 'green'}

    return (
      <View style={styles.container}>
        <Calendar
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
