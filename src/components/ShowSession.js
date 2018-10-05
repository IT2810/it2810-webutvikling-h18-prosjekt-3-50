import React, { Component } from 'react'
import { Card, Text, CardItem, Body, Right, Left } from 'native-base'
import Moment from 'react-moment'

class ShowSession extends Component {

  constructor(props, context) {
    super(props, context)

    this.getSession = this.getSession.bind(this)
    this.getSelectedDate = this.getSelectedDate.bind(this)
    this.getDateText = this.getDateText.bind(this)
    this.getTimeCount = this.getTimeCount.bind(this)
  }

  getSelectedDate() {
    // Get selected date from store
    return new Date()
  }

  getSession(date) {
    // TODO: get from redux
    return {
      name: "Test Exercise",
      dateTime: new Date(2018, 9, 2, 16, 30, 0, 0),
      contacts: ["Kari Nordmann", "Pål Hansen", "Line Kristiansen"],
      exercises: [
        {name: 'Squat', sets: '4', reps: '12'},
        {name: 'Benchpress', sets: '4', reps: '12'},
        {name: 'Pullup', sets: '4', reps: '12'},
        {name: 'Row', sets: '4', reps: '12'}
      ]
    }
  }

  getDateText(session) {
    let today = new Date().getDate()
    if (session == null) {
      return <Text>No session planned for today </Text>
    } else if (session.dateTime.getDate() == today) {
      return <Text>Todays session</Text>
    } else {
      return <Text>
        <Text>Date: </Text>
        <Moment element={Text} format="D. MMMM">
          {session.dateTime}
        </Moment>
      </Text>
    }

  }

  getTimeCount = (dateTime) => (
    <Moment element={Text} fromNow={new Date() > dateTime} toNow={new Date() <= dateTime}>
      {dateTime}
    </Moment>
  )

  render() {
    const date = this.getSelectedDate()
    const session = this.getSession(date)
    const trainingPartners = session.contacts.join(', ')
    const exercises = session.exercises.map(exercise => exercise.name).join(', ')

    console.log("This is the session")
    console.log(session)

    const dateText = this.getDateText(session)

    const timeCount = this.getTimeCount(session.dateTime)

    return (
      <Card>
        <CardItem header bordered>
          <Body>
              {dateText}
          </Body>
          <Right>
            <Text> ( {timeCount} ) </Text>
          </Right>
        </CardItem>
        <CardItem bordered>
            <Text>
              <Text>Time: </Text>
              <Moment element={Text} format="HH:mm">
                {session.dateTime}
              </Moment>
            </Text>
        </CardItem>
        <CardItem bordered>
          <Text>Title: {session.name} </Text>
        </CardItem>
        <CardItem bordered>
          <Text>
            With: {trainingPartners}
          </Text>
        </CardItem>
        <CardItem bordered>
          <Text>
            Exercises: {exercises}
          </Text>
        </CardItem>
      </Card>
    )
  }

}

export default ShowSession
