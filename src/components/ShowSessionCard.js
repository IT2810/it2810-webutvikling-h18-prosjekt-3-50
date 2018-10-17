import React, { Component } from 'react'
import { Card, Text, CardItem, Body, Right, Left } from 'native-base'
import Moment from 'react-moment'
import { connect } from 'react-redux'

export default ShowSessionCard = ({session}) => (
  <Card>
    <CardItem header bordered>
      <Body>
        <Text>
          <Text>Date: </Text>
          <Moment element={Text} format="D. MMMM">
            {session.date}
          </Moment>
        </Text>
      </Body>
      <Right>
        <Text>
          <Moment element={Text} fromNow>
            {session.date}
          </Moment>
        </Text>
      </Right>
    </CardItem>

    <CardItem bordered>
        <Text>
          <Text>Time: </Text>
          <Moment element={Text} format="HH:mm">
            {session.date}
          </Moment>
        </Text>
    </CardItem>

    <CardItem bordered>
      <Text>Title: {session.name} </Text>
    </CardItem>

    <CardItem bordered>
      <Text>
        With: {session.contacts.map(contact => contact.name).join(', ')}
      </Text>
    </CardItem>
    
    <CardItem bordered>
      <Text>
        Exercises: {session.exercises.map(exercise => exercise.name).join(', ')}
      </Text>
    </CardItem>
  </Card>
)