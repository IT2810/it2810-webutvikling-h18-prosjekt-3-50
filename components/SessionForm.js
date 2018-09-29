import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import  { Button, Container, DatePicker, Form, Header, Icon, Input, Item, Label} from 'native-base'

import AddExercise from './AddExercise.js'

class SessionForm extends Component {
  static navigationOptions = {
    title: 'SessionForm'
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      date: this.props.date | null
    }

    this.setDate = this.setDate.bind(this)
  }


  setDate(newDate) {
    this.setState({ date: newDate })
  }

  render () {
    const { navigate } = this.props.navigation

    return (
      <Container>
        <Header>
          <Text>
            Plan session
          </Text>
        </Header>
        <Form>
          <Item floatingLabel>
            <Label> Name </Label>
            <Input />
          </Item>


          <Container style={styles.inline}>
            <Text> Date: </Text>
            <DatePicker
              androidMode={"default"}
              placeHolderText="Select date"
              onDateChange={this.setDate}
            />
          </Container>
        </Form>
        <Button
          primary 
          onPress={() => navigate('AddExercise')}
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