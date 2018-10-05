import React, { Component } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import CreateSession from './CreateSession.js'
import CalendarView from './CalendarView.js'
import ShowSession from './ShowSession.js'

import  { Button, View, Text} from 'native-base'

class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <SafeAreaView>

        <CalendarView navigation={this.props.navigation}/>

        <ShowSession />
        <View style={styles.addSessionButton}>
          <Button block large primary
            onPress={() => this.props.navigation.navigate('CreateSession')}
          >
            <Text> ADD SESSION </Text>
          </Button>
        </View>
      </SafeAreaView>

    )
  }
}

export default Home

const styles = StyleSheet.create ({
  addSessionButton: {
    marginTop: '5%',
    width: '80%',
    marginLeft: '10%'
  }
})
