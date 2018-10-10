import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Expo, { Font } from 'expo'

import CreateSession from './src/components/CreateSession.js'
import AddExercise from './src/components/AddExercise.js'
import AddContact from './src/components/AddContact.js'
import Home from './src/components/Home.js'


import { getTheme, material, StyleProvider, Root } from 'native-base'

import { createStackNavigator } from 'react-navigation'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = { loading: true }
  }

  async componentWillMount () {
    // Needed to avoid error regarding font on Iphone
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    })
    this.setState({ loading: false })
  }

  render () {
    if (this.state.loading) {
      return <Expo.AppLoading />
    }
    return (
      <Provider store={store}>
        <Root>
          <StyleProvider style={getTheme(material)}>
            <RootStack />
          </StyleProvider>
        </Root>
      </Provider>
    )
  }
}

const RootStack = createStackNavigator(
  {
    Home: { screen: Home },
    CreateSession: { screen: CreateSession },
    AddExercise: { screen: AddExercise },
    AddContact: { screen: AddContact }
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
