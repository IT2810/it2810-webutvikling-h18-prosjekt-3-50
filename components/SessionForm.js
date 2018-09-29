import React, { Component } from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native'

import  { Button, Container, Content, DatePicker, Form, Header, Icon, Input, Item, Label, List, ListItem, H1, H2} from 'native-base'

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
      modalVisible: false
    }

    this.setDate = this.setDate.bind(this)
    this.setModalVisible = this.setModalVisible.bind(this)
  }


  setDate(newDate) {
    //this.setState({ date: newDate })
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible}) 
  }

  render () {
    const { navigate } = this.props.navigation

    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label> Name </Label>
              <Input />
            </Item>

            <Item>
              <Label> Date </Label>
              <DatePicker
                androidMode={"default"}
                placeHolderText="Select date"
                onDateChange={this.setDate}
              />
            </Item>

            <List>
              <ListItem itemHeader first>
                <H2>Exercises</H2>
              </ListItem>
              <ExerciseListEl exercise="Squat" />
              <ExerciseListEl exercise="Benchpress" />
              <ExerciseListEl exercise="Pullup" />
              <ExerciseListEl exercise="Row" />
            </List>
          </Form>
          <Button
            primary
            large
            block
            onPress={this.setModalVisible(true)}
          >
            <Text> ADD EXERCISE </Text>
          </Button>

          <Button
            success
            large
            block
            onPress={() => navigate('Home')}
          >

            <Text> SAVE SESSION </Text>
          </Button>
          <Modal
            visible={true}
            onRequestClose={() => {}}
          >

            <AddExercise />
            <Button 
              onPress={this.setModalVisible(false)}
            >
              <Text> Drop </Text>
            </Button>
          </Modal>
        </Content>
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