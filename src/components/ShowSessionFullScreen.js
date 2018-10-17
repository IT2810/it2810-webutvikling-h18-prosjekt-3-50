import React, { Component } from 'react'
import { Container, Content, Button, Card, Text, CardItem, Body, Right, Left } from 'native-base'
import Moment from 'react-moment'
import { connect } from 'react-redux'

import ShowSessionCard from './ShowSessionCard'

import { markSessionAsDone } from '../../actions/index'

export class ShowSessionFullScreen extends Component {
  constructor (props, context) {
    super(props, context)

    this._done = this._done.bind(this)
  }

  _done () {
    this.props.markSessionAsDone(this.props.activeSession)
    this.props.navigation.navigate('Home')
  }

  render () {
      return (
        <Container>
          <Content padder scrollEnabled={true}>
            <ShowSessionCard session={this.props.activeSession} />
            <Button
              onPress={this._done}
            >
              <Text> Done </Text>
            </Button>
          </Content>
        </Container>
      )
  }
}

function mapStateToProps(state) {
  return {
    activeSession: state.sessions.activeSession,
  }
}

const mapDispatchToProps = dispatch => ({
  markSessionAsDone: session => dispatch(markSessionAsDone(session))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowSessionFullScreen)