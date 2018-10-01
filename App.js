import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { StyleSheet, Text, SafeAreaView } from 'react-native'

import CalendarView from './components/CalendarView.js'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <CalendarView />
        </SafeAreaView>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})
