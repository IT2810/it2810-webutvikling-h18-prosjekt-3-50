import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Card, Text, CardItem } from 'native-base'
import { markSessionAsDone, updateCurrentSessionId } from '../../actions/index'
import { isSameDay } from '../assets/utils'
import ShowSessionCard from './ShowSessionCard'

class ShowSession extends Component {

  editSession = id => {
    this.props.updateCurrentSessionId(id)
    this.props.navigation.navigate('CreateSession', {title: 'Edit Session'})
  }

  render() {
    if (this.props.activeSessions.length == 0) {
      return (
        <Card>
          <CardItem bordered>
            <Text> No session planned for today </Text>
          </CardItem>
        </Card>
      )
    } else {
      return (
        <View>
          {this.props.activeSessions.map((activeSession, index) => (
            <ShowSessionCard
              key={index}
              session={activeSession}
              editSession={this.editSession}
              markSessionAsDone={this.props.markSessionAsDone}
            />
          )).sort((a, b) => Date.parse(a.time) < Date.parse(b.time))}
        </View>
      )
    }
  }
}


const mapStateToProps = (state) => ({
  activeSessions: state.sessions.sessions.filter(session => isSameDay(session.date, state.sessions.selectedDate))
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  markSessionAsDone: id => dispatch(markSessionAsDone(id)),
  updateCurrentSessionId: id => dispatch(updateCurrentSessionId(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowSession)
