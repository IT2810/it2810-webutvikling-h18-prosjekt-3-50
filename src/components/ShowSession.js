import React, { Component } from 'react'
import { Card, Text } from 'native-base'
import Moment from 'react-moment'

class ShowSession extends Component {

  constructor(props, context) {
    super(props, context)

    this.getSession = this.getSession.bind(this)
    this.getSElectedDate = this.getSelectedDate.bind(this)
  }

  getSelectedDate() {
    // Get selected date from store
    return new Date()
  }

  getSession(date) {
    // TODO: get from redux
    return {
      name: "Test Exercise",
      dateTime: "2018-10-05T12:59-0500",
      contacts: ["Kari Nordmann", "Pål Hansen", "Line Kristiansen"],
      exercises: [
        {name: 'Squat', sets: '4', reps: '12'},
        {name: 'Benchpress', sets: '4', reps: '12'},
        {name: 'Pullup', sets: '4', reps: '12'},
        {name: 'Row', sets: '4', reps: '12'}
      ]
    }
  }

  render() {
    const date = this.getSelectedDate()
    const session = this.getSession(date)
    const trainingPartners = session.contacts.join(', ')
    const exercises = session.exercises.map(exercise => exercise.name).join(', ')
    return (
      <Card>
        <Text> {session.name} </Text>
        <Moment element={Text} format="DD.MM HH:mm">
          {session.date}
        </Moment>

        <Text> 
          Trainingpartners: {trainingPartners}
        </Text>

        <Text>
          Exercises: {exercises}
        </Text>

      </Card>
    )
  }

}

export default ShowSession