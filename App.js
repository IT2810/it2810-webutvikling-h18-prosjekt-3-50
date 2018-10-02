import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { StyleSheet, SafeAreaView } from 'react-native'
import { StyleSheet } from 'react-native'
import Expo from 'expo'

import CalendarView from './src/components/CalendarView.js'
import CreateSession from './src/components/CreateSession.js'
import AddExercise from './src/components/AddExercise.js'
import Home from './src/components/Home.js'

import { Button, Container, Header, Icon, StyleProvider, Root} from 'native-base'
import getTheme from './native-base-theme/components'
import material from './native-base-theme/variables/material'

import { createStackNavigator } from 'react-navigation'

export default class App extends Component {
  render () {
    return (
      <Root>
        <StyleProvider style={getTheme(material)}>
          <RootStack />
        </StyleProvider>
      </Root>
    )
  }
}

const RootStack = createStackNavigator(
  {
    Home: { screen: Home },
    CreateSession: { screen: CreateSession },
    AddExercise: { screen: AddExercise}
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#5BC1F2'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)

Expo.registerRootComponent(App)
