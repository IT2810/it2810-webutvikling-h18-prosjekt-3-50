import React, { Component } from 'react'
import { Card, Text, CardItem, Body, Right, Left } from 'native-base'
import Moment from 'react-moment'
import { connect } from 'react-redux'

import { isToday } from '../assets/utils'

export class ShowSession extends Component {
  constructor (props, context) {
    super(props, context)

    this.getDateText = this.getDateText.bind(this)
    this._showFullScreen = this._showFullScreen.bind(this)
  }

  getDateText (session) {
    if (session == null) {
      return <Text>No session planned for today </Text>
    } else if (isToday(session.date)) {
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

  _showFullScreen() {
    this.props.navigation.navigate('ShowSessionFullScreen')
  }

  render () {
    const date = this.props.date
    let session = this.props.session 

    // Since there is always an empty sessionobject, we can't check if session is null. 
    // Instead we check if it has a name, since it's required to give it a name when saving it
    if (session == undefined || session.name == null) {
      return (
        <Card>
          <CardItem bordered>
            <Text> No session planned for today </Text>
          </CardItem>
        </Card>
      )
    } else {
      const trainingPartners = session.contacts ? session.contacts.map(contact => contact.name).join(', ') : ''
      const exercises = session.contacts ? session.exercises.map(exercise => exercise.name).join(', ') : ''
      const dateText = this.getDateText(session)

      return (
        <Card>
          <CardItem header bordered button
            onPress={this._showFullScreen}
          >
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
                  {session.date}
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
