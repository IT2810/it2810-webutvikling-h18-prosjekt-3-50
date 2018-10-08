/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import ShowSession from '../ShowSession'
import toJson from 'enzyme-to-json'
import Moment from 'react-moment'
import { Card, Text, CardItem, Body, Right, Left } from 'native-base'

describe('ShowSession', () => {
  let wrapper
  let navigateMock

  beforeEach(() => {
    navigateMock = jest.fn()
    const navigation = { navigate: navigateMock }
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
      let session = { dateTime: new Date() }

      let text = wrapper.instance().getDateText(session)

      expect(text).toEqual(
        <Text>Todays session</Text>
      )
    })

    it('if the session is for a date that was', () => {
      let session = { dateTime: new Date(2018, 10, 4) }

      let text = wrapper.instance().getDateText(session)

      expect(text).toEqual(
        <Text> Session the
          <Moment element={Text} format="DD.MM">
            {session.dateTime}
          </Moment>
        </Text>
      )
    })
  })

  describe('getTimeCount', () => {
    it('if date is before now', () => {
      let today = new Date()
      let dateTime = today.setDate(today.getDate() - 1)

      let text = wrapper.instance().getTimeCount(dateTime)

      expect(text).toEqual(
        <Moment element={Text} toNow>
          {dateTime}
        </Moment>
      )
    })

    it('if date is after now', () => {
      let today = new Date()
      let dateTime = today.setDate(today.getDate() + 1)

      let text = wrapper.instance().getTimeCount(dateTime)

      expect(text).toEqual(
        <Moment element={Text} fromNow>
          {dateTime}
        </Moment>
      )
    })
  })
})
