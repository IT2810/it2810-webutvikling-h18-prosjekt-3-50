import React, { Component } from 'react'
import { View, Text, Container, Header, Content, Item, Input, Button, Label, Toast, Row, Fab, Icon, Form} from 'native-base';
import { StyleSheet, KeyboardAvoidingView } from 'react-native'

import { connect } from 'react-redux'

import { addExercise } from '../../actions/index'

export class AddExercise extends Component {
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
    if (this.validateExercise()) {
      this.showToast('Added exercise', 'success')

      this.props.addExercise({
        name: this.state.name,
        reps: this.state.reps,
        sets: this.state.sets,
        kg: this.state.kg
      })
      this.props.navigation.navigate('CreateSession')
    } else {
      console.log("Exercise is not valid")
    }
  }

  validateExercise() {
    if (this.state.name != null) {
      if (this.state.reps == null || this.state.sets == null) {
        this.showToast('Sets and/or reps must be set', 'danger')
        return false
      } else {
        return true
      }
    } else {
      this.showToast('You have to give the exercise a name', 'danger')
      return false
    }
  }

  showToast(text, type) {
    Toast.show({
      type: type,
      duration: 3000,
      text: text,
      position: "top"
    })
  }

  render() {

    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <Container testID={"container"}>
          <Content padder testID={"content"}>
            <Form>
              <View style={styles.inputView} testID={"view"}>
                <Text style={styles.inputTitle}>Description</Text>
                <Item>
                  <Input
                    onChangeText={(name) => {this.setState({name: name})}}
                    testID={"nameInput"}
                    value={this.state.name}
                    placeholder="Enter description here"
                  />
                </Item>
              </View>

              <View style={styles.inputView}>
                <Text style={styles.inputTitle}>Sets</Text>
                <Item>
                  <Input
                    onChangeText={(sets) => this.setState({sets})}
                    testID={"setsInput"}
                    value={this.state.sets}
                    placeholder="0"
                    keyboardType="numeric"
                  />
                </Item>
              </View>

              <View style={styles.inputView}>
                <Text style={styles.inputTitle}>Reps</Text>
                <Item>
                  <Input
                    onChangeText={(reps) => this.setState({reps})}
                    testID={"repsInput"}
                    value={this.state.reps}
                    placeholder="0"
                    keyboardType="numeric"
                  />
                </Item>
              </View>

              <View style={styles.inputView}>
                <Text style={styles.inputTitle}>Weight in kg (optional)</Text>
                <Item>
                  <Input
                    onChangeText={(kg) => this.setState({kg})}
                    testID={"kgInput"}
                    value={this.state.kg}
                    placeholder="0"
                    keyboardType="numeric"
                  />
                </Item>
              </View>
            </Form>
          </Content>
          <Fab
            onPress={this.addExercise}
            testID={'addExerciseButton'}
            style={{ backgroundColor: '#199E59' }}
            position="bottomRight"
          >
            <Icon ios="ios-checkmark" android="md-checkmark" style={{fontSize: 50, lineHeight: 50}} />

          </Fab>
        </Container>
      </KeyboardAvoidingView>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addExercise: exercise => dispatch(addExercise(exercise))
})

export default connect(null, mapDispatchToProps)(AddExercise)

const styles = StyleSheet.create ({
  inputView: {
    marginTop: '8%',
    paddingLeft: '4%',
    paddingRight: '4%'
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: "bold"
  }
})
