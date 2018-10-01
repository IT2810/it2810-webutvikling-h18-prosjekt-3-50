import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import CalendarView from './components/CalendarView.js'
import PedometerView from './components/PedometerView.js'

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <CalendarView />
        <PedometerView />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})
