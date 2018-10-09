import React, { Component } from 'react'
import  { Button, View, Text} from 'native-base'

import CreateSession from './CreateSession.js'
import CalendarView from './CalendarView.js'
import ShowSession from './ShowSession.js'
import PedometerSensor from './PedometerSensor.js'


class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View>

        <CalendarView navigation={this.props.navigation}/>
        <PedometerSensor />
        <ShowSession />
        <Button
          primary
          large
          block
          onPress={() => this.props.navigation.navigate('CreateSession')}
          testID={'addSessionButton'}
        >
          <Text> ADD SESSION </Text>
        </Button>
      </View>
    )
  }
}

export default Home