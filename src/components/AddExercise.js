import React, { Component } from 'react'
import { View, Text, Container, Header, Content, Form, Item, Input, Button, Label, Card, CardItem, Toast, H3, H4, Row} from 'native-base';
import { StyleSheet } from 'react-native'

class AddExercise extends Component {
  static navigationOptions = {
    title: 'AddExercise'
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      name: null,
      reps: null,
      sets: null,
      kg: null
    }

    this.addExercise = this.addExercise.bind(this)
    this.validateExercise = this.validateExercise.bind(this)
    this.showToast = this.showToast.bind(this)
  }

  addExercise() {
    // TODO save in state with redux



    if (this.validateExercise()) {
      this.props.navigation.navigate('SessionForm')
    }

  }

  validateExercise() {
    if (this.state.name != null) {
      if (this.state.reps == null || this.state.sets == null) {
          this.showToast('Sets and/or reps can not be null')
          return false
      } else {
        this.showToast('name is ' + this.state.name)
        return true
      }
    } else {
      this.showToast('You have to give the exercise a name')
      return false
    }

  }

  showToast(text) {
    Toast.show({
      type: 'danger',
      duration: 3000,
      text: text
    })
  }
  
  render() {

    return (
      <Container testID={"container"}>
        <Content padder testID={"content"}>
          <View padder testID={"view"}>
            <Item floatingLabel>
              <Label> Name </Label>
              <Input
                onChangeText={(name) => {this.setState({name: name})}}
                testID={"nameInput"}
                value={this.state.name}
              />
            </Item>
          </View>

          <View>
            <Text>
              Sets (weight is optional)
            </Text>
            
            <Row style={{flex: 0, flexWrap: 'wrap', paddingBottom: 16}}>
             
              <Item 
                floatingLabel
                style={{width: 50}}
                
              >
                <Label> sets </Label>
                <Input 
                  onChangeText={(sets) => this.setState({sets})}
                  testID={"setsInput"}
                  value={this.state.sets}
                />
              </Item>

              <Text
                style={styles.textLabel}
              > x </Text>
              <Item
                floatingLabel
                style={{width: 50}}
                
              >
                <Label> reps </Label>
                <Input 
                  onChangeText={(reps) => this.setState({reps})}
                  testID={"repsInput"}
                  value={this.state.reps}
                />
              </Item>

              <Text
                style={styles.textLabel}
              > x </Text>

              <Item
                floatingLabel
                style={{width: 50}}
                
              >
                <Label> kg </Label>
                <Input
                  onChangeText={(kg) => this.setState({kg})}
                  testID={"kgInput"}
                  value={this.state.kg}
                />
              </Item>
             
            </Row>

          
            <Button
              primary
              flat
              block
              testID={"addExerciseButton"}
              onPress={this.addExercise}
            >
              <Text> Add exercise </Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
}

export default AddExercise

const styles = StyleSheet.create ({

  textLabel: {
    color: 'grey',
    textAlignVertical: 'bottom',
    fontSize: 16
  }

})

