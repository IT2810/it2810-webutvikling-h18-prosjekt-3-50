import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { List, ListItem, Text, Left, Right, Button, View, Row, Picker, Icon, Card } from 'native-base'
import { connect } from 'react-redux'

import { removeContact } from '../../actions/index'
const savedContacts = require('../assets/contacts.json')

export class ContactList extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      availableContacts: savedContacts.contacts,
      addedContacts: ["Ola Nordmann", "Kari Nordmann"]
    }

    //this.getAll = this.getAll.bind(this)
    this.availableContacts = this.availableContacts.bind(this)
  }

  //getAll() {this.setState({ availableContacs: savedContacts.contacts })} // TODO: get from redux

 /* _remove(value: string) {
    // TODO in redux, then update state
    this.setState(prevState => ({
      addedContacts: prevState.addedContacts.filter(contact => contact !== value)
    }))
  }*/

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
    /*const contactPickers = []

    for (let contact of this.availableContacts()) {
      contactPickers.push(<Picker.Item label={contact} value={contact} key={contact}/>)
    }*/

    return (
      <View>

        <Row style={{marginTop: 16}}>
          <Left>
            <Text style={styles.inputTitle}>Contacts</Text>
          </Left>
          <Right>
            <Button
              primary
              block
              onPress={() => this.props.navigation.navigate('AddContact')}
            >
              <Text>ADD CONTACT</Text>
            </Button>
          </Right>
        </Row>
        <Card style={styles.cardWithList}>
          <Text> { this.props.contacts.length } </Text>
          {this.props.contacts.map((contact, index) => (
            <ListItem key={index}>
              <Left>
                <Text> { contact.name } </Text>
              </Left>
              <Right>
                <Button
                  danger
                  onPress={() => this.props.removeContact(contact)}
                >
                  <Icon active name="trash" />
                </Button>
              </Right>
            </ListItem>
          ))}
        </Card>
      </View>
    )
  }
}

function mapStateToProps(state){
  console.log(state.sessions.activeSession)
  /*return {
    contacts: state.sessions.activeSession
  }*/

  if (state.sessions.activeSession) {
    return {
      contacts: state.sessions.activeSession.contacts    }  
  } else {
    return {
      contacts: []
    }
  }

}

const mapDispatchToProps = dispatch => ({
  removeContacts: contact => dispatch(removeContacts(contact))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)

const styles = StyleSheet.create ({
  cardWithList: {
    marginTop: '5%',
    marginBottom: '5%'
  },
  inputTitle: {
    lineHeight: 45,
    fontSize: 27,
    marginLeft: '8%',
    fontWeight: '600'
  }
})
