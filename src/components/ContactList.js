import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { List, ListItem, Text, Left, Right, Button, View, Row, H2, Picker, Icon } from 'native-base'

const savedContacts = require('../assets/contacts.json')

export default class ContactList extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      availableContacts: savedContacts.contacts,
      addedContacts: ["Ola Nordmann", "Kari Nordmann"]
    }

    this.getAll = this.getAll.bind(this)
    this.availableContacts = this.availableContacts.bind(this)
  }

  getAll() {
    // TODO: get from redux
    this.setState({ availableContacs: savedContacts.contacts })
  }

  _remove(value: string) {
    // TODO in redux, then update state
    this.setState(prevState => ({
      addedContacts: prevState.addedContacts.filter(contact => contact !== value)
    }))
  }

  _add(value: string) {
    if (value !== '0') {
      this.setState(prevState => ({
        addedContacts: [...prevState.addedContacts, value]
      }))
    }
  }

  // Filter out the contacts allready added, so that they can't be added twice
  availableContacts() {
    return this.state.availableContacts.filter(contact => this.state.addedContacts.indexOf(contact) === -1)
  }

  render () {    
    const contactPickers = [
      <Picker.Item label='Add a contact' value='0' key="0" />
    ]

    for (let contact of this.availableContacts()) {
      contactPickers.push(<Picker.Item label={contact} value={contact} key={contact}/>)
    }

    return (
      <View>

        <Row style={{marginTop: 16}}>
          <Left>
            <H2>Contacts</H2>
          </Left>
        </Row>

        <List
          dataArray={this.state.addedContacts}
          renderRow={(contact) => 
            <ListItem>
              <Left>
                <Text> {contact} </Text>
              </Left>
              <Right>
                <Button
                  danger
                  onPress={this._remove.bind(this, contact)}
                >
                  <Icon active name="trash" />
                </Button>
              </Right>
            </ListItem>
          }
        >
        </List>

        <Picker
          mode="dropdown"
          placeholder="Add a contact"
          selectedValue=''
          onValueChange={this._add.bind(this)}
        >
          {contactPickers}         

        </Picker>
      </View>
    )
  }
}