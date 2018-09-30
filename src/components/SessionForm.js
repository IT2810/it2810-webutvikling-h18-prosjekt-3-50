import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import  { Button, Text, View, Container, Content, DatePicker, Form, Card, Footer, FooterTab, ScrollView, Header, Right, Left, Row, Toast, Icon, Input, Item, Label, List, ListItem, H1, H2} from 'native-base'

import AddExercise from './AddExercise.js'
import ExerciseListEl from './ExerciseListEl.js'

class SessionForm extends Component {
  static navigationOptions = {
    title: 'SessionForm'
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      date: this.props.date | null,
      name: null,
      exercises: [
        {name: 'Squat', sets: '4', reps: '12'},
        {name: 'Benchpress', sets: '4', reps: '12'},
        {name: 'Pullup', sets: '4', reps: '12'},
        {name: 'Row', sets: '4', reps: '12'}
      ],
      showToast: false
    }

    this.setDate = this.setDate.bind(this)
    this.saveSession = this.saveSession.bind(this)
    this.validateSession = this.validateSession.bind(this)
  }

  setDate(newDate) {
    this.setState({ date: newDate })
  }

  saveSession() {
    if (this.validateSession()) {
      // TODO save in state with redux

      this.props.navigation.navigate('Home')
    }
  }

  validateSession() {
    if (this.state.name != null) {
      if (this.state.date != null) {
        this.showToast('You have to add a date')
        return false
      }
      else if (this.state.exercises != null) {
        this.showToast('You have to add minimum 1 exercise')
        return false
      }
      return true
    }
    this.showToast('You have to give the exercise a name')
    return false
  }

  showToast(text) {
    Toast.show({
      type: 'danger',
      position: 'top',
      duration: 3000,
      text: text,
      style: {
        margin: 8,
        padding: 16
      }
    })
  }

  render () {
    const { navigate } = this.props.navigation

    return (
      <Container>
        <Content padder>
          <Item floatingLabel>
            <Label> Name </Label>
            <Input 
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
            />
          </Item>

          <Item>
            <Label> Date </Label>
            <DatePicker
              androidMode={"default"}
              placeHolderText="Select date"
              onDateChange={(date) => this.setDate({date})}
              value={this.state.date}
            />
          </Item>

          <Row style={{marginTop: 16}}>
            <Left>
              <H2>Exercises</H2>
            </Left>
            <Right>
              <Button
                primary
                block
                onPress={() => navigate('AddExercise')}
              >
                <Text> ADD EXERCISE </Text>
              </Button>
            </Right>
          </Row>

          <View>
            <List
              dataArray={this.state.exercises}
              renderRow={(exercise) => 
                <ExerciseListEl exercise={exercise.name} />
              }
            >
            </List>
          </View>

        </Content>
        <Footer>
          <FooterTab>
            <Button
              success
              large
              block
              onPress={this.saveSession}
            >
              <Text> SAVE SESSION </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

export default SessionForm

const styles = StyleSheet.create ({
  inline: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row'  
  }
  
})