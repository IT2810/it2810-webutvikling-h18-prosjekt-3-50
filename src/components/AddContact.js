import React, { Component } from 'react'
import { View/*, Text*/ } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';

const savedContacts = require('../assets/contacts.json')

export default class AddContact extends Component {
  static navigationOptions = {
    title: 'Choose contact'
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      availableContacts: savedContacts.contacts
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Card>
            {this.state.availableContacts.map((contact, index) => (
              <CardItem
                key={index}
                bordered
                button
                onPress={() => {
                  //this.props.addContactToEvent() -> when redux ready
                  this.props.navigation.goBack()
                }}>
                <Text>
                  {contact}
                </Text>
              </CardItem>
            ))}
          </Card>
        </Content>
      </Container>
    )
  }
}
