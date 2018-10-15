import React, { Component } from 'react'

import { SafeAreaView, ScrollView, Button } from 'react-native'
import  { View, Fab, Icon } from 'native-base'

import CreateSession from './CreateSession.js'
import CalendarView from './CalendarView.js'
import ShowSession from './ShowSession.js'
import PedometerSensor from './PedometerSensor.js'

class Home extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Home',
    headerRight: (
      <Button
        onPress={() => navigation.navigate('Stats')}
        title="Stats      " // whitespace = easiest way to create padding
        color="#fff"
      />
    )
  })

  render() {

    return (

      <SafeAreaView>
        <ScrollView style={{height: '100%'}}>
          <View style={{paddingBottom: '25%'}}>
            <CalendarView navigation={this.props.navigation}/>
            <PedometerSensor />
            <ShowSession />
          </View>
        </ScrollView>
        <Fab
          testID="addSessionButton"
          onPress={() => this.props.navigation.navigate('CreateSession')}
          //containerStyle={{}}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
        >
          <Icon name="add" style={{fontSize: 34, lineHeight: 34}} />
        </Fab>
      </SafeAreaView>

    )
  }
}

export default Home
