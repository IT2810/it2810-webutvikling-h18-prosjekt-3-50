import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Content, Text, Card, CardItem } from 'native-base';
import { connect } from 'react-redux'


const savedContacts = require('../assets/contacts.json')

import { addContact } from '../../actions/index'

export class AddContact extends Component {
  static navigationOptions = {
    title: 'Choose contact'
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      availableContacts: savedContacts.contacts
    }

    this._add = this._add.bind(this)
  }

  _add(contact) {
    console.log("Contact: ")
    console.log(contact)
    this.props.addContact(contact)
    this.props.navigation.goBack()
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
                onPress={() => this._add(contact)}
                >
                <Text>
                  { contact.name }
                </Text>
              </CardItem>
            ))}
          </Card>
        </Content>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch(addContact(contact))
})

export default connect(null, mapDispatchToProps)(AddContact)