import React, { Component } from 'react'

import { StyleSheet } from 'react-native'

import {Card, List, ListItem, Text, Left, Right, Button, View, Row, H2, Picker, Icon } from 'native-base'

const savedContacts = require('../assets/contacts.json')

export default class ContactList extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      possibleContacts: savedContacts,
      addedContacts: ["Ole Nordmann", "Kari Nordmann"]
    }

    this.getContacts = this.getContacts.bind(this)
    this.remove = this.remove.bind(this)
  }

  getContacts() {
    this.setState({ contacts: ["Ole Nordmann", "Kari Nordmann"] })
  }

  remove() {
    // TODO
  }

  addContact(value: string) {
    console.log("Adding the contact")
    this.setState(prevState => ({
      addedContacts: [...prevState.addedContacts, value]
    }))
  }

  render () {

    
    const contactPickers = [
      <Picker.Item label='Add a contact' value='0' key="0" />
    ]
    for (let contact of savedContacts.contacts) {
      //console.log(contacts.contacts[i])
      //let contact = contacts.contacts[i]
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
                  onPress={this.remove}
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
          onValueChange={this.addContact}
        >
          {contactPickers}         

        </Picker>
      </View>
    )
  }
}