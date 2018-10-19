import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Content, Text, Card, CardItem } from 'native-base';
import { connect } from 'react-redux'

import { addContact } from '../../actions/index'

export class AddContact extends Component {
  static navigationOptions = {
    title: 'Choose contact'
  }

  constructor(props, context) {
    super(props, context)
    this._add = this._add.bind(this)
  }

  _add(contact) {
    this.props.addContact(contact)
    this.props.navigation.goBack()
  }

  render() {
    return (
      <Container>
        <Content>
          <Card>
            {this.props.availableContacts.map((contact, index) => (
              <CardItem
                key={index}
                bordered
                button
                onPress={() => this._add(contact)}
                testID={'addContactButton'}
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

function mapStateToProps(state) {
  const alreadyAddedContacts = state.sessions.temporarySession.contacts
  const availableContacts = state.sessions.contacts.filter( // filter out already added contacts
    contact => -1 == alreadyAddedContacts.findIndex(addedContact => addedContact.name == contact.name)
  )
  return {
    availableContacts
  }
}

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch(addContact(contact))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddContact)
