import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { List, ListItem, Text, Left, Right, Button, View, Row, Picker, Icon, Card } from 'native-base'

export default ({contacts, navigation, removeContact}) => (
  <View>
    <Row style={{marginTop: 16}}>
      <Left>
        <Text style={styles.inputTitle}>Contacts</Text>
      </Left>
      <Right>
        <Button
          primary
          block
          onPress={() => navigation.navigate('AddContact')}
          testID={'addContactButton'}
        >
          <Text>ADD CONTACT</Text>
        </Button>
      </Right>
    </Row>
    <Card style={styles.cardWithList}>
      {contacts.map((contact, index) => (
        <ListItem key={index}>
          <Left>
            <Text> { contact.name } </Text>
          </Left>
          <Right>
            <Button
              danger
              onPress={() => removeContact(contact)}
              testID={'removeContactButton'}
            >
              <Icon active name="trash" />
            </Button>
          </Right>
        </ListItem>
      ))}
    </Card>
  </View>
)

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
