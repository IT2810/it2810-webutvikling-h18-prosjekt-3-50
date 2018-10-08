/**
 * @jest-environment jsdom
 */

import React from 'react'
import { shallow } from 'enzyme'
import CalendarView from '../CalendarView'
import toJson from 'enzyme-to-json'
import 'native-base'
import { findByID } from '../../testUtils.js'

describe('CalendarView', () => {
  let wrapper
  const navigation = { navigate: jest.fn() }

  beforeEach(() => {
    wrapper = shallow(<CalendarView navigation={navigation}/>)
  })

  it('renders correctly', () => {
    expect(toJson(wrapper.dive())).toMatchSnapshot()
  })

  describe('addSession', () => {
    it('called when long press on day in calendar', () => {
      let addSessionMock = jest.fn()

      wrapper.instance().addSession = addSessionMock

      wrapper.instance().forceUpdate()

      let date = findByID(wrapper, 'calendar')
      date.props().onDayLongPress('2018-10-18')

      expect(addSessionMock.mock.calls.length).toBe(1)
    })

    it('calls navigate with date as param', () => {
      const navigateMock = jest.fn()
      const navigation = { navigate: navigateMock }
      const wrapper = shallow(<CalendarView navigation={navigation} />)

      let date = findByID(wrapper, 'calendar')
      date.props().onDayLongPress('2018-10-18')

      console.log(navigateMock.mock.calls)
      expect(navigateMock.mock.calls.length).toBe(1)
      expect(navigateMock.mock.calls[0][0]).toBe('CreateSession')
      expect(navigateMock.mock.calls[0][1].date).toBe('2018-10-18')
    })
  })

  describe('selectDate', () => {
    it('called when press on day in calendar', () => {
      let selectDateMock = jest.fn()

      wrapper.instance().selectDate = selectDateMock
      wrapper.instance().showToast = jest.fn()

      wrapper.instance().forceUpdate()

      let calendar = findByID(wrapper, 'calendar')
      calendar.props().onDayPress('2018-10-18')

      expect(selectDateMock.mock.calls.length).toBe(1)
    })

    it('setting date in state', () => {
      let dateString = '2018-10-18'
      let date = { dateString: dateString }
      let calendar = findByID(wrapper, 'calendar')
      calendar.props().onDayPress(date)

      expect(wrapper.state('date')).toBe(date)
    })

    it('add date to markedDates with select as true', () => {
      let dateString = '2018-10-18'
      let date = { dateString: dateString }
      let calendar = findByID(wrapper, 'calendar')
      calendar.props().onDayPress(date)

      let dateInMarkedDates = wrapper.state('markedDates')[date.dateString]
      expect(dateInMarkedDates.selected).toBe(true)
    })

    it('set selected date as marked if it is marked', () => {
      let dateString = '2018-10-18'
      let date = { dateString: dateString }
      let sessionDateObject = { [dateString]: { marked: true } }
      wrapper.setState({
        sessionDates: sessionDateObject,
        markedDates: {}
      })

      let calendar = findByID(wrapper, 'calendar')
      calendar.props().onDayPress(date)

      let dateInMarkedDates = wrapper.state('markedDates')[dateString]
      expect(dateInMarkedDates.selected).toBe(true)
      expect(dateInMarkedDates.marked).toBe(true)
    })
  })
})
