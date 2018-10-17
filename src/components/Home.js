import React, { Component } from 'react'

import { SafeAreaView, ScrollView, Button } from 'react-native'
import  { View, Fab, Icon } from 'native-base'

import { connect } from 'react-redux'

import CreateSession from './CreateSession.js'
import CalendarView from './CalendarView.js'
import ShowSession from './ShowSession.js'
import PedometerSensor from './PedometerSensor.js'

import { createNewSession } from '../../actions/index'

class Home extends Component {
  static navigationOptions = {title: 'Home'}

  createNewSession = () => {
    this.props.createNewSession()
    this.props.navigation.navigate('CreateSession', {title: 'Create Session'})
  }

  goToStats = () => this.props.navigation.navigate('Stats')

  render() {
    return (
      <SafeAreaView>
        <ScrollView style={{height: '100%'}}>
          <View style={{paddingBottom: '25%'}}>
            <CalendarView navigation={this.props.navigation} />
            <PedometerSensor />
            <ShowSession navigation={this.props.navigation} />
          </View>
        </ScrollView>
        <Fab
          testID="addSessionButton"
          onPress={this.createNewSession}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
        >
          <Icon name="add" style={{fontSize: 34, lineHeight: 34}} />
        </Fab>
        <Fab
          testID="addSessionButton"
          onPress={this.goToStats}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomLeft"
        >
          <Icon name="stats" style={{fontSize: 34, lineHeight: 34}} />
        </Fab>
      </SafeAreaView>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createNewSession: () => dispatch(createNewSession())
})

export default connect(null, mapDispatchToProps)(Home)
