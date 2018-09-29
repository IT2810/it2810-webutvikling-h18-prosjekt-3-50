import React, { Component } from 'react'
import {View, Text } from 'react-native'
import { Header } from 'react-native-elements'

class HeaderView extends Component {

  render() {

    return (
      <Header 
          centerComponent={{ text: this.props.title }} 
      /> )
  }

}

export default HeaderView