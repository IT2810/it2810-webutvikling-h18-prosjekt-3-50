import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Expo, { Font } from 'expo'

import CreateSession from './src/components/CreateSession.js'
import AddExercise from './src/components/AddExercise.js'
import Home from './src/components/Home.js'

import { Icon, StyleProvider, Root } from 'native-base'
import getTheme from './native-base-theme/components'
import material from './native-base-theme/variables/material'

import { createStackNavigator } from 'react-navigation'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  
  async componentWillMount () {
    // Needed to avoid error regarding font on Iphone
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf')
    })
    this.setState({ loading: false })
  }

  render () {
    if (this.state.loading) {
      return <Expo.AppLoading />;
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
