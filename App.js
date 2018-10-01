import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import CalendarView from './src/components/CalendarView.js'
import SessionForm from './src/components/SessionForm.js'
import AddExercise from './src/components/AddExercise.js'
import Home from './src/components/Home.js'

import  { Button, Container, Header, Icon, StyleProvider, Root} from 'native-base'
import getTheme from './native-base-theme/components'
import material from './native-base-theme/variables/material'

import { createStackNavigator } from 'react-navigation'

export default class App extends Component {
  render() {
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
    SessionForm: { screen: SessionForm },
    AddExercise: { screen: AddExercise}
  },
  {
    initialRouteName: 'SessionForm',
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