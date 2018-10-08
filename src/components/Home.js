import React, { Component } from 'react'

import { SafeAreaView, ScrollView } from 'react-native'
import  { View, Fab, Icon} from 'native-base'

import CreateSession from './CreateSession.js'
import CalendarView from './CalendarView.js'
import ShowSession from './ShowSession.js'
import PedometerView from './PedometerView'

class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {

    return (
      <SafeAreaView>
        <ScrollView>
          <CalendarView navigation={this.props.navigation}/>
          <PedometerView />
          <ShowSession />
        </ScrollView>
        <Fab
          onPress={() => this.props.navigation.navigate('CreateSession')}
          containerStyle={{ }}
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
