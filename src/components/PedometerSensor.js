import Expo from "expo";
import React from "react";
import { Pedometer } from "expo";
import { Platform, StyleSheet } from "react-native";
import { Text, Container, Header, Icon, View } from 'native-base';


export default class PedometerSensor extends React.Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      isPedometerAvailable: "checking",
      pastStepCount: 0,
      currentStepCount: 0,
      totalStepCount: 0
    }
  }


  componentDidMount() {
    this._subscribe()
  }

  componentWillUnmount() {
    this._unsubscribe()
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps,
        totalStepCount: result.steps + this.state.pastStepCount
    })
  })

  Pedometer.isAvailableAsync().then(
    result => {
      this.setState({
        isPedometerAvailable: String(result)
      })
    },
    error => {
      this.setState({
        isPedometerAvailable: "Could not get isPedometerAvailable: " + error
      })
    }
  )

  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - 1);
  Pedometer.getStepCountAsync(start, end).then(
    result => {
      this.setState({
        pastStepCount: result.steps,
        totalStepCount : this.state.currentStepCount + result.steps
      });
    },
    error => {
      this.setState({
        pastStepCount: "Could not get stepCount: " + error
      })
    }
  )
  }

_unsubscribe = () => {
this._subscription && this._subscription.remove();
this._subscription = null;
};

render() {
  if (this.state.isPedometerAvailable){
    return (
      <View style={styles.stepsBar}>
        <Text style={{fontSize: 25, lineHeight: 25, color: 'white'}}>
            <Icon name={Platform.OS === 'ios' ? "ios-walk" : "md-walk"} style={{fontSize: 25, lineHeight: 25, color: 'white'}} />: {this.state.totalStepCount}
        </Text>
      </View>
    )
  }

  else{
    return(
      <Container>
      <Text>
        Error: Pedometer.isAvailableAsync(): {this.state.isPedometerAvailable}
      </Text>
    </Container>
    );
  }
}
}


//Expo.registerRootComponent(PedometerSensor);


const styles = StyleSheet.create({
  stepsBar: {
    width: '100%',
    height: '10%',
    backgroundColor: '#57BA98',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})