import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { StyleSheet, Text, SafeAreaView } from 'react-native'

import CalendarView from './components/CalendarView.js'
import SessionForm from './components/SessionForm.js'
import AddExercise from './components/AddExercise.js'

import  { Button, Container, Header, Icon} from 'native-base'

import { createStackNavigator } from 'react-navigation'

class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <CalendarView />
          <Button 
            primary
            large
            block
            onPress={() => this.props.navigation.navigate('SessionForm')}
          >
            
            <Text> ADD SESSION </Text>
          </Button>
        </SafeAreaView>
      </Provider>
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
    SessionForm: { screen: SessionForm },
    AddExercise: { screen: AddExercise}
  },
  {
    initialRouteName: 'Home'
  }
)