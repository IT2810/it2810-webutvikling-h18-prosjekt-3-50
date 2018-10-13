import React, { Component } from 'react'
import { Card, Text, CardItem, Body, Right, Left } from 'native-base'
import Moment from 'react-moment'
import { connect } from 'react-redux'


class ShowSession extends Component {
  constructor (props, context) {
    super(props, context)

    this.getSession = this.getSession.bind(this)
    this.getSelectedDate = this.getSelectedDate.bind(this)
    this.getDateText = this.getDateText.bind(this)
  }

  getSelectedDate () {
    this.props.selectedDate
  }

  getSession (date) {
    // TODO: get from redux

    return {
      name: 'Test Exercise',
      dateTime: new Date(2018, 12, 17, 4, 0, 0),
      contacts: ['Kari Nordmann', 'Pål Hansen', 'Line Kristiansen'],
      exercises: [
        { name: 'Squat', sets: '4', reps: '12' },
        { name: 'Benchpress', sets: '4', reps: '12' },
        { name: 'Pullup', sets: '4', reps: '12' },
        { name: 'Row', sets: '4', reps: '12' }
      ]
    }
  }

  getDateText (session) {
    let today = new Date().getDate()
    if (session == null) {
      return <Text>No session planned for today </Text>
    } else if (session.date == today) {
      return <Text>Todays session</Text>
    } else {

      return <Text>
        <Text>Date: </Text>
        <Moment element={Text} format="D. MMMM">
          {session.date}
        </Moment>
      </Text>
    }
  }

  render () {
    const date = this.getSelectedDate()
    let session = this.props.session 

    console.log("Session")
    console.log(session)
    if (session == null) {
      return (
        <Card>
          <CardItem bordered>
            <Text> No sessin for today </Text>
          </CardItem>
        </Card>
      )
    } else {
      const trainingPartners = session.contacts.join(', ')
      const exercises = session.exercises.map(exercise => exercise.name).join(', ')
      const dateText = this.getDateText(session)

      return (
        <Card>
          <Moment element={Text}>
            {this.props.date}
          </Moment>
          <CardItem header bordered>
            <Body>
              {dateText}
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
}

function mapStateToProps(state){
  return {
    date: state.sessions.selectedDate,
    session: state.sessions.activeSession
  }
}

export default connect(mapStateToProps)(ShowSession)
