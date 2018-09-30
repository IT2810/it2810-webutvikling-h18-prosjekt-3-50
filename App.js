import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import CalendarView from './src/components/CalendarView.js'
import SessionForm from './src/components/SessionForm.js'
import AddExercise from './src/components/AddExercise.js'

import  { Button, Container, Header, Icon, StyleProvider, Root} from 'native-base'
import getTheme from './native-base-theme/components'
import material from './native-base-theme/variables/material'

import { createStackNavigator } from 'react-navigation'

class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View>
        <CalendarView />
        <Button 
          primary
          large
          block
          onPress={() => this.props.navigation.navigate('SessionForm')}
        >
          
          <Text> ADD SESSION </Text>
        </Button>
      </View>

    )
  }
}

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