/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import ShowSession from '../ShowSession'
import toJson from 'enzyme-to-json'
import Moment from 'react-moment'
import { Card, Text, CardItem, Body, Right, Left } from 'native-base'

import initial_state_mock from '../../assets/initial_state_mock.js'
import configureStore from 'redux-mock-store'

import { connect } from 'react-redux'

describe('ShowSession', () => {
  const initialState = initial_state_mock
  const mockStore = configureStore()
  let wrapper
  let navigateMock
  let store

  beforeEach(() => {
    navigateMock = jest.fn()
    const navigation = { navigate: navigateMock }
    
    store = mockStore(initialState)
    wrapper = shallow(<ShowSession navigation={navigation} store={store} />)
  })

  it('renders correctly', () => {
    expect(toJson(wrapper.dive())).toMatchSnapshot()
  })

  describe('getDateText', () => {
    it('if no session is planned for the date', () => {
      console.log(toJson(wrapper))
      console.log(toJson(wrapper.instance()))
      let text = wrapper.instance().getDateText(null)

      expect(text).toEqual(
        <Text>No session planned for today </Text>
      )
    })

    it('if there is a session planned for the date', () => {
      let session = { date: new Date() }

      let text = wrapper.instance().getDateText(session)

      expect(text).toEqual(
        <Text>Todays session</Text>
      )
    })

    it('if the session is for a date that was', () => {
      let session = { date: new Date(2018, 10, 4) }

      let text = wrapper.instance().getDateText(session)

      expect(text).toEqual(
        <Text>
          <Text>Date: </Text>
          <Moment element={Text} format="D. MMMM">
            {session.dateTime}
          </Moment>
        </Text>
      )
    })
  })
})
