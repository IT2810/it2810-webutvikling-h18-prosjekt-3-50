import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import CalendarView from './components/CalendarView.js'
import SessionForm from './components/SessionForm.js'

import  { Button, Container, Header, Icon} from 'native-base'

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
    return <RootStack />
  }
}

const RootStack = createStackNavigator(
  {
    Home: { screen: Home },
    SessionForm: { screen: SessionForm }
  },
  {
    initialRouteName: 'Home'
  }
)