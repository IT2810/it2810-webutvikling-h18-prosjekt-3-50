import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Button, Label, Card, CardItem, Row} from 'native-base';
import { View, Text, StyleSheet } from 'react-native'

class AddExercise extends Component {
  static navigationOptions = {
    title: 'AddExercise'
  }
  
  render() {

    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label> Name </Label>
              <Input/>
            </Item>

            <Text>
              Sets
            </Text>
            
            <Card style={{flex: 0, flexWrap: 'wrap'}}>
              <CardItem>
                <Item floatingLabel style={{width: 50}}>
                  <Label> sets </Label>
                  <Input />
                </Item>

                <Text> x </Text>
                <Item floatingLabel style={{width: 50}}>
                  <Label> reps </Label>
                  <Input />
                </Item>

                
                <Item floatingLabel style={{width: 50}}>
                  <Label> kg </Label>
                  <Input />
                </Item>
              </CardItem>
            </Card>

            <Container style={styles.row}>
              <Button
                primary
              >
                <Text> Add exercise </Text>
              </Button>
              <Button
                light
              >
                <Text> Cancel </Text>
              </Button>
            </Container>
          </Form>
        </Content>
      </Container>
    )
  }
}

export default AddExercise

const styles = StyleSheet.create ({

  row: {
    display: 'flex',
    flexDirection: 'row' 
  }


})