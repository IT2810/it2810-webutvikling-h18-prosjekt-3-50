/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import { ShowSession } from '../ShowSession'
import toJson from 'enzyme-to-json'
import Moment from 'react-moment'
import { Card, Text, CardItem, Body, Right, Left } from 'native-base'

describe('ShowSession', () => {
  let wrapper
  let navigateMock
  let navigation

  beforeEach(() => {
    navigateMock = jest.fn()
    navigation = { navigate: navigateMock }
    
    wrapper = shallow(<ShowSession navigation={navigation} />)
  })

  it('renders correctly', () => {
    expect(toJson(wrapper.dive())).toMatchSnapshot()
  })

  describe('getDateText', () => {
    it('if no session is planned for the date', () => {
      let text = wrapper.instance().getDateText(null)

      expect(text).toEqual(
        <Text>No session planned for today </Text>
      )
    })

    it('if there is a session planned for the date', () => {
      let session = { date: new Date().toISOString(), contacts: ['contact'], exercises: [] }

      console.log("Test session for today")
      let text = wrapper.instance().getDateText(session)

      expect(text).toEqual(
        <Text>Todays session</Text>
      )
    })

    it('if the session is for a date that was', () => {
      let session = { date: '2018-10-04T14:30:00.000', contacts: ['contact'], exercises: [] }

      let text = wrapper.instance().getDateText(session)

      expect(text).toEqual(
        <Text>
          <Text>Date: </Text>
          <Moment element={Text} format="D. MMMM">
            {session.date}
          </Moment>
        </Text>
      )
    })
  })
})
