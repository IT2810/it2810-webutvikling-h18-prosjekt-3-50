import React, { Component } from 'react'

import SessionForm from './SessionForm.js'
import CalendarView from './CalendarView.js'

import  { Button, View, Text} from 'native-base'

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

export default Home