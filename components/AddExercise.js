import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Button} from 'native-base';
import { View, Text, StyleSheet } from 'react-native'

class AddExercise extends Component {
  static navigationOptions = {
    title: 'AddExercise'
  }
  
  render() {

    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input placeholder="Exercise"/>
            </Item>

            <Item>
              <Input placeholder="Nr. reps"/>
            </Item>

            <Item>
              <Input placeholder="Nr. sets"/>
            </Item>

            <Button>
              <Text> Add exercise </Text>
            </Button>
            <Button>
              <Text> Cancel </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}

export default AddExercise

const styles = StyleSheet.create ({


})