import React, { Component } from 'react'
import { Card, Text, CardItem, Body, Right, Left, Button } from 'native-base'
import Moment from 'react-moment'

export default ShowSessionCard = ({editSession, markSessionAsDone, session}) => (
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
            {session.time}
          </Moment>
        </Text>
    </CardItem>

    <CardItem bordered>
      <Text>Title: {session.name} </Text>
    </CardItem>

    {session.contacts.length > 0 && (
      <CardItem bordered>
        <Text>
          With: {session.contacts.map(contact => contact.name).join(', ')}
        </Text>
      </CardItem>
    )}

    {session.exercises.length > 0 && (
      <CardItem bordered>
        <Body style={{flexDirection: "row", justifyContent: "center"}}>
          <Card>
            {session.exercises.map((exercise, index) => (
              <CardItem bordered key={index}>
                <Text>{exercise.name} {exercise.sets} x {exercise.reps} {exercise.kg && (exercise.kg + 'kg')}</Text>
              </CardItem>
            ))}
          </Card>
        </Body>
      </CardItem>
    )}

    <CardItem bordered>
      <Left>
        {
          session.done
          ? (
            <Text style={{color: '#24B36B'}}>
              Exercise completed
            </Text>
            )
          : (
            <Button light onPress={() => markSessionAsDone(session.id)}>
              <Text>
                Mark as done
              </Text>
            </Button>
            )
        }
      </Left>
      <Right>
        <Button light onPress={() => editSession(session.id)}>
          <Text>Edit</Text>
        </Button>
      </Right>
    </CardItem>
  </Card>
)
