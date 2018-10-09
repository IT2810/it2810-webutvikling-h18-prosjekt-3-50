import Expo from "expo";
import React from "react";
import { Pedometer } from "expo";
import { Platform, StyleSheet } from "react-native";
import { Text, Container, Header, Icon, View, Button, ActionSheet } from 'native-base';

var BUTTONS = [
  { text: "5000", number: 5000},
  { text: "10 000", number: 10000},
  { text: "15 000", number: 15000},
  { text: "20 000", number: 20000},
  { text: "Delete" },
  { text: "Cancel" }
];
var DESTRUCTIVE_INDEX = 4;
var CANCEL_INDEX = 5;


export default class PedometerSensor extends React.Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      isPedometerAvailable: "checking",
      pastStepCount: 0,
      currentStepCount: 0,
      totalStepCount: 0,
      target: 0
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
            <Icon name={Platform.OS === 'ios' ? "ios-walk" : "md-walk"} style={{fontSize: 25, lineHeight: 25, color: 'white'}} />: {this.state.totalStepCount} / { this.state.target }
            <Button light onPress={() =>
            ActionSheet.show(
              {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Choose target steps"
              },
              buttonIndex => {
                this.setState({ 
                  clicked: BUTTONS[buttonIndex],
                  target: clicked.number
                },
                {});
              }
            )}
          ><Text>{ this.state.target }</Text></Button>
        </Text>
      </View>
    )
  }

  else{
    return(
      <View style={styles.stepsBar}>
      <Text style={{fontSize: 25, lineHeight: 25, color: 'white'}}>
        Error: Pedometer not available
      </Text>
    </View>
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