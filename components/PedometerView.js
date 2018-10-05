import Expo from "expo";
import React from "react";
import { Pedometer } from "expo";
import { StyleSheet } from "react-native";
import { View, Text, Container, Header, Content, Form, Item, Input, Button, Label, Card, CardItem, Toast, H3, H4, Row} from 'native-base';


export default class PedometerSensor extends React.Component {
  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps
    });
});

Pedometer.isAvailableAsync().then(
  result => {
    this.setState({
      isPedometerAvailable: String(result)
    });
  },
  error => {
    this.setState({
      isPedometerAvailable: "Could not get isPedometerAvailable: " + error
    });
  }
);

const end = new Date();
const start = new Date();
start.setDate(end.getDate() - 1);
Pedometer.getStepCountAsync(start, end).then(
  result => {
    this.setState({ pastStepCount: result.steps });
  },
  error => {
    this.setState({
      pastStepCount: "Could not get stepCount: " + error
    });
  }
);
};

_unsubscribe = () => {
this._subscription && this._subscription.remove();
this._subscription = null;
};

render() {
  if (this.state.isPedometerAvailable){
    return (
      <View style={styles.container}>
        <Text>
          Working
        </Text>
      <Text>
        <Header>
          Last 24 hours: {this.state.pastStepCount}
        </Header>
      </Text>
      <Text>
        Steps: {this.state.currentStepCount}
      </Text>
      </View>
    );
  }

  else{
    return(
      <View style={styles.container}>
      <Text>
        Error: Pedometer.isAvailableAsync(): {this.state.isPedometerAvailable}
      </Text>
      <Text>
        <Header>
          Last 24 hours: {this.state.pastStepCount}
        </Header>
      </Text>
      <Text>
        Steps: {this.state.currentStepCount}
      </Text>
    </View>
    );
  }
}
}


const styles = StyleSheet.create({
container: {
flex: 1,
marginTop: 15,
alignItems: "center",
justifyContent: "center",
borderStyle: "solid",
borderColor: "black",
}
});


Expo.registerRootComponent(PedometerSensor);
