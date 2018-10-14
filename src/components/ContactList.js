import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { List, ListItem, Text, Left, Right, Button, View, Row, Picker, Icon, Card } from 'native-base'
import { connect } from 'react-redux'

import { removeContact } from '../../actions/index'
const savedContacts = require('../assets/contacts.json')

export class ContactList extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render () {
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
  removeContact: contact => dispatch(removeContact(contact))
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
