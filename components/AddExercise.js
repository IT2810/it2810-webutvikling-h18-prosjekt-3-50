import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Button, Label, Card, CardItem, Row} from 'native-base';
import { View, Text, StyleSheet } from 'react-native'

class AddExercise extends Component {
  constructor(props, context) {
    super(props, context)


    this.addExercise = this.addExercise.bind(this)
  }

  addExercise() {
    // TODO
  }
  
  render() {

    return (
      <View>
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
                onPress={this.addExercise}
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
        </View>
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